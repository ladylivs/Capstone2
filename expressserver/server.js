const express = require('express');
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const cors = require('cors');
app.use(cors({ origin:true, credentials:true }));

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "secret27",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000
    },
    store
}));

//TO DO LATER: test if app still works if you remove this -- is it in the right spot? 
app.use((req, res, next)=>{
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "vary");
	//res.header("Access-Control-Allow-Origin", "*");
	next();
})

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

const authRouter = require("./routes/authentication");
app.use("/auth", authRouter);

const commentsRouter = require("./routes/comments");
app.use("/comments", commentsRouter);

const tagsRouter = require("./routes/tags");
app.use("/tags", tagsRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);


app.listen(8800, () => {
	console.log("Connected server to 8800!")
});