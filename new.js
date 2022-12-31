let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
count = count + 1
function increment() {
    countEl.textContent = count
    console.log(count)
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += (countStr)
    countEl.textContent = 0
}
