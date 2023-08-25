--verify your cascades
--can you code yourself a little thing to hash a bunch of passwords at once


--CREATE A BLOG POST

-- javascript should automatically add post date
-- server should add post_id automatically 
INSERT INTO blog_posts (title, username, body, permissions, post_date)
VALUES ()


-- after this, if not already created, THEN add tags 
-- javescript create post_date
INSERT INTO tags (tag, first_use)
VALUES ()

-- after this, THEN 
INSERT INTO tags_blog (post_id, tag)
VALUES ()



-- edit a blog post
--javascript create edit_date
-- verify user matches username so only they can edit their posts
UPDATE blog_posts 
SET title='$1', edit_date='$2', body='$3', permissions='$4'
WHERE post_id = '$5'


-- delete a blog post
DELETE FROM blog_posts 
WHERE post_id = '$1';


-- read blog posts ALL sort by date posted
SELECT * 
FROM blog_posts 
ORDER BY post_date ASC;


-- read blog posts by USER
SELECT * 
FROM blog_posts
WHERE username = '$1'


-- create a user 
INSERT INTO users(username, email, password_hash) 
VALUES ($1, $2, $3);

-- edit a user
-- password hass the new password on this page 
UPDATE users
SET username= $1, email=$2, password_hash=$3
WHERE username=$4


-- delete user
-- are you sure you want to delete?
DELETE FROM blog_posts
WHERE username=$1 AND email=$2;



--I think comments are a stretch, but it would be nice
-- create a comment
INSERT INTO comments

-- edit a comment

-- delete a comment




--STRETCH COMMENTS 