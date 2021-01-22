const e = module.exports

e.getPosts = (posts) => posts.reduce((acc,e) => {
    acc+= ` <div class="card">
                <div class="card-header">
                    ${e.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${e.body}</p>
                        <footer class="blockquote-footer">${e.userId}</footer>
                    </blockquote>
                </div>
            </div>`
    return acc
},"")