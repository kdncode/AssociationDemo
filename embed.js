var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Post = mongoose.model("Post", postSchema);

// // Create an user
// var newUser = new User({
//     email: "hello@gmail.com",
//     name: "Hello Hi"
// });

// newUser.save( (err, user ) => {
//     if( err ) { console.log(err)}
//     else { console.log(user) }
// })

var newPost = new Post({
    title: "New iphone x",
    content: "come out soon"
})

newPost.save( ( err, post ) => {
    if(err) { console.log(err)}
    else { console.log(post)}
})