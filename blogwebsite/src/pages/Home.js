import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const apiBaseUrl = "http://localhost:8800";

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async() =>{
			try {
				const response = await axios.get(`${apiBaseUrl}/posts`);
				setPosts(response.data);
			} catch (error) {
				console.log(error)
			}
		};
		fetchData();
	}, []);


	return (
		 <div className="home">
			<div className="posts" >
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
								{new Date(post.post_date).toLocaleDateString("lookup")}
							</h3>
							<div className="postbody">
							{post.body}
							</div>
						</div>
					</div>

				))}
			</div> 
		 </div>
	)
} 

export default Home;


/* 
const posts = [
	{
		post_id: 1,
		title: "Fake title 1",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom1",
		post_date: "August 15, 2023"
	},
	{
		post_id: 2,
		title: "Fake title 2",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom2",
		post_date: "August 14, 2023"
	},
	{
		post_id: 3,
		title: "Fake title 3",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom3",
		post_date: "August 13, 2023"
	},
	{
		post_id: 4,
		title: "Fake title 4",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom4",
		post_date: "August 12, 2023"
	},
	{
		post_id: 5,
		title: "Fake title 5",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom5",
		post_date: "August 11, 2023"
	},
	{
		post_id: 6,
		title: "Fake title 6",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom6",
		post_date: "August 10, 2023"
	},
	{
		post_id: 7,
		title: "Fake title 7",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
		username: "fauxnom7",
		post_date: "August 9, 2023"
	}
]
*/