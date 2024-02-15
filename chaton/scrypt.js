// génération de la case à coché.
const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")
checkbox.setAttribute("id", "switch_font")
const label = document.createElement("label")
label.setAttribute("for", "switch_font")
label.textContent = "font open-dis"
const span = document.createElement("span")
document.body.append(span)
const h1 = document.createElement("h1")
h1.textContent = "flexbox - card layout"
const header = document.querySelector("header")
const main = document.querySelector("main")
const article_1 = document.createElement("article")
article_1.setAttribute("class", "chat")
const img1 = document.createElement("img")
img1.setAttribute("src","./image/cat1.jpg")
img1.setAttribute("alt","cette image représante un chat")
const h2_1 = document.createElement("h2")
h2_1.textContent = "Wiskey"
const p_1 = document.createElement("p")
p_1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur nihil quia recusandae earum quidem numquam est distinctio ipsam ratione, blanditiis sequi, magni quo tempora aperiam sunt temporibus voluptatibus quis."

// affichage sur la page.
header.appendChild(h1)
span.appendChild(checkbox)
span.appendChild(label)
header.appendChild(span)
main.appendChild(article_1)
article_1.appendChild(img1)
article_1.appendChild(h2_1)
article_1.appendChild(p_1)
// traitement de la case à coché.
const body = document.querySelector("body")
const btn = document.querySelector("#switch_font")
  .addEventListener("click", function () {
    body.classList.toggle("dis");
  });
