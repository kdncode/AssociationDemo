var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

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