

document
.getElementById("page_register")
.addEventListener("submit", register)

function register(event)
{
    event.preventDefault()
    const email = document.getElementById("register-Email").value
    const password = document.getElementById("register-Password").value
      if(email == "")
        {
            document.getElementById("register-Email").style.borderColor = 'red'
            document.getElementById("register-Email").style.borderStyle = 'solid'
            document.getElementById("register-Email").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
        {
            document.getElementById("purchase-email").style.borderColor = 'black'
            document.getElementById("purchase-email").style.borderStyle = 'solid'
            document.getElementById("purchase-email").placeholder = ''
        }

    if(password == "")
        {
            document.getElementById("register-Password").style.borderColor = 'red'
            document.getElementById("register-Password").style.borderStyle = 'solid'
            document.getElementById("register-Password").placeholder = 'CAMPO NAO PREENCHIDO'
        }
    else
    {
        document.getElementById("register-Password").style.borderColor = 'black'
        document.getElementById("register-Password").style.borderStyle = 'solid'
        document.getElementById("register-Password").placeholder = ''
    }

    if(email && password  != "")
            {
                alert("User cadastrado")
            }
}