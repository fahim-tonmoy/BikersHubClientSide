import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../../../../hooks/useAuth';

const PostReview = () => {
    const { user } = useAuth();
    const [reviewSuccess, setReviewSuccess] = useState(false);

    const initialReviewInfo = {
        name: user.displayName, 
        rating: '',
        state: '',
        description: ''
    }

    const [reviewInfo, setReviewInfo] = useState(initialReviewInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...reviewInfo };
        newReviewInfo[field] = value;
        setReviewInfo(newReviewInfo);
        e.preventDefault();
    }

    const handleReviewSubmit = e => {

        const review = {
            ...reviewInfo
        }

         fetch('https://calm-lowlands-39164.herokuapp.com/review', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(review)
          })
          .then(res => res.json())
          .then((data) => {
            if (data.insertedId) {
                setReviewSuccess(true);
            }
            // console.log(data);
          });
        e.preventDefault();
      };


    return (
        <div>
            <h2 className='fw-bold'>Please Write a Review...</h2>
            { !reviewSuccess ?
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
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='rating'
                        label="Ratings"
                        defaultValue={5}
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='state'
                        label="In Short Words"
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '100%', mt: 2}}
                        name='description'
                        label="Describe "
                        variant="outlined" 
                        size='small'
                        onBlur={handleOnBlur}
                    />
                    <Button onClick={handleReviewSubmit} sx={{ mt: 2}} type='submit' variant='contained'>Submit</Button>
                </form>
                : 
                <Alert severity="success">
                    <Typography sx={{ color: 'green', fontWeight: 'bold'}} >
                        Thank You for Giving the FeedBack!!
                    </Typography>
                </Alert>
            }
        </div>
    );
};

export default PostReview;