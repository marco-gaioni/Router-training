const express = require("express")
const fetch = require("node-fetch")
const {getPosts} = require("./core/posts")
const {getComments} = require("./core/comments")
const app = new express()
const port = 3000

app.get("/", async (req,res) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => json)
    res.send(getPosts(posts))
})

app.get("/:id", async (req,res) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/post/${req.params.id}/comments`).then((response) => response.json()).then((json) => json)
    res.send(getComments(comments))
})

app.listen(port, () => console.log(`app lstening on port ${port}`))