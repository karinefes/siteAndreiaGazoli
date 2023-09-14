var acor = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acor.length; i++) {
  acor[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var painel = this.nextElementSibling;
    if (painel.style.display === "block") {
      painel.style.display = "none";
    } else {
      painel.style.display = "block";
    }
  });
}