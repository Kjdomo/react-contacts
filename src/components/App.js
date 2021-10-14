import { useContext } from "react";

import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import ContactsProvider from "../contexts/ContactsProvider";
import AuthContext from "../contexts/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? 
        <ContactsProvider>
          <ContactsPage />
          <ContactDetailsPage /> 
          <ContactCreatePage />
        </ContactsProvider>
        :
        <>
          <LoginPage />
          <RegisterPage />
        </> 
    }
    </div>
  );
}

export default App;
