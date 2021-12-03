// Função pra exibir o menu de navegação na versão mobile
function showMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// Debug
//window.scrollTo(0, document.body.scrollHeight);
