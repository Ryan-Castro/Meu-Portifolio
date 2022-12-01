let repos = []




fetch('https://api.github.com/users/Ryan-Castro/repos').then(async(response)=>{
    repos = await response.json()
    repos.forEach(repo => {
        $("#repositories").children().append(`
            <a href="${repo.html_url}" target="_blank" rel="external">
                <div class="repo">
                    <h1>${repo.name}</h1>
                    <p>${repo.description}</p>
                </div>
            </a>
    `)
    });

})
    