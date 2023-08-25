import React, {useState, useContext} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


//ADDING TAGS FIGURE THIS OUT
//look into suggestions? that may be too complicated 
//const suggestions = {"food"};
const apiBaseUrl = "http://localhost:8800";

const Write = () => {
	const [value, setValue] = useState('');
	const [tags, setTags] = useState([]);
	const [title, setTitle] = useState('')

	const {currentUser} = useContext(AuthContext);
	const navigate = useNavigate();

  const handleCreateClick = async(e) => {
	e.preventDefault();
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
					onChange={(e) => setTitle(e.target.value)}/>
				<div className="editContainer">
					<ReactQuill 
						className='editor'
						theme="snow" 
						value={value} 
						onChange={setValue} />
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
							 <button onClick={handleCreateClick}>Create Post</button>
							
						</div>
				</div>




			</div>

		</div>
	)
} 

export default Write; 



/*
tag code: const [tags, setTags] = useState([]);

const handleDelete = i => {
	setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
	setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
	const newTags = tags.slice();

	newTags.splice(currPos, 1);
	newTags.splice(newPos, 0, tag);

	// re-render
	setTags(newTags);
  };

  const handleTagClick = index => {
	console.log('The tag at index ' + index + ' was clicked');
  };







  				<div className="item">
				<div className="tagging">
      <h1> Tags: </h1>
      <div>
        <ReactTags
          tags={tags}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>

				</div>

  */
