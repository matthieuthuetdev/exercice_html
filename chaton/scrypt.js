function add_class() {
    const btn = document.getElementById("switch_font");
    btn.classList.add("dis");
  }
  
  function delete_class() {
    const btn = document.getElementById("switch_font");
    btn.classList.remove("dis");
  }
  
  document.getElementById("switch_font").addEventListener("click", function() {
    if (btn.classList.contains("dis")) {
      delete_class();
    } else {
      add_class();
    }
  });
  