import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';
import useProducts from '../../hooks/useProducts';

const Bikes = () => {
    const [products] = useProducts();
    return (
        <>
            <Navigation />
            <BikesStyled>
            <div className="container-fluid my-5">
                    <h2 className='fw-bold display-5'>Our Collection </h2>
                    <hr className='mx-auto' />
                        <div className="row">
                        {
                        products.map(product => {
                            const {_id, name, price, brand, generic, image} = product;
                                return (
                                    <div key={_id} className="col-sm-12 col-md-6 col-lg-4 product">
                                        <div className="card m-xl-2 my-3">
                                            <div className="brand-box">
                                                <h5 className='brand text-center p-1'>{brand}</h5>
                                            </div>
                                            <img src={image} className='img-fluid my-2' style={{ width: "100%", height: "400px"}} alt="" />
                                            <div className="text  my-3">
                                                <h5 className='fw-bold'>{name}</h5>
                                                <h5 className='fw-bolder'>{generic}</h5>
                                                <h6 className='fw-bold'>${price}</h6>
                                            </div>
                                            <Link to={`/bike/${_id}`}>
                                                <button className='btn mx-auto my-3'>Purchase</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                </div>
            </BikesStyled>
            <Footer />
        </>
    );
};

const BikesStyled = styled.div`
hr {
    width: 100px;
    height: 5px;
    border: 1px solid gray;
    border-radius: 20px;
}
.product{
    padding-left: 20px;
    padding-right: 20px!important;
    .card {
        position: relative;
        box-shadow: -4px 4px 5px 1px rgba(202, 198, 198, 0.7);
        width: 100%;
        /* height: 60vh; */
        overflow: hidden;
        .brand-box {
            .brand {
                position: absolute;
                top: 3%;
                right: 3%;
                width: 100px;
                height: 30px;
                background-color: rgba(59,130,246,1);
                color: white;
                z-index: 2;
            }
        }
        img:hover{
            transform: scale(0.9);
            z-index: 1;
        }
        button {
            background-color: rgba(75,85,99,1);
            color: white;
            overflow: hidden;
        }
    }
}
`;

export default Bikes;