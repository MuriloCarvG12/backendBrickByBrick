document
.getElementById("form_body")
.addEventListener('submit', perform_login)

function perform_login(event)
{
    event.preventDefault()
    const name = document.getElementById('field_username').value
    const password = document.getElementById('field_password').value

    if(name != "teste@teste" && password != "teste")
        {
            document.getElementById('error-text').innerText= 'USUARIO OU SENHA INCORRETOS'
            document.getElementById('field_username').style.borderStyle = 'Solid'
            document.getElementById('field_username').style.borderColor = 'Red'

            document.getElementById('error-text-password').innerText= 'USUARIO OU SENHA INCORRETOS'
            document.getElementById('field_password').style.borderStyle = 'Solid'
            document.getElementById('field_password').style.borderColor = 'Red'
        }
    else
    {
       location.href = "../pages/page_home.html"
    }
    
}