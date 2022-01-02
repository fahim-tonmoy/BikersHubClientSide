import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const randomProducts = products?.slice(0, 6);
    // console.log(randomProducts);
    return (
        <ProductsStyled>
            <div className="container-fluid products">
                <h2 className='fw-bold display-5'>Bikes For Displaying </h2>
                    <div className="row">
                    {
                    randomProducts.map(product => {
                        const {_id, name, price, brand, generic, image, description} = product;
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
                                            <p className='px-5'>{description.slice(0,100)}
                                            <Link to={`/bike/${_id}`} className='read-more'>  Read more</Link>
                                            </p>
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
        </ProductsStyled>
    );
};

const ProductsStyled = styled.div`
   .products{
       margin-top: 80px;
        margin-bottom: 80px;
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
            .text {
                p {
                    text-align: justify;
                    .read-more{
                        text-decoration: none;
                        font-weight: bold;
                    }
                }
            }
        }
    }
   }
`;

export default Products;