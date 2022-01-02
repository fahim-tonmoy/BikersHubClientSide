import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import About from './Pages/About/About';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Bike from './Components/Bike/Bike';
import Bikes from './Pages/Bikes/Bikes';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navigation from './Shared/Navigation/Navigation';
import Order from './Components/Order/Order';
import PageNotFound from './Pages/pageNotFound/PageNotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              
              <Route  path="/home">
                <Home></Home>
              </Route>
              
              <Route  path="/about">
                <About />
              </Route>
              
              <Route  path="/login">
                <Login />
              </Route>
              
              <Route  path="/register">
                <Register />
              </Route>

              <PrivateRoute  path="/bikes">
                <Bikes />
              </PrivateRoute>
              
              <PrivateRoute  path="/bike/:bikeId">
                <Bike />
              </PrivateRoute>
              
              <PrivateRoute  path="/order/:bikeId">
                <Order />
              </PrivateRoute>
              
              <PrivateRoute  path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              
              <Route path="*">
                <PageNotFound />
              </Route>
            
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
