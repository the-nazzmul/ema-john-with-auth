import React, { useContext } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
        })
        .catch(error => console.log(error.message))

        

    }

    return (
        <div>
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>

                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema John? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;