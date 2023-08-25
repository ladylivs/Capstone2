import React, { useState } from 'react';


//searching just for tags for now
//stretch/creep: add username

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("");

	const tagPosts = [
		{
			post_id: 1,
			title: "Fake title 1",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom1",
			post_date: "August 15, 2023",
			tag: "food"
		},
		{
			post_id: 2,
			title: "Fake title 2",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom2",
			post_date: "August 14, 2023",
			tag: "food"
		},
		{
			post_id: 3,
			title: "Fake title 3",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom3",
			post_date: "August 13, 2023",
			tag: "food"
		},
		{
			post_id: 4,
			title: "Fake title 4",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom4",
			post_date: "August 12, 2023",
			tag: "travel"
		},
		{
			post_id: 5,
			title: "Fake title 5",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom5",
			post_date: "August 11, 2023",
			tag: "travel"
		},
		{
			post_id: 6,
			title: "Fake title 6",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom6",
			post_date: "August 10, 2023",
			tag: "travel"
		},
		{
			post_id: 7,
			title: "Fake title 7",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo est. Aliquam accumsan augue vel arcu suscipit, non pharetra odio pellentesque. Aliquam efficitur felis nunc, sed fringilla mi feugiat sit amet. Proin justo sapien, elementum vel urna vel, pharetra congue est. In molestie magna eget mauris dignissim dignissim. Quisque sodales tortor nec laoreet cursus. Etiam eget eros venenatis, lacinia enim et, varius elit. Vivamus nulla erat, pulvinar non dignissim in, luctus ac enim. Sed vitae congue erat, ut cursus magna. Sed aliquam augue nunc, eu consectetur nisl ullamcorper non. Nam libero orci, dapibus finibus semper quis, interdum interdum nunc. ",
			username: "fauxnom7",
			post_date: "August 9, 2023",
			tag: "fashion"
		}
	]

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
		console.log(searchInput)
	};

	let filteredTagPosts = [];


	// this is actually going to product blog posts, so it's going to a require a join 

	return (
		<div className="search">
			<div className="searchbar">
				<input
					type="text"
					placeholder="Search tags here"
					value={searchInput} />
				<button onSubmit={handleChange}>Search posts</button>
			</div>
			<div className="searchresults">

				<table>
					<tr>
						<th>Title</th>
						<th>By</th>
						<th>Blog</th>
						<th>test</th>
					</tr>
		{tagPosts.filter((data) => data.tag.match(searchInput)).map((data) => {
						<div>
							<tr>
								<td>{data.title}</td>
								<td>{data.username}</td>
								<td>{data.body}</td>
								<td>test</td>
							</tr>
						</div>
					})}
				</table>

			</div>
		</div>

	)
}

export default SearchBar;