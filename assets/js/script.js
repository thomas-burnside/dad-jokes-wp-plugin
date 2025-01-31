document.addEventListener("DOMContentLoaded",()=>{

const apiKey = "imP9xtrdUW/6m+CSNtrFNA==QfGrXp2O43tBdVkQ";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

async function getJoke() {
    try {
        jokeEl.innerText = "...";
        btnEl.disabled = true;
        btnEl.innerText = "Tell me a joke";
        btnEl.style.opacity = "0.6";  
        btnEl.style.cursor = "not-allowed";

        const response = await fetch(apiURL, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        jokeEl.innerText = data[0].joke;
        btnEl.innerText = "Tell me a joke";

    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        console.error("Error fetching joke:", error);

    } finally {
        btnEl.disabled = false;
        btnEl.style.opacity = "1"; 
        btnEl.style.cursor = "pointer";
    }
}

btnEl.addEventListener("click", getJoke);
})