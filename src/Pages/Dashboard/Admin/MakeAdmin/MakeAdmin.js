import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import styled from 'styled-components';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState('');
    const [ makeAdmin, setMakeAdmin ] = useState(false);
    const { authToken } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch(`https://calm-lowlands-39164.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount) {
                setMakeAdmin(true);
                setEmail('');
            }
        })
        e.preventDefault();
    }
    return (
        <MakeAdminStyled>
            <div className="container-fluid">
                <h2 className='fw-bold'>Make An Admin</h2>
                <form onSubmit={handleMakeAdmin}>
                    <TextField
                        sx={{ width: "60%"}}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                {makeAdmin && <Alert sx={{ mt: 4, fontWeight: 'bold'}} severity="success">This user is now Admin!</Alert>}
            </div>
        </MakeAdminStyled>
    );
};

const MakeAdminStyled = styled.div``;

export default MakeAdmin;