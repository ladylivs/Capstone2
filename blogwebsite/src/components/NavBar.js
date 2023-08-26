import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import llogo from '../imgs/llogo.png'
//import 'App.css' from '../';

//TODO: find a write logo, make a logo logo


// search bar in nav bar

const NavBar = () => {
	const {currentUser, logout} = useContext(AuthContext)

	const blogLink = `/blog/${currentUser}`;
	return (
		<div className="navbar">
			<div className="container">
				<Link to="/">
				<div className="logo">
				<img  src={llogo}/>
				</div>
				</Link>
				<div className="links">
					<Link className="link" to="/">
						<h6>Home</h6>
					</Link>
					<Link className="link" to={blogLink}>
						<h6>Your Blog</h6>
					</Link>
					<Link className="link" to="/tagsearch">
						<h6>Tags</h6>
					</Link>
					<Link className="link">
					<span className='username'>{currentUser.username}</span>
					</Link>
					
					{currentUser ? <button onClick={logout} className="logoutbutton">logout</button> : <Link className="link" to="/login">Login</Link>}
					<span>
						<Link to="/write" className="write">write post</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default NavBar;