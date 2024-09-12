const input = document.querySelector(".add-list");
const list = document.querySelector("ul");

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

const add_btn = document.querySelector(".add");
const remove_btn = document.querySelector(".remove");

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

remove_btn.addEventListener("click", () => {
    if (list.firstChild) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    } else {
        alert("Sua lista já esta vazia");
    }
});
