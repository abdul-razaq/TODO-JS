let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

// get the length of the input
function inputLength() {
    return input.value.length;
}

// get the number of list items
function listLength() {
    return item.length;
}

function createListElement() {
    let li = document.createElement("li"); // create li elements
    li.appendChild(document.createTextNode(input.value)); // makes text from input field the li text
    ul.appendChild(li); // adds li to ul
    input.value = ""; // Reset text input field

//START STRIKETHROUGH
// because it's in the function, it only adds it for new items
function crossOut() {
    li.classList.toggle("done");
}

li.addEventListener("click", crossOut);
//END STRIKETHROUGH

// Start Add, Delete Button
let dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
// END Add, Delete Button

// Add Class Delete (Display: NONE)
function deleteListItem() {
    li.classList.add("delete");
}
// END Add Class Delete.

}

function addListAfterClick() {
    if (inputLength() > 0) {
        // makes sure that an empty input field doesn't create an li
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        // this looks to see if you hit enter/return
        // 13 is the enter key's keycode, this could also by displayed by using event.keyCode === 13
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
