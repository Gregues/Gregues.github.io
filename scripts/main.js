function toggleDarkMode() {
  // Busca o elemento raiz do site (o <html>)
  const htmlElement = document.documentElement;
  
  // Verifica se o tema atual é 'dark'
  const currentTheme = htmlElement.getAttribute("data-theme");
  
  // Se for dark, muda para light. Se não, muda para dark.
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  
  // Aplica a mudança
  htmlElement.setAttribute("data-theme", targetTheme);
}