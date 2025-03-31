document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const zoektermInput = document.getElementById("zoekterm");
    const sorteerSelect = document.getElementById("sorteer");
    const limietSelect = document.getElementById("limiet");
    const toepassenBtn = document.getElementById("toepassen");
    const postsContainer = document.getElementById("posts-container");
    let posts = [];

    // Fetch de posts van de API
    async function fetchPosts() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Fout bij ophalen van posts.");
            posts = await response.json();
            renderPosts();
        } catch (error) {
            postsContainer.innerHTML = `<p class='geen-resultaten'>${error.message}</p>`;
        }
    }

    // Render de posts met filter en sortering
    function renderPosts() {
        let gefilterdePosts = posts.filter(post =>
            post.title.toLowerCase().includes(zoektermInput.value.toLowerCase())
        );

        // Sorteren
        switch (sorteerSelect.value) {
            case "titel-oplopend":
                gefilterdePosts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "titel-aflopend":
                gefilterdePosts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "id-oplopend":
                gefilterdePosts.sort((a, b) => a.id - b.id);
                break;
            case "id-aflopend":
                gefilterdePosts.sort((a, b) => b.id - a.id);
                break;
        }

        // Limiet toepassen
        gefilterdePosts = gefilterdePosts.slice(0, parseInt(limietSelect.value));

        // Render HTML
        postsContainer.innerHTML = "";
        if (gefilterdePosts.length === 0) {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Geen posts gevonden.</p>";
            return;
        }

        gefilterdePosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <div class="post-titel">${post.title.toUpperCase()}</div>
                <div class="post-body">${post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}</div>
                <div class="post-info">
                    <span>Post ID: ${post.id}</span>
                    <span>Gebruiker ID: ${post.userId}</span>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Event listener voor filter- en sorteeropties
    toepassenBtn.addEventListener("click", renderPosts);

    // Start de app
    fetchPosts();
});
