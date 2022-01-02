import { Alert, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { user, authToken } = useAuth();
    const { bikeId } = useParams();
    const [ bike, setBike ] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);
    
    const initialInfo = {
        name: user.displayName,
        email: user.email, 
        phone: '',
        bikeName: '',
        bikeId: '',
        address: ''
    }
    
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    useEffect(()=>{
        fetch(`https://calm-lowlands-39164.herokuapp.com/products/${bikeId}`)
            .then( res => res.json())
            .then( data => setBike(data))
    },[bikeId])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
        e.preventDefault();
    }

    const handleOrderSubmit = e => {

        const order = {
            ...orderInfo
        }

         fetch('https://calm-lowlands-39164.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
          })
          .then(res => res.json())
          .then((data) => {
            if (data.insertedId) {
                setOrderSuccess(true);
            }
            // console.log(data);
          });
        e.preventDefault();
      };


    return (
        <>
            <Navigation />
            <OrderStyled>
                <div key={bike._id} className="container my-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <img src={bike.image} className='img-fluid' alt={bike.name} />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 text">
                            { !orderSuccess ?
                                <form>
                                <TextField
                                    id="outlined-size-small"
                                    sx={{ width: '100%', mt: 2}}
                                    name='name'
                                    label="Name"
                                    defaultValue={user.displayName}
                                    variant="outlined" 
                                    size='small'
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <TextField
                                    disabled
                                    id="outlined-size-small"
                                    name='email'
                                    sx={{ width: '100%', mt: 2}}
                                    label="Email"
                                    defaultValue={user.email}
                                    variant="outlined" 
                                    size='small'
                                />
                                <br />
                                <TextField
                                    id="outlined-size-small"
                                    name='phone'
                                    sx={{ width: '100%', mt: 2}}
                                    label="Phone"
                                    variant="outlined" 
                                    size='small'
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <TextField
                                    id="outlined-size-small"
                                    name='bikeName'
                                    sx={{ width: '100%',mt: 2}}
                                    label="BikeName"
                                    defaultValue={bike.name}
                                    variant="outlined" 
                                    size='small'
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <TextField
                                    name='bikeId'
                                    id="outlined-size-small"
                                    sx={{ width: '100%', mt: 2}}
                                    label="BikeId"
                                    defaultValue={bike._id}
                                    variant="outlined" 
                                    size='small'
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <TextField
                                    id="outlined-size-small"
                                    name='address'
                                    sx={{ width: '100%', mt: 2}}
                                    label="Address"
                                    variant="outlined" 
                                    size='small'
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <button onClick={handleOrderSubmit} className='btn btn-outline-primary mt-3' type='submit'>Place Order</button>
                            </form>
                            : <Alert severity="success">
                                <Typography sx={{ color: 'green', fontWeight: 'bold'}} >
                                    Successfully Placed Your Order! 
                                </Typography>
                                <Typography sx={{ mt: 1}}>
                                    Further details will be available on your Email (<span className='text-primary'>{user.email} </span> ) And Dashboard
                                </Typography>
                            </Alert>
                            }
                        </div>
                    </div>
                </div>
            </OrderStyled>
            <Footer />
        </>
    );
};

const OrderStyled = styled.div`

`;

export default Order;