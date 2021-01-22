const express = require("express")
const fetch = require("node-fetch")
const {getComments} = require("./core/comments")
const {getPosts} = require("./core/posts")
const port = 8080
const app = new express()



app.get("/", async (req,res) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => json).catch((err) => console.log(err))
    res.send(getPosts(posts))
})


app.get("/:id", async (req,res) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/post/${req.params.id}/comments`).then((response) => response.json()).then((json) => json).catch((err) => console.log(err))
    res.send(getComments(comments))
})

app.listen(port, () => console.log(`app listening on port ${port}`))