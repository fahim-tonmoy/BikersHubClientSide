import * as React from 'react';

import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import AddProduct from '../Admin/AddProduct/AddProduct';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardHome from '../DashboardComponents/DashboardHome/DashboardHome';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import MenuIcon from '@mui/icons-material/Menu';
import MyOrders from '../DashboardComponents/MyOrders/MyOrders';
import Payment from '../DashboardComponents/Payment/Payment';
import PostReview from '../DashboardComponents/PostReview/PostReview';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Users from '../Admin/Users/Users';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* for admin */}
      {admin &&
        <Box>
          <Link to='/home' style={{  textDecoration: 'none' }}>
            <Button color='inherit'>Home</Button>
          </Link>
          <br />
          <Link to={`${url}`} style={{  textDecoration: 'none' }}>
            <Button color='inherit'> Manage Orders</Button>
          </Link>
          <br />
          <Link to={`${url}/makeAdmin`} style={{  textDecoration: 'none' }}>
            <Button color='inherit'>Make Admin</Button>
          </Link>
          <br />
          <Link to={`${url}/addProduct`} style={{  textDecoration: 'none' }}>
            <Button color='inherit'>Add Product</Button>
          </Link>
        <br />
          <Link to={`${url}/users`} style={{  textDecoration: 'none' }}>
            <Button color='inherit'>Manage Users</Button>
          </Link>
        <br />
        </Box>
      }
      
      {/* for users */}
      {!admin &&
      <Box>
        <Link to='/home' style={{  textDecoration: 'none' }}>
        <Button color='inherit'>Home</Button>
      </Link>
      <br />
      <Link to={`${url}`} style={{  textDecoration: 'none' }}>
        <Button color='inherit'>Dashboard</Button>
      </Link>
      <br />
      <Link to={`${url}/myOrders`} style={{  textDecoration: 'none' }}>
        <Button color='inherit'>My Orders</Button>
      </Link>
      <br />
      <Link to={`${url}/payment`} style={{  textDecoration: 'none' }}>
        <Button color='inherit'>Payment</Button>
      </Link>
      <br />
      <Link to={`${url}/review`} style={{  textDecoration: 'none' }}>
        <Button color='inherit'>Review</Button>
      </Link>
      <br />
      </Box>
      }
      
      <Link to='/' style={{  textDecoration: 'none' }}>
        <Button onClick={logOut} color='inherit'>LogOut</Button>
      </Link>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {!admin ? "User" : "Admin"} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          <Switch>
            {/* user Dashboard */}
          {!admin &&
            <>
            <Route exact path={path}>
              <DashboardHome />
            </Route>
            
            <Route exact path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
            
            <Route exact path={`${path}/payment`}>
              <Payment />
            </Route>
            
            <Route exact path={`${path}/review`}>
              <PostReview />
            </Route>
          </>
          }

          {/* admin dashboard */}
          {admin &&
            <>
            <AdminRoute exact path={path}>
              <AdminDashboard />
            </AdminRoute>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>

            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>

            <AdminRoute path={`${path}/users`}>
              <Users />
            </AdminRoute>
          </>}
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default Dashboard;










// let { path, url } = useRouteMatch();
//   const drawer= (
//     <>
//         <Navbar bg="light" expand={false}>
//             <Container fluid>
//                 <Navbar.Toggle aria-controls="offcanvasNavbar" />
//                 <Navbar.Offcanvas
//                     id="offcanvasNavbar"
//                     aria-labelledby="offcanvasNavbarLabel"
//                     placement="start"
//                 >
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title id="offcanvasNavbarLabel" className='fw-bold'>Dashboard</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="justify-content-end flex-grow-1 pe-4">
//                         <Link className='fw-bold' to={`${url}`}>
//                             Dashboard
//                         </Link>
//                         <Link className='fw-bold' to={`${url}/makeAdmin`}>
//                             Make Admin
//                         </Link>
//                     </Nav>
//                 </Offcanvas.Body>
//                 </Navbar.Offcanvas>
//             </Container>
//         </Navbar>
//     </>
//   );
//     return (
//         <DashboardStyled>
//             <hr />
//                 <div>
//                     {drawer}
//                 </div>

//                 <Switch>
//                     <Route exact path={path}>
//                         <DashboardHome />
//                     </Route>
//                     <Route exact path={`${path}/makeAdmin`}>
//                         <MakeAdmin />
//                     </Route>
//                 </Switch>
//         </DashboardStyled>
//     );
// };