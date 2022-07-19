window.onload = sendApiRequest

async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#categoria").innerHTML = `Category: ${data.results[0].category}`
    document.querySelector("#dificultad").innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector("#pregunta").innerHTML = `Question: ${data.results[0].question}`
    document.querySelector("#respuesta1").innerHTML = data.results[0].correct_answer
    document.querySelector("#respuesta2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#respuesta3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#respuesta4").innerHTML = data.results[0].incorrect_answers[2]
    }

const correctButton = document.querySelector("#respuesta1");
const incorrectButton1 = document.querySelector("#respuesta2");
const incorrectButton2 = document.querySelector("#respuesta3");
const incorrectButton3 = document.querySelector("#respuesta4");

correctButton.addEventListener('click',()=>{
    alert("Correcto, ¡que listo eres!");
    sendApiRequest();
});

incorrectButton1.addEventListener('click',()=>{
    alert("Incorrecto :(");
    sendApiRequest();
});

incorrectButton2.addEventListener('click',()=>{
    alert("Incorrecto :(");
    sendApiRequest();
});

incorrectButton3.addEventListener('click',()=>{
    alert("Incorrecto :(");
    sendApiRequest();
});