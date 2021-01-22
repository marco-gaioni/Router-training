const e = module.exports

e.getComments = (comments) => comments.reduce((acc,e) => {
    acc+= `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
      <div class="card">
      <div class="card-header">
        ${e.title}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>${e.body}</p>
          <footer class="blockquote-footer">${e.email}</footer>
        </blockquote>
      </div>
    </div>
    

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    
      </body>
    </html>
          `
    return acc
},"")