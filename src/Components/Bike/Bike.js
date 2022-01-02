import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import styled from 'styled-components';

const Bike = () => {
    const { bikeId } = useParams();
    const [ bike, setBike ] = useState({});

    useEffect(()=>{
        fetch(`https://calm-lowlands-39164.herokuapp.com/products/${bikeId}`)
            .then( res => res.json())
            .then( data => setBike(data))
    },[bikeId])
    
    return (
        <>
            <Navigation />
            <BikeStyled>
                <div key={bike._id} className="container-fluid my-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={bike.image} className='img-fluid' alt={bike.name} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text">
                            <h5 className='fw-bold my-3'>Product Name: {bike.name}</h5>
                            <h5 className='fw-bold my-3'>Brand : {bike.brand}</h5>
                            <h5 className='fw-bolder my-3'>Category: {bike.generic}</h5>
                            <h6 className='fw-bold my-3'>Price: ${bike.price}</h6>
                            <p className='my-3'> <span className='fw-bold'>Description: </span> <br /> {bike.description}</p>
                            <Link to={`/order/${bike._id}`}>
                                <button className='btn btn-success w-25 my-4'>Place Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </BikeStyled>
            <Footer />
        </>
    );
};

const BikeStyled = styled.div`
margin-top: 70px;
margin-bottom: 65px;
.row {
    img {
        width: 100%;
    }
    .text{
        text-align: justify;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }
}
`;

export default Bike;