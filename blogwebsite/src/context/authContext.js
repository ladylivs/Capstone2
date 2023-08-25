import { createContext, useEffect, useState } from "react";
import axios from "axios";



const apiBaseUrl = "http://localhost:8800";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

	
	//TODO:
	// add an authentication timer?
	// be able to change user info?

	const login = async (inputs) => {
		const response = await axios.post(`${apiBaseUrl}/auth/login`, inputs, 
		{
			withCredentials: true,
			headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
		}});
		console.log(response.data.username);
		setCurrentUser(response.data.username);
	};

	
	const logout = async () => {
		window.location.replace('http://localhost:3000/login');
		localStorage.clear();
		setCurrentUser(null);
	};

	useEffect(()=>{
		localStorage.setItem("user", JSON.stringify(currentUser))
	})

	return (
	<AuthContext.Provider value={{currentUser, login, logout}} >
		{children}
	</AuthContext.Provider>
	);
}






/**
 * old code
 * 
 * inputs, 
		{
			withCredentials: true,
			headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
		}});
 */