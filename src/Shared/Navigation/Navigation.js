import { Container, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import styled from 'styled-components';
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
    return (
        <NavigationStyled className='container-fluid'>
           <Navbar
                className="navigation"
                collapseOnSelect
                expand="lg"
                bg=""
                variant="light"
            >
                <Container className="nav-container">
                    <Navbar.Brand className="brand" >
                        <Link to="/home" className="text-decoration-none brand-logo">BikersHub</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end navigation">
                        <Link className="nav-link fw-bolder" to="/home">
                        Home
                        </Link>
                        <Link className="nav-link fw-bolder" to="/bikes">
                        Bikes
                        </Link>
                        <Link className="nav-link fw-bolder" to="/about">
                        About
                        </Link>
                        <Link className="nav-link fw-bolder" to="/contact">
                        Contact
                        </Link>
                        {!user?.email ? (
                        <Link className="nav-link fw-bold" to="/login">
                            Login
                        </Link>
                         ) : ( <NavDropdown  className="login-name" title={user.displayName} id="basic-nav-dropdown">
                              
                              <NavDropdown.Item>
                                <Link className="fw-bold" to="/dashboard">
                                  Dashboard
                                </Link>
                              </NavDropdown.Item>
                              
                              <NavDropdown.Divider />
                              
                              <NavDropdown.Item>
                                <Link className="fw-bold text-danger" onClick={logOut} to="/">
                                  LogOut
                                </Link>
                              </NavDropdown.Item>
                              
                            </NavDropdown>
                        )} 
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        </NavigationStyled>
    );
};
const NavigationStyled = styled.div`
.nav-container {
      /* border: 1px solid gray; */
      border-radius: 10px;
      background-color: white;
      /* margin-top: -20px; */
      z-index: 10;
      /* box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5),
        0 6px 20px 0 rgba(0, 0, 0, 0.19); */
      .brand-logo {
        font-weight: 900;
        font-size: 30px;
        color: black;
      }
      .nav-link {
        margin-left: 20px;
        color: black;
      }
      .nav-link:hover, .brand-logo:hover {
        color: #ff2c2c;
      }
      .login-name {
        font-size: 15px;
        font-weight: 600;
        a {
          text-decoration: none;
          color: black;
          text-align: center;
        }
      }
    }

`;

export default Navigation;

{/* <Link to="/profile" className="fw-bold text-success">
                            {user.displayName}
                            </Link>
                            
                            
                            */}