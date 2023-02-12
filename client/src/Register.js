import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from './utils/mutations';
import Auth from './utils/auth';

export const Register = (props) => {
    const [register_email, setEmail] = useState('');
    const [register_password, setPass] = useState('');
    const [register_name, setName] = useState('');

    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(register_email);
        // graphql call to register
        const mutationResponse = await addUser({
            variables: {
              email: register_email,
              password: register_password,
              fullname: register_name,

            },
          });
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);

    }
    return (
        <div id="register" className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Full name
                </label>
                <input value={register_name} name="register_name" onChange={(e) => setName(e.target.value)} id="register_name" placeholder="Full name" />
                <label htmlFor="register_email">
                    email
                </label>
                <input value={register_email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="register_email" name="register_email" />
                <label htmlFor="register_password">
                    password
                </label>
                <input value={register_password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="register_password" name="register_password" />
                <button type="submit">
                    Register
                </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>
        </div>
    )
}