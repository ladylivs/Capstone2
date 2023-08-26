import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


//ADDING TAGS FIGURE THIS OUT
//look into suggestions? that may be too complicated 
//const suggestions = {"food"};
const apiBaseUrl = "http://localhost:8800";

const Write = () => {

	const [value, setValue] = useState('');

	const [title, setTitle] = useState('')

	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleCreateClick = async (e) => {
		e.preventDefault();
		console.log(currentUser)
		try {
			await axios.post(`${apiBaseUrl}/posts/new`, {
				title: title,
				body: value,
				username: currentUser,
			})
			navigate(`/blog/${currentUser}`)
		} catch (error) {

		}
	}

	//add state? AHEAD

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
						<textarea placeholder='write your blog post here!' id="userText" name="userText" rows="10" cols="75" onChange={(e) => setValue(e.target.value)}></textarea>
					</form>

				</div>
			</div>
			<div className='menu'>
				<div className="item">
					<div className="buttons">
					<button type="submit" onClick={handleCreateClick}>Create Post</button>

					</div>
				</div>
			</div>

		</div>
	)
}

export default Write;





/*

		<div className='write'>
			<div className='content'>
				<input
					type="text"
					placeholder='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)} />
				<div className="editContainer">
					<Editor
						apiKey="j5815szios1y40c274vjl6yde4nbm9zxeq45y35rn52wzirh"
						onInit={(evt, editor) => editorRef.current = editor}
						initialValue="This is the initial content of the editor."
						init={{
							height: 500,
							menubar: false,
							plugins: [
								'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
								'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
								'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
							],
							toolbar: 'undo redo | blocks | ' +
								'bold italic forecolor | alignleft aligncenter ' +
								'alignright alignjustify | bullist numlist outdent indent | ' +
								'removeformat | help',
							content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
						}}
					/>
				</div>
			</div>
			<div className='menu'>
				<div className="item">
					<h2>Publish</h2>
					<div className="buttons">
						<button onClick={handleCreateClick}>Create Post</button>
					</div>
				</div>
			</div>

		</div>
	)
*/
