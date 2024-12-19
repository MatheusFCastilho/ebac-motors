$(document).ready(function () {
    $('#imgCarrossel').slick({
        autoplay: true,
        arrows: false
    })
    
    $('#telefone').mask('(00) 00000-0000') //Cria uma máscara para o campo do TELEFONE

    $('#cpf').mask('000.000.000-00') //Cria uma máscara para o campo de CPF

    $('#cep').mask('00.000-000') //Cria um máscara para o campo do CEP

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
    })
})
    