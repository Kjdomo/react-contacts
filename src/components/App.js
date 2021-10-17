
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import ContactsProvider from "../contexts/ContactsProvider";
import AuthProvider from "../contexts/AuthProvider";
import PrivateRoute from '../routes/PrivateRoute';
import NavBar from './navbar/NavBar';
import HomePage from './homepage/HomaPage';

const App = () => {

  return (
    <div>
      <AuthProvider>
        <ContactsProvider> 
        <Router>
          <NavBar />
          <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <PrivateRoute path="/contacts/add" to="/login" component={ContactCreatePage} />
              <PrivateRoute path="/contacts/:id" to="/login" component={ContactDetailsPage} /> 
              <PrivateRoute path="/contacts"  to="/" component={ContactsPage} />  
              <Route path="/" component={HomePage} />   
          </Switch>
        </Router>
        </ContactsProvider>
      </AuthProvider>
    </div>
  );
} 

export default App;
