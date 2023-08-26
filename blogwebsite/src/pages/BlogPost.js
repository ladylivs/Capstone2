import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { Editor } from 'tinymce';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


const apiBaseUrl = "http://localhost:8800";

const BlogPost = () => {
	const [value, setValue] = useState('');
	const [post, setPost] = useState({});

	const navigate = useNavigate();

	const location = useLocation();
	const postId = location.pathname.split("/")[2];

	const { currentUser } = useContext(AuthContext);

	const editorRef = useRef(null);
	const log = () => {
	  if (editorRef.current) {
		console.log(editorRef.current.getContent());
	  }
	};
	//console.log(currentUser);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${apiBaseUrl}/posts/${postId}`);
				setPost(response.data);
				console.log(response.data)
			} catch (error) {
				console.log(error)
			}
		};
		fetchData();
	}, [postId]);


	const handleDelete = async () => {
		if (currentUser !== post.username) {
			console.log("not auhtorized")
		}
		try {
			await axios.delete(`${apiBaseUrl}/posts/${postId}`);
			navigate("/");
			//console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	// add return for comments as well
	const comment = {
		post_id: 1,
		comment_id: 100,
		username: "fakecommenter",
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus orci eget dictum condimentum. Vestibulum. "
	}
	// <ReactQuill theme="snow" value={value} onChange={setValue} />

	return (
		<div className="post" key={post.post_id}>
			<div className="content">
				<Link to={`/post/${post.post_id}`}>
					<h1>{post.title}</h1>
				</Link>
				<h3>by: <Link to={`/blog/${post.username}`}> {post.username}</Link> posted:	{new Date(post.post_date).toLocaleDateString("lookup")}
				</h3>
				<div className="postbody">
					{post.body}
				</div>
				{currentUser === post.username && (
					<div className="edit">
						<Link to={`/editpost?edit=${post.post_id}`} state={post}>
							<button >Edit</button>
						</Link>

						<button onClick={handleDelete}>Delete</button>
					</div>
				)}
				<div className="tagscontainer">
					<h4>tags: </h4>
					{post.tag}
				</div>
			</div>
			<div className="commentsContainer">
				<div className='comments'>
					<label>Add comment here:</label>
					<div className="editContainer">

					</div>
				</div>
				<div className="username">
					<b>{comment.username}:</b>
				</div>
				<div className="comment">
					{comment.comment}
				</div>
			</div>
		</div>
	)
}

export default BlogPost;