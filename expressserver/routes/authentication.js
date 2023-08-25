const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db/index.js");
const bcrypt = require('bcrypt');
const saltRounds = 13;
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

//register TODO STRETCH: send server error
router.post("/hash", async(req, res) => {
	// password hash and create user
	console.log(req.body.username);
	const password_hash = await bcrypt.hash(req.body.password, saltRounds);
	console.log(password_hash);
});



router.post("/register", async (req, res) => {
	// password hash and create user
	const password_hash = await bcrypt.hash(req.body.password, saltRounds);

	await db.query("INSERT INTO users(username, email, password_hash) VALUES ($1, $2, $3);", [req.body.username, req.body.email, password_hash])
		//.then(console.log("check database"))
		.then(res.send("Account created!"));
});
	
//login 
router.post("/login", async (req, res) => {
	//pull password hash and compare with input
	const user = await db.oneOrNone(`
		SELECT *
		FROM users
		WHERE username = $1
	`, [req.body.username]);

	//console.log(user);
	const auth = await bcrypt.compare(req.body.password, user.password_hash);
	//console.log(auth);
	if (!auth) {
		res.status(400).json("Wrong username or password");
	} else {
		req.session.user = user.username;
		res.json(user)
		//using either different cookies or something other than cookies
	}

})

//logout
router.post("/logout", (req, res) => {
	//req.session.destroy();
    res.redirect("/login");
})


module.exports = router;






/** 
 * 
 * old code
 * 
const session = require("express-session");
const store = new session.MemoryStore();


//keeps logged in?

app.use(session({
    secret: "secret27!&#$%",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000
    },
    store
})); 
const cors = require('cors');

const corsOptions = {
    AccessControlAllowOrigin: '*',
    origin: 'https://abc.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }
app.use(cors(corsOptions))


	//const existingUser = await db.any('SELECT * FROM users WHERE email = $1 OR username = $2;', [req.body.email, req.body.username],
	/** 
	
	(error, data)=> {
		if(error) return res.json(error);
		if(data.length) return res.status(409).json("User already exists!");
	});

		
	, (error, data) => {
					if(error) return res.json(error);
					return res.status(200).json("Account created! Login to start blogging!")
				})
	}
})




	const user = await db.oneOrNone(`
		SELECT username
		FROM users
		WHERE username = $1
		AND password_hash = $2;
	`, [username, password_hash]);

	if(user) {
		console.log(user)
	}


    */