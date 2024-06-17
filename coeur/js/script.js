const body = document.querySelector("body");
const table = document.createElement("table");
for (let l = 0; l < 9; l++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 9 ; c++) {
        const td = document.createElement("td")
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
const cases = document.querySelectorAll("td")
cases.forEach(Element =>{
    Element.addEventListener("click", () => {
        Element.setAttribute("class", "noir")
    })
    
})
body.appendChild(table);