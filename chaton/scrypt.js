// déclaration des balise priinsipale
const body = document.querySelector("body")
const header = document.createElement("header")
const main = document.createElement("main")

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
// création du premier article dynamiquement.
const article_1 = document.createElement("article")
article_1.setAttribute("class", "chat")
const img1 = document.createElement("img")
img1.setAttribute("src","./image/cat1.jpg")
img1.setAttribute("alt","cette image représante un chat")
const h2_1 = document.createElement("h2")
h2_1.textContent = "Wiskey"
const p_1 = document.createElement("p")
p_1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur nihil quia recusandae earum quidem numquam est distinctio ipsam ratione, blanditiis sequi, magni quo tempora aperiam sunt temporibus voluptatibus quis."
// création du deuxième article dynamiquement
const article_2 = document.createElement("article")
article_2.setAttribute("class", "chat")
const img2 = document.createElement("img")
img2.setAttribute("src","./image/cat2.jpg")
img2.setAttribute("alt","cette image représante un chat")
const h2_2 = document.createElement("h2")
h2_2.textContent = "Wiskey"
const p_2 = document.createElement("p")
p_2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur nihil quia recusandae earum quidem numquam est distinctio ipsam ratione, blanditiis sequi, magni quo tempora aperiam sunt temporibus voluptatibus quis."
// création du troisième article dynamiquement.
const article_3 = document.createElement("article")
article_3.setAttribute("class", "chat")
const img3 = document.createElement("img")
img3.setAttribute("src","./image/cat3.jpg")
img3.setAttribute("alt","cette image représante un chat")
const h2_3 = document.createElement("h2")
h2_3.textContent = "Wiskey"
const p_3 = document.createElement("p")
p_3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur nihil quia recusandae earum quidem numquam est distinctio ipsam ratione, blanditiis sequi, magni quo tempora aperiam sunt temporibus voluptatibus quis."

// affichage sur la page.
body.appendChild(header)
header.appendChild(h1)
span.appendChild(checkbox)
span.appendChild(label)
header.appendChild(span)
body.appendChild(main)
main.appendChild(article_1)
article_1.appendChild(img1)
article_1.appendChild(h2_1)
article_1.appendChild(p_1)

main.appendChild(article_2)
article_2.appendChild(img2)
article_2.appendChild(h2_2)
article_2.appendChild(p_2)

main.appendChild(article_3)
article_3.appendChild(img3)
article_3.appendChild(h2_3)
article_3.appendChild(p_3)
body.style.rotate("10deg")
// traitement de la case à coché.
const btn = document.querySelector("#switch_font")
  .addEventListener("click", function () {
    body.classList.toggle("dis");
  });
body.style.backgroundColor = "black"