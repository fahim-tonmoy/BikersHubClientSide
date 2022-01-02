import React, { useEffect, useState } from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import useAuth from '../../../../hooks/useAuth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const UsersOrders = () => {
    const { user } = useAuth();
    const [ orders, setOrders ] = useState([]);
    
    useEffect(()=>{
        const url = `https://calm-lowlands-39164.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then( res => res.json() )
            .then( data => setOrders(data))
    },[user.email])

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you Sure you want to delete?");
        if( proceed ) {
            const URL = `https://calm-lowlands-39164.herokuapp.com/order/${id}`
            fetch(URL, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully!');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }
            })
            }
        }

    return (
        <div className='container-fluid'> 
            <h2 className='my-4'>You Have {orders.length} {orders.length > 1 ? "Order's" : "Order"}</h2>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Order Id</StyledTableCell>
                        <StyledTableCell align="left">email</StyledTableCell>
                        <StyledTableCell align="left">Phone</StyledTableCell>
                        <StyledTableCell align="left">Bike Name</StyledTableCell>
                        <StyledTableCell align="left">Bike Id</StyledTableCell>
                        <StyledTableCell align="left">Address</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row._id}</StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">{row.phone}</StyledTableCell>
                        <StyledTableCell align="left">{row.bikeName}</StyledTableCell>
                        <StyledTableCell align="left">{row.bikeId}</StyledTableCell>
                        <StyledTableCell align="left">{row.address}</StyledTableCell>
                        <StyledTableCell align="left">
                            <Button 
                                variant='contained' 
                                color="error"
                                onClick={ () => handleDeleteOrder (row._id)}
                            >Cancel</Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div> 
    );
};



export default UsersOrders;