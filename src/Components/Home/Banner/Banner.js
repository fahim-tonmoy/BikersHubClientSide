import React from 'react';
import banner from '../../../assets/banner.jpg'
import styled from 'styled-components';

const Banner = () => {
    return (
        <BannerStyled>
            <div className="container banner">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src={banner} alt="" className="img-fluid " />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className='fw-bold'>FIND YOUR MOTORRAD BIKE
                            <br />
                            live your Dream
                        </h1>
                    </div>
                </div>
            </div>
        </BannerStyled>
    );
};

const BannerStyled = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
.banner{
    margin-top: 80px;
    margin-bottom: 80px;
    h1{
        color: red;
    }
}

`;

export default Banner;