let rowsInput = document.getElementById("input1")
let colsInput = document.getElementById("input2")
let btn = document.getElementById("button")


btn.addEventListener('click', createTable)


function createTable() {
    let body = document.body;
    let table = document.createElement("table")

    for (let i = 0; i < rowsInput.value; i++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < colsInput.value; j++) {
            let td = document.createElement("td")
            td.innerHTML = "somia"
            tr.appendChild(td)
        }
    }
    body.appendChild(table)
}


createTable()