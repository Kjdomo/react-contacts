
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import ContactsProvider from "../contexts/ContactsProvider";
import AuthProvider from "../contexts/AuthProvider";
import PrivateRoute from '../routes/PrivateRoute';

const App = () => {

  return (
    <div>
      <AuthProvider>
        <ContactsProvider> 
        <Router>
          <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <PrivateRoute path="/contacts/add" component={ContactCreatePage} />
              <PrivateRoute path="/contacts/:id" component={ContactDetailsPage} /> 
              <PrivateRoute path="/" component={ContactsPage} />     
          </Switch>
        </Router>
        </ContactsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
