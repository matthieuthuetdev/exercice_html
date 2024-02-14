const checkbox = document.createElement("input")
checkbox.setAttribute("type","checkbox")
checkbox.setAttribute("id","switch_font")
const label = document.createElement("label")
label.setAttribute("for","switch_font")
label.textContent = "font open-dis"
const span = document.createElement("span")
span.appendChild(checkbox)
span.appendChild(label)
document.body.appendChild(span)


const body = document.querySelector("body")
const btn = document.querySelector("#switch_font")
.addEventListener("click", function () {
  body.classList.toggle("dis");
});
