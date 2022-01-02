import AllOrders from '../AllOrders/AllOrders';
import React from 'react';
import styled from 'styled-components';

const AdminDashboard = () => {
    return (
        <AdminDashboardStyled>
            <AllOrders />
        </AdminDashboardStyled>
    );
};

const AdminDashboardStyled = styled.div``;

export default AdminDashboard;