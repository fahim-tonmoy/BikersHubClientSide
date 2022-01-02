import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth();
    const [addingSuccess, setAddingSuccess] = useState(false);

    const initialProductInfo = {
        name: '', 
        brand: '',
        generic: '',
        description: '',
        image: '',
        price: '',
    }

    const [productInfo, setProductInfo] = useState(initialProductInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...productInfo };
        newReviewInfo[field] = value;
        setProductInfo(newReviewInfo);
        e.preventDefault();
    }

    const handleProductAdd = e => {

        const review = {
            ...productInfo
        }

         fetch('https://calm-lowlands-39164.herokuapp.com/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(review)
          })
          .then(res => res.json())
          .then((data) => {
            if (data.insertedId) {
                setAddingSuccess(true);
            }
            // console.log(data);
          });
        e.preventDefault();
      };


    return (
        <div>
            <h2 className='fw-bold'>Add Product</h2>
            { !addingSuccess ?
                <form>
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='name'
                        label="Name"
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='brand'
                        label="Brand"
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='generic'
                        label="Generic"
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='description'
                        label="Description "
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='image'
                        label="Image Url "
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='price'
                        label="Price"
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <Button onClick={handleProductAdd} sx={{ mt: 2}} type='submit' variant='contained'>Add Product</Button>
                </form>
                : 
                <Alert severity="success">
                    <Typography sx={{ color: 'green', fontWeight: 'bold'}} >
                        Product Added Successfully!
                    </Typography>
                </Alert>
            }
        </div>
    );
};


export default AddProduct;