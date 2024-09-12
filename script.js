const input = document.querySelector(".add-list");
const list = document.querySelector("ul");
const add_btn = document.querySelector(".add");
const clear_btn = document.querySelector(".clear");
const remove_btn = document.querySelector(".remove");

list.addEventListener("click", (e) => {
    let task_done = e.target;
    task_done.classList.toggle("strike-through");

    // console.log(task_done);
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (input.value) {
            const new_li = document.createElement("li");
            new_li.innerHTML = input.value;
            list.appendChild(new_li);
        } else {
            alert("Você deve digitar algo para adcionar à sua lista");
        }
        input.value = "";
    }
});

add_btn.addEventListener("click", () => {
    if (input.value) {
        const new_li = document.createElement("li");
        new_li.innerHTML = input.value;
        list.appendChild(new_li);
    } else {
        alert("Você deve digitar algo para adcionar à sua lista");
    }
    input.value = "";
});

clear_btn.addEventListener("click", () => {
    if (list.firstChild) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    } else {
        alert("Sua lista já esta vazia");
    }
});

remove_btn.addEventListener("click", () => {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    } else {
        alert("Sua lista já esta vazia");
    }
});
