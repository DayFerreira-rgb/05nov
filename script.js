function entrar(){ 
    


//Criação da variável digitada pelo usuário
//Usuário e senha 
var usuarioEmail = document.getElementById('usuarioEmail').value 
var senha = document.getElementById('senha').value 

//Fazer a condição
if(usuarioEmail == "senai" &&  senha == "Senai123"|| usuarioEmail == "senai@senai.com" && senha == "Senai123") {
    window.location.href = 'page.html'
} else {
    Swal.fire({
        title: "Usuário/Email incorretos!",
        text: "Tente Novamente",
        icon: "error" 
})
}
}