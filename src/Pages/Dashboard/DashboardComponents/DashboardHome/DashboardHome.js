import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className='fw-bold display-4'>Welcome to Dashboard {user.displayName}!!</h1>
        </div>
    );
};

export default DashboardHome;