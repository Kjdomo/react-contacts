import { useRef, useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';

const LoginForm = () => {
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const { login } = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        login(usernameRef.current.valueOf, passwordRef.current.value);
        usernameRef.current.value = "";
        passwordRef.current.value = "";

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    name="username"
                    type="text" 
                    placeholder="Username"  
                    ref={usernameRef}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Password"
                    ref={passwordRef}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;