import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../components/login";

import AuthContext from "../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);


    return <Route {...rest} render={(props) => {
        return authContext.user
            ? <Component {...props} />
            : <Redirect to='/login' />
    }} />
}

export default PrivateRoute;
