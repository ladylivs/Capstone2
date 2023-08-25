import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../context/authContext';
import axios from 'axios';

const apiBaseUrl = "http://localhost:8800";


const Hash = () => {

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();
	//console.log(currentUser);

	const handleChange = (e) => {
		setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
	}

	//console.log(inputs);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(`${apiBaseUrl}/auth/hash`, inputs);
			console.log(response);
			navigate("/login");
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className='authentication'>
			<h1>HASH</h1>
			<form>
				<input 
					required
					type="text" 
					placeholder="username"
					name="username"
					onChange={handleChange}/>
				<input 
					required
					type="password" 
					name="password" placeholder="password"
					onChange={handleChange}/>
				<button onClick={handleSubmit}>Login</button>
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

export default Hash;