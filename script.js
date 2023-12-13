 
const tlacitko = document.querySelector(".task button");


tlacitko.addEventListener(`click`, () => {
    let input = document.querySelector("#addedTask");
    let inputText = input.value;

    if (inputText != ``) {
        let tasks = document.querySelector(".task__active");

        let addTask = `<p><button class="chacked" onclick="chackedFunction(this)"><img src="images/unchecked.png"></button>
        <span class="text">${inputText}</span>
        <button class="delete" onclick="deleteFunction(this.parentNode)">
        <span>\u00d7</span></button></p>`;
        tasks.innerHTML += addTask;

        input.value = "";
    }
})


function deleteFunction(radek) {
    let tasks = document.querySelector(".task__active");
    tasks.removeChild(radek);
}

function chackedFunction(tlacitko) {
    let radek = tlacitko.parentNode;

    let text = radek.querySelector(`.text`);
    let obrazek = radek.querySelector(`img`);
    let vnitrniText = text.innerText;

    obrazek.src = "images/checked.png";
    text.innerHTML = `<s>${vnitrniText}</s>`;

}