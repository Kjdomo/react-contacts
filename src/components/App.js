import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import ContactsProvider from "../contexts/ContactsProvider";

const App = () => {

  return (
    <div>
      <LoginPage />
      <RegisterPage />
      <ContactsProvider>
        <ContactsPage />
        <ContactDetailsPage /> 
        <ContactCreatePage />
      </ContactsProvider>
    </div>
  );
}

export default App;
