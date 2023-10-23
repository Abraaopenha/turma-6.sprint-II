function mostrarSenha () {

    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
    inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
 }
   
}

function verificarEmail() {
    event.preventDefault()

    var email = document.getElementById("email").value;
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (regex.test(email)) {
        document.getElementById("mensagem").textContent = "Email válido!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").textContent = "Email inválido. Por favor, insira um email válido.";
        document.getElementById("mensagem").style.color = "red";
    }
}

function verificarSenhas() {
     event.preventDefault()

    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    var mensagem = document.getElementById("mensagem");

    if (senha1 === senha2) {
        mensagem.textContent = "Senhas iguais!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "As senhas não coincidem. Por favor, verifique.";
        mensagem.style.color = "red";
    }
}