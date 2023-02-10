
const root = new makeNode('\0')
for (const item of items)
    add(item, 0, root);
const textBox = document.getElementById("textInput");
const list = document.getElementById("list");

function handler(e) {
    const str = e.target.innerHTML;
    words = str.split(' ');
    lastWord = words[words.length - 1]
    const predictions = search(lastWord, 0, root);
    list.innerHTML = "";
    i = 0;
    for (const prediction of predictions) {
        i += 1;
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${lastWord}</b>${prediction.substring(lastWord.length)}</li>`
        if (i == 5) {
            break;
        }
    }
}

function setCarat(element) {
    // Place cursor at the end of a content editable div
    if (element.type !== "textarea" && element.getAttribute("contenteditable") === "true") {
        element.focus()
        window.getSelection().selectAllChildren(element)
        window.getSelection().collapseToEnd()
    }
}


function handleClick(e) {
    const word = e.innerHTML.split("<b>").join("").split("</b>").join("");
    text = textBox.innerHTML.split(" ");
    text.pop();
    textBox.innerHTML = text.join(" ") + " " + word + " ";
    setCarat(textBox);

}
handler({ target: { innerHTML: "" } })
textInput.addEventListener('input', handler);
textInput.addEventListener('input', handler);