import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

//TODO: fix navigation after updating a post -- it updates the post, but it doesn't navigate to a different page. 


//ADDING TAGS FIGURE THIS OUT
//look into suggestions? that may be too complicated 
//const suggestions = {"food"};
const apiBaseUrl = "http://localhost:8800";

const EditPost = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.body || '');
	const [title, setTitle] = useState(state?.title || '');

	const { currentUser } = useContext(AuthContext);

	const stateInputs = {
		title: title,
		body: value,
		id: state.post_id
	};

	const navigate = useNavigate();
	//work on this!!!! creating a write 
	const handleUpdateClick = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`${apiBaseUrl}/posts/${state.post_id}`, stateInputs);
			navigate(`/`);
		} catch (err) {
			
		}
	};

	return (
		<div className='write'>
			<div className='content'>
				<input
					type="text"
					placeholder='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)} />
				<div className="editContainer">

				<form className="writingarea">
						<textarea placeholder='write your blog post here!' id="userText" value={value} name="userText" rows="10" cols="75" onChange={(e) => setValue(e.target.value)}></textarea>
					</form>
				</div>
			</div>
			<div className='menu'>
				<div className="item">
					<h2>Publish</h2>
					<span>
						<b>Status: </b> Draft
					</span>
					<span>
						<b>Visibility: </b> Public
					</span>
					<div className="buttons">
						<button onClick={handleUpdateClick}>Update</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default EditPost; 