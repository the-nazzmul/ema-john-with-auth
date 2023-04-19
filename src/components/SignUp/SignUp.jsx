import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmed = form.confirmed.value;
        setError('')
        if(password !== confirmed){
            setError('Your password did not match!!!')
            return
        }
        else if(password.length < 6){
            setError('Password must be at least 6 characters in length')
            return
        }

        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => setError(error.message))
        form.reset()
    }

    return (
        <div>
            <div className="form-container">
                <h2>Please Sign Up</h2>
                <form onSubmit={handleSignUp} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirmed" id="confirmed" required />
                    </div>

                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                {
                    error && <p className='error'>{error}</p>
                }
            </div>
        </div>
    );
};

export default SignUp;