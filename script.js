//INCLUIR NO JAVASCRIPT – script.js

// 1. FORMULÁRIO DE CONTATO

const formulario = document.querySelector(".contact-form");

formulario.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os dados preenchidos
    const nome = formulario.querySelector('input[type="text"]').value;
    const email = formulario.querySelector('input[type="email"]').value;
    const telefone = formulario.querySelector('input[type="tel"]').value;
    const serie = formulario.querySelector("select").value;

    // ALUNO: Você pode personalizar a mensagem abaixo

    alert(
        "Olá, " + nome + "! Recebemos sua solicitação.\n\n" +
        "Nome: " + nome +
        "\nE-mail: " + email +
        "\nTelefone: " + telefone +
        "\nSérie: " + serie
    );

    // Limpa os campos do formulário
    formulario.reset();
});


// 2. ÁREA DO ALUNO

// Seleciona os elementos do HTML
const btnAluno = document.querySelector("#btn-aluno");
const modalAluno = document.querySelector("#modal-aluno");
const fecharModal = document.querySelector("#fechar-modal");
const btnEntrar = document.querySelector("#btn-entrar");


// 3. ABRIR A JANELA

btnAluno.addEventListener("click", function(event) {

    event.preventDefault();

    // Exibe a janela de login
    modalAluno.style.display = "flex";
});


// 4. FECHAR A JANELA

fecharModal.addEventListener("click", function() {

    // Esconde a janela de login
    modalAluno.style.display = "none";
});


// 5. SIMULAÇÃO DE LOGIN

btnEntrar.addEventListener("click", function() {

    // Captura usuário e senha digitados
    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    // Login fictício apenas para atividade escolar
    // ALUNO: Personalize as mensagens, se desejar

    if (usuario === "aluno" && senha === "1234") {

        alert("Login de demonstração realizado com sucesso!");

    } else {

        alert("Usuário ou senha incorretos!");
    }
});

