function logar() {
    var usuario = document.getElementById("user").value
    var senha = document.getElementById("pass").value
    //USUÁRIO DE TESTE PARA LOGAR É denis@hotmail.com e senha 1234
    if (usuario == "denis@teste.com" && senha == "123"){
        //console.log("O Usuário:", document.getElementById("user").value, "ou senha:", document.getElementById("pass").value, "são válido!" );
        //alert("Usúario e senhas válidos!");
        window.location.href = "funcionario.html";
    } else if (usuario == "" && senha == "") {
        //console.log("O Usuário:", document.getElementById("user").value, "ou senha:", document.getElementById("pass").value, "são inválido !" );
        //alert("Usuário ou senha são em branco");
        document.getElementById("senhaInvalida").innerHTML="Usuário e/ou senha em branco!!!<br><br>";

        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("user").focus();
    } else{
        //console.log("O Usuário:", document.getElementById("user").value, "ou senha:", document.getElementById("pass").value, "são inválido !" );
        //alert("Usuário ou senha são inválido");
        document.getElementById("senhaInvalida").innerHTML="Usuário e/ou senha Inválido!!!<br><br>";

        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("user").focus();
    }
};
