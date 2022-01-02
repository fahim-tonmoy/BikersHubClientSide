import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import register from '../../../assets/login2.jpg'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const {user, registerUser, isLoading, authError} = useAuth();

    const navigate = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegistrationSubmit = e => {
        registerUser(loginData.name, loginData.email, loginData.password, navigate)
        e.preventDefault();
    }
    return (
        <div>
            <Container sx={{ my: 6 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: '15%'}} xs={12} md={6}>
                    <Typography variant='h5'>
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleRegistrationSubmit}>
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Your Name'
                            type='text'
                            name='name'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Your Email'
                            type='email'
                            name='email'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Password'
                            type='password'
                            name='password'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Confirm Password'
                            type='password'
                            name='password2'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <Button variant='contained' sx={{ width: '75%', m: 1}} type='submit'>Register</Button>
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant='text' sx={{ m: 1}}  type='submit'>Already Registered? Please Login.</Button>
                        </NavLink>
                    </form>}
                    {/* Loading  */}
                    {isLoading && <CircularProgress />}

                    {/* Success Message */}
                    {user?.email && <Alert severity="success">User created Successfully!</Alert>}

                    {/* Error Message */}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item sx={{ mt:10}} xs={12} md={6}>
                    <img className='img-fluid w-100' src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default Register;