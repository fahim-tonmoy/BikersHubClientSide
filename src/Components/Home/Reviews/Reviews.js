import {BsStar, BsStarFill} from "react-icons/bs";
import React, { useState } from 'react';

import Rating from 'react-rating';
import styled from 'styled-components';
import { useEffect } from "react";

const Reviews = () => {
    const [ reviews, setReviews ] = useState([]); 

    useEffect(()=>{
        fetch('https://calm-lowlands-39164.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    },[])
    
    return (
        <ReviewsStyled>
            <div className="container-fluid">
                <h2 className="fw-bold display-5">Our Clients Review</h2>
                <div className="row my-5 mx-3">
                {
                        reviews.map(singleReview => {
                            const {_id, name, description, rating, state} = singleReview;
                            return (
                                <div key={name} className="review col-sm-12 col-md-6 col-lg-4 my-3">
                                    <div className="card p-4">
                                        <Rating
                                            initialRating={rating}
                                            readonly
                                            emptySymbol={<BsStar  className="empty"/>}
                                            fullSymbol={<BsStarFill className="full"/>}
                                        />
                                        <h2 className="font-semibold text-xl text-gray-700">{name}</h2>
                                        <p className="text-md font-semibold w-4/5">{state} <br /> {description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </ReviewsStyled>
    );
};

const ReviewsStyled = styled.div`
margin: 70px 0 70px 0;
.review{
    .empty {
        color: rgba(251,191,36,1);
    }
    .full {
        color: rgba(251,191,36,1);
    }
}
`;

export default Reviews;