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
//     email: "boombayah@gmail.com",
//     name: "Bashadaka Haha"
// });

// newUser.posts.push({
//     title: "Studying CS is fun",
//     content: "Jk it's not fun at all"
// });

// newUser.save( (err, user ) => {
//     if( err ) { console.log(err)}
//     else { console.log(user) }
// })

// var newPost = new Post({
//     title: "New iphone x",
//     content: "come out soon"
// })

// newPost.save( ( err, post ) => {
//     if(err) { console.log(err)}
//     else { console.log(post)}
// })

// Retrieve an exsisting user
User.findOne({ name: "Bashadaka Haha"}, (err, user ) => {
    if(err) { console.log(err)}
    else {
        user.posts.push({
            title: "10 things I don't like about CS",
            content: "blahhhhh"
        })
        user.save( ( err, user ) => {
            if(err) { console.log(err) }
            else { console.log(user) }

        })
    }
})