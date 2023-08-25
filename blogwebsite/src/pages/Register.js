import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//const axios = require('axios');
const apiBaseUrl = "http://localhost:8800";

//create post_date?????

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
	};

	//console.log(inputs)
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		
		//api call to our server 
		try {
			await axios.post(`${apiBaseUrl}/auth/register`, inputs);
			navigate("/login");
		} catch (error) {
			console.log(error)
		}
	};

	/**  

	useEffect(() => {
		makeAPICall()
	}, []); 

	const makeAPICall = async () => {

	}
	*/
 
	return (
		<div className='authentication'>
			<h1>Register</h1>
			<form>
				<label>username:</label>
				<input 
					required 
					type="text" 
					name="username" 
					placeholder="username" 
					onChange={handleChange}/> 
				<label>email:</label>
				<input 
					required 
					type="text" 
					name="email" 
					placeholder="email" 
					onChange={handleChange}/> 
				<label>password:</label>
				<input 
					required 
					type="password" 
					name="password"  
					placeholder="password" 
					onChange={handleChange}/>
				<button onClick={handleSubmit}>Register</button>
				<span>
					Already have an account?
					<Link to="/login">
					Login here!
					</Link>
				</span>
			</form>
		</div>
	)
};

export default Register;




/** old code
 * 		try {
			const response = await fetch(`${apiBaseUrl}/auth/register`);
			//const data = await response.json();
			console.log(response);
		} catch (error) {
			console.log(error);
		}



				/** 
			const response = await fetch(`${apiBaseUrl}/auth/register`, {
				method: "POST",
				body: JSON.stringify(inputs),
				headers: {
					"Content-Type":"application/json"
				}
			})
			*/
