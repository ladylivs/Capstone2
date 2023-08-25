import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
//import axios from 'axios';

//const apiBaseUrl = "http://localhost:8800";


const Login = () => {

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const {login} = useContext(AuthContext);

	const handleChange = (e) => {
		setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
	}

	//console.log(inputs);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await login(inputs)
			//console.log(inputs);
			navigate("/");
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className='login-container'>
			<h1>Login</h1>
			<br />
			<form className='login-form'>
				<input 
					className='login-input'
					required
					type="text" 
					placeholder="username"
					name="username"
					onChange={handleChange}/>
				<input 
					className='login-input'
					required
					type="password" 
					name="password" placeholder="password"
					onChange={handleChange}/>
				<button className='login-button' onClick={handleSubmit}>Login</button>
				<br />
				<span>
					No account?
					<Link to="/register">
					Register here!
					</Link>
				</span>
			</form>
		</div>
	)
}

export default Login;