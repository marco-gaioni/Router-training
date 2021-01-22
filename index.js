const express = require("express")
const fetch = require("node-fetch")
const {getComments} = require("./core/comments")
const {getPosts} = require("./core/posts")
const port = 8080
const app = new express()



app.get("/", async (req,res) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => json).catch((err) => console.log(err))
    res.send(` <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

                    <title>Posts</title>
                </head>
                <body>
                    ${getPosts(posts)}
    
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    
                </body>
                </html> `)
})


app.get("/:id", async (req,res) => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/post/${req.params.id}/comments`).then((response) => response.json()).then((json) => json).catch((err) => console.log(err))
    res.send(`  <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">

                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

                    <title>Comments</title>
                </head>
                <body>
                    ${getComments(comments)}

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

                </body>
                </html> `)
})

app.listen(port, () => console.log(`app listening on port ${port}`))