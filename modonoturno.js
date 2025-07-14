// Seleciona o botão para alternar o modo noturno
const toggleButton = document.getElementById("toggle-button");
// Função para alternar o modo noturno
function toggleNightMode() {
  // Alterna a classe 'night-mode' no elemento body
  document.body.classList.toggle("night-mode");
}
// Adiciona um ouvinte de evento ao botão para chamar a função ao ser clicado
toggleButton.addEventListener("click", toggleNightMode);
// Aqui está o CSS necessário para o modo noturno
const style = document.createElement("style");
style.innerHTML = `
/* Estilo para modo normal */
body {
    background-color: white;
    color: black;
}
/* Estilo para modo noturno */
body.night-mode {
    background-color: black;
    color: white;
}
`;
// Adiciona o estilo ao documento
document.head.appendChild(style);
