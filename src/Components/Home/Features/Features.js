import React from 'react';
import abs from '../../../assets/features/abs.jpg'
import areoDynamic from '../../../assets/features/Aero1.gif'
import bike from '../../../assets/bike-ed.png'
import chesis from '../../../assets/features/chesis.jpg'
import liquidCooling from '../../../assets/features/Liquid+Cooling+System.jpg'
import styled from 'styled-components';
import tyres from '../../../assets/features/tyres.jpg'

const Features = () => {
    return (
        <FeaturesStyled>
            <div className="container-fluid my-5">
            <h2 className=' fw-bold display-5 my-5'>Quality is Our Priority</h2>
            <div className="row my-5">
                {/* left */}
                <div className="col-sm-12 col-md-7 col-xl-7">
                    <div className="col-12 feature-details">
                        <div className="row">
                            <div className="col-4 left">
                                <img src={abs} alt="" className="img-fluid" />
                            </div>
                            <div className="col-8 right">
                                <p className='h5'>Disk Brakes with Dual Channel ABS</p>
                                <p>The latest fuel injection bikes come with better-ventilated pads and brakes. The improved ventilation works superfluously.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 feature-details">
                        <div className="row">
                            <div className="col-4 left">
                                <img src={liquidCooling} alt="" className="img-fluid" />
                            </div>
                            <div className="col-8 right">
                                <p className="h5">Engines With Liquid Cooling</p>
                                <p>Engine usually heats up while driving.Now high performing engines have liquid cooling as one of the modern features of bikes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 feature-details">
                        <div className="row">
                            <div className="col-4 left">
                                <img src={chesis} alt="" className="img-fluid" />
                            </div>
                            <div className="col-8 right">
                                <p className="h5">Improved Chassis and Suspension</p>
                                <p>The chassis and suspension combination plays a significant role in giving a bike its steering ability. The twin springs are changed into dual amplifiers for better accommodation of shocks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 feature-details">
                        <div className="row">
                            <div className="col-4 left">
                                <img src={areoDynamic} alt="" className="img-fluid" />
                            </div>
                            <div className="col-8 right">
                                <p className="h5">Aerodynamic Bodywork</p>
                                <p>The fuel injection bikes also include an aerodynamic shape made out of lightweight materials. The aerodynamic shape is specially chosen to reduce the excessive air resistance of the surroundings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 feature-details">
                        <div className="row">
                            <div className="col-4 left">
                                <img src={tyres} alt="" className="img-fluid" />
                            </div>
                            <div className="col-8 right">
                                <p className="h5">Performance Tyres</p>
                                <p>Tires are perhaps the most important mechanical part of motorcycles second to engines only. The power of the engine falls useless until and unless it is channelled into super supportive and firm tires.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="col-sm-12 col-md-5 col-xl-5 bike-image">
                    <img src={bike} className='img-fluid ' alt="" />
                </div>
            </div>
            </div>
        </FeaturesStyled>
    );
};

const FeaturesStyled = styled.div`
margin-top: 80px;
margin-bottom: 80px;
.feature-details{
    img {
        width: 130px;
        height: 70px;
    }
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right {
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }
}
.bike-image{
    display: flex;
    align-items: center;
    img{
        width: 100%;
        height: 500px;
    }
}
`;

export default Features;