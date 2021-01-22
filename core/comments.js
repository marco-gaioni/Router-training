const e = module.exports

e.getComments = (comments) => comments.reduce((acc,e) => {
    acc+= ` <div class="card">
                <div class="card-header">
                    ${e.name}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${e.body}</p>
                        <footer class="blockquote-footer">${e.email}</footer>
                    </blockquote>
                </div>
            </div>`
    return acc
},"")