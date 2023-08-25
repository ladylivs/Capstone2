import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const apiBaseUrl = "http://localhost:8800";

const UsersBlog = () => {
	const [posts, setPosts] = useState([]);

	const location = useLocation();
	const userId = location.pathname.split("/")[2];

	useEffect(() => {
		const fetchData = async() =>{
			try {
				const response = await axios.get(`${apiBaseUrl}/users/${userId}`);

				setPosts(response.data);
			} catch (error) {
				console.log(error)
			}
		};
		fetchData();
	}, [userId]);



	return (
		 <div className="usersblog">
			<div className="posts" >
				<h1>{posts.username}</h1>
				{posts.map(post => (
					<div className="post" key={post.post_id}>
						<div className="content">
							<Link to={`/post/${post.post_id}`}>
							<h1>{post.title}</h1>
							</Link>
							<h2>by: 
								<Link to={`/blog/${post.username}`}>
								{post.username}
								</Link>
							</h2>
							<h3>posted:
								{post.post_date}
							</h3>
							<p>{post.body}</p>
						</div>
					</div>

				))}
			</div> 
		 </div>
	)
} 
export default UsersBlog;