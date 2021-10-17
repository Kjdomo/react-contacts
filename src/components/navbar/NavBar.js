import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';


const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
        {user ?
            <div style={{"display": "flex", "flex-direction": "row", justifyContent: "flex-end"}}>
                <div>{user}</div>
                <div onClick={() => logout()}>Logout</div>
            </div>
        : 
            <div style={{"display": "flex", "flex-direction": "row", justifyContent: "flex-end"}}>
                <Link to="/login"><div>Login</div></Link>
                <Link to="/register"><div>Register</div></Link>
            </div>
        }
        </>
    );
};

export default NavBar;