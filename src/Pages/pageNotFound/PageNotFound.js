import { Link } from 'react-router-dom';
import React from 'react';
import notFound from '../../assets/404error.png'
import styled from 'styled-components';

const PageNotFound = () => {
    return (
        <PageNotFoundStyled>
            <div className="">
            <img src={notFound} alt="" />
            </div>
            <Link to="/home">
                <button className="btn btn-primary my-4">Back To Home</button>
            </Link>
        </PageNotFoundStyled>
    );
};

const PageNotFoundStyled = styled.div`
margin-top: 150px;
margin-bottom: 150px;
`;

export default PageNotFound;