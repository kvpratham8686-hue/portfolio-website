const text = "Software Developer | Cloud Enthusiast | Problem Solver";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
type();

particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true }
    }
});

fetch("https://api.github.com/users/kvpratham8686-hue/repos")
.then(res => res.json())
.then(data => {
    let container = document.getElementById("github-projects");

    data.slice(0,6).forEach(repo => {
        let div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <a href="${repo.html_url}" target="_blank">View</a>
        `;

        container.appendChild(div);
    });
});