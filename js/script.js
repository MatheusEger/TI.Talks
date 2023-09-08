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
    const filtroNome = filtroNomeInput.value.toLowerCase();

    palestrantes.forEach(palestrante => {
        const nome = palestrante.querySelector("h5").textContent.toLowerCase();
        if (nome.includes(filtroNome)) {
            palestrante.style.display = "block";
        } else {
            palestrante.style.display = "none";
        }
    });
}