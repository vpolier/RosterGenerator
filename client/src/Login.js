import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from './utils/mutations';
import Auth from './utils/auth';

export const Login = (props) => {
    const [login_email, setEmail] = useState('');
    const [login_password, setPass] = useState('');
    const [login_name, setName] = useState ('');

   const [addUser] = useMutation(LOGIN);

   const handleSubmit = async (e) => {
	   e.preventDefault();
	   console.log(login_email);
	   // graphql call to Login
	   const mutationResponse = await addUser({
		   variables: {
			 email: login_email,
			 password: login_password
			},
		 });
		 const token = mutationResponse.data.addUser.token;
		 Auth.login(token);

   }
    return (
			<div id="login" className="auth-form-container">
				<h2>Login</h2>
				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="login_email">
						email
					</label>
					<input value={login_email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="login_email" name="login_email" />
					<label htmlFor="login_password">
						password
					</label>
					<input value={login_password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="login_password" name="login_password" />
					<button type="submit" onClick={() => props.onFormSwitch('roster')}>
						Login
					</button>
				</form>
				<button className="link-btn" onClick={() => props.onFormSwitch('register')}>
					Don't have an account? login here.
				</button>
			</div>
    )
}