const body = document.querySelector("body")
function add_class() {
    const btn = document.getElementById("switch_font");
    body.classList.add("dis");
  }
  
  function delete_class() {
    const btn = document.querySelector("#switch_font");
    body.classList.remove("dis");
  }
  
  document.querySelector("#switch_font").addEventListener("click", function() {
    if (body.classList.contains("dis")) {
      delete_class();
    } else {
      add_class();
    }
  });
  