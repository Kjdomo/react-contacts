import { useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

import AuthContext from '../../contexts/AuthContext';

const RegisterForm = () => {
    const [success, setSuccess] = useState(false);

    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const { register, user } = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const registered = register(usernameRef.current.value, passwordRef.current.value);
        if (registered) {
            setSuccess(true);
        }
        usernameRef.current.value = "";
        passwordRef.current.value = "";
    }

    if (success) {
        return <Redirect to="/" />
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
    )
}

export default RegisterForm;