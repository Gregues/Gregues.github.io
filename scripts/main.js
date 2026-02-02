// Esta função faz a troca do tema
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", targetTheme);
}

// Esta parte "escuta" o clique no botão sem precisar de código no HTML
document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("botao-claro-escuro");
  
  if (botao) {
    botao.addEventListener("click", toggleDarkMode);
  }
});