import validateCPF from "./cpf_check.js"

document
.getElementById("page_payment")
.addEventListener("submit", payment)



// 
const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const idUrl = params.get("id")

document.getElementById("product").innerText=idUrl

function payment(event)
{
    event.preventDefault()
    const email = document.getElementById("purchase-email").value
    const cpf = document.getElementById("purchase-CPF").value
    const adress = document.getElementById("purchase-endereço").value
    const card_password = document.getElementById("purchase-senha_cartao").value
    const card_security_code = document.getElementById("purchase-codigo-cartao").value
    

    if(email == "")
        {
            document.getElementById("purchase-email").style.borderColor = 'red'
            document.getElementById("purchase-email").style.borderStyle = 'solid'
            document.getElementById("purchase-email").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
        {
            document.getElementById("purchase-email").style.borderColor = 'black'
            document.getElementById("purchase-email").style.borderStyle = 'solid'
            document.getElementById("purchase-email").placeholder = ''
        }

    if(cpf == "")
        {
            document.getElementById("purchase-CPF").style.borderColor = 'red'
            document.getElementById("purchase-CPF").style.borderStyle = 'solid'
            document.getElementById("purchase-CPF").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
    {
        document.getElementById("purchase-CPF").style.borderColor = 'black'
        document.getElementById("purchase-CPF").style.borderStyle = 'solid'
        document.getElementById("purchase-CPF").placeholder = ''
    }

    if(adress == "")
        {
            document.getElementById("purchase-endereço").style.borderColor = 'red'
            document.getElementById("purchase-endereço").style.borderStyle = 'solid'
            document.getElementById("purchase-endereço").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
    {
        document.getElementById("purchase-endereço").style.borderColor = 'black'
        document.getElementById("purchase-endereço").style.borderStyle = 'solid'
        document.getElementById("purchase-endereço").placeholder = ''
    }

    if(card_password == "")
        {
            document.getElementById("purchase-senha_cartao").style.borderColor = 'red'
            document.getElementById("purchase-senha_cartao").style.borderStyle = 'solid'
            document.getElementById("purchase-senha_cartao").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
    {
        document.getElementById("purchase-senha_cartao").style.borderColor = 'black'
        document.getElementById("purchase-senha_cartao").style.borderStyle = 'solid'
        document.getElementById("purchase-senha_cartao").placeholder = ''
    }

    if(card_security_code == "")
        {
            document.getElementById("purchase-codigo-cartao").style.borderColor = 'red'
            document.getElementById("purchase-codigo-cartao").style.borderStyle = 'solid'
            document.getElementById("purchase-codigo-cartao").placeholder = 'CAMPO NAO PREENCHIDO'
        }
        else
        {
            document.getElementById("purchase-codigo-cartao").style.borderColor = 'black'
            document.getElementById("purchase-codigo-cartao").style.borderStyle = 'solid'
            document.getElementById("purchase-codigo-cartao").placeholder = ''
        }

    
    if(email && adress && card_password && card_security_code != "" && validateCPF(cpf))
        {
            alert("Compra Realizada!")
        }
}