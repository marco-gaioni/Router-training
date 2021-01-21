const e = module.exports

e.getPosts = (posts) => posts.reduce((acc,e) => {
    acc +=  `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

        <title>posts</title>
    </head>
    <body>
        <div class="card mx-auto" style="width: 80%; margin-top: 5%;">
            <div class="card-body">
                <h5 class="card-title text-uppercase">${e.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">User ${e.userId}</h6>
                <p class="card-text">${e.body}</p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
    </html>`
    return acc   
},"")