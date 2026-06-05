alert("the website is still in the 0.1 stage! expect everything i put here to be broken")

async function loadMarkdown() {
    const path = window.location.pathname;

    const mdPath =
        path.endsWith("/")
        ? path + "index.md"
        : path + "/index.md";

    const response = await fetch(mdPath);
    const markdown = await response.text();

    document.getElementById("content").innerHTML =
        marked.parse(markdown);
}

loadMarkdown();