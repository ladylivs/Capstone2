const express = require('express');
//const app = express();
const db = require("../db/index.js");
const router = express.Router();
const jwt = require("jsonwebtoken");

//get all posts 

router.get("/", async (req, res) => {
	const posts = await db.any("SELECT * FROM blog_posts ORDER BY post_date DESC;");
	res.json(posts);
});

// figure out for tags after write/edit pages 


//get single post on its own page
//seperate call for comments and tags?
router.get("/:id", async(req, res) => {
	const post = await db.one("SELECT * FROM blog_posts WHERE post_id = $1;", [req.params.id]);
	res.json(post);
})

//router.post("/", addPost)
// add tags and permissions later
router.post("/new", async (req, res) => {
	// password hash and create user
	const postDate = new Date();
	console.log(postDate);
	await db.query("INSERT INTO blog_posts(title, body, username, post_date) VALUES ($1, $2, $3, $4);", [req.body.title, req.body.body, req.body.username, postDate])
		//.then(console.log("check database"))
		.then(res.send("Post created!"));
});


//May need better authorization BUT IT WORKS so I don't care
// DELETE ROUTE
router.delete("/:id", (req, res) =>{ 
		console.log(req.params.id, req.body.username);
		db.query("DELETE FROM blog_posts WHERE post_id = $1;", [req.params.id])
		.then(res.json("post deleted!"));
	})


	//howwwww
//UPDATE ROUTE
router.put("/:id", (req, res) =>{ 
	//console.log(req.body.title, req.body.body, req.params.id);
	const postDate = new Date();
	// extra verification???? if you can make cookies work, yes
	//console.log("does it start to work before the request?");
	db.query("UPDATE blog_posts SET title=$1, body=$2, edit_date=$3 WHERE post_id = $4;", [req.body.title, req.body.body, postDate, req.body.id])
		.then(console.log("check database for update"))

})


module.exports = router;