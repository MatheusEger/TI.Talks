let menu = document.querySelector('nav .menu');

function openMenu(){
    menu.classList.add('open');
}

function closeMenu(){
    menu.classList.remove('open');
}

// Selecionar o campo de entrada e a lista de palestrantes
const filtroNomeInput = document.getElementById("filtroNome");
const palestrantes = document.querySelectorAll(".palestrante");

// Adicionar um ouvinte de evento para o campo de entrada
filtroNomeInput.addEventListener("input", filtrarPalestrantes);

function filtrarPalestrantes() {
    // Obtém o valor do input de filtro
    var filtro = document.getElementById("filtroNome").value.toLowerCase();

    // Obtém todos os cards de palestrantes
    var palestrantes = document.getElementsByClassName("filtrar");

    // Loop através dos cards de palestrantes
    for (var i = 0; i < palestrantes.length; i++) {
        var nomePalestrante = palestrantes[i].querySelector(".card-title").innerText.toLowerCase();
        // Verifica se o nome do palestrante contém o texto de filtro
        if (nomePalestrante.includes(filtro)) {
            palestrantes[i].style.display = "block"; // Mostra o card
        } else {
            palestrantes[i].style.display = "none"; // Oculta o card
        }
    }
}