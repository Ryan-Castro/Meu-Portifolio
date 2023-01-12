let repos = []


fetch('https://gh-pinned-repos.egoist.dev/?username=Ryan-Castro').then(async(response)=>{
    repos = await response.json()
    repos.forEach(repo => {
    $("#repositories").children().append(`
            <a href="${repo.link}" target="_blank" rel="external">
                <div class="repo">
                    <h1>${repo.repo}</h1>
                    <p>${repo.description}</p>
                </div>
            </a>
    `)
    });

})
    