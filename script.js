const generateBTN = document.getElementById("generate-BTN");
const jokeElement = document.getElementById("joke");

const apiKey = "oXtRZzfEoVj+bviyUnIVmg==ob54wDnATcZ9Au3Z";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){

    try {
        jokeElement.innerText = "Cooking a joke...";

        generateBTN.disabled = true;
        generateBTN.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        generateBTN.disabled = false;
        generateBTN.innerText = "Generate another!!";

        jokeElement.innerText = data[0].joke;

    } catch (error) {
        jokeElement.innerText = "An error happened! try again later!";
        generateBTN.disabled = false;
        generateBTN.innerText = "Try generate a joke!!";
        
        console.log(error);
    }

    
}


generateBTN.addEventListener("click",getJoke)