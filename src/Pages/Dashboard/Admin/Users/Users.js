import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

import useAuth from '../../../../hooks/useAuth';

const Users = () => {
    const { user } = useAuth();
    const [ users, setUsers ] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const columns = [
        { 
            id: 'displayName', 
            label: 'Name',
            minWidth: 170, 
            align: 'left' 
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'left',
        },
        {
            id: '_id',
            label: 'User Id',
            minWidth: 170,
            align: 'left',
        }
      ];

    useEffect(()=> {
        fetch(`https://calm-lowlands-39164.herokuapp.com/users`)
            .then( res => res.json())
            .then( data => setUsers(data))
    },[user.email])

    return (
        <div>
            <div className='container-fluid'> 
            <h2 className='my-4'>Pending </h2>
            <br />
                <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    </Paper>
            </div> 
        </div>
    );
};

export default Users;