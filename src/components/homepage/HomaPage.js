import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../../contexts/AuthContext";

const HomePage = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    if (user) {
        return <Redirect to="/contacts" />
    }

    return (
        <div>Welcome to React Contacts</div>
    );
};

export default HomePage;