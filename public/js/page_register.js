

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
            document.getElementById("register-Email").style.borderColor = 'black'
            document.getElementById("register-Email").style.borderStyle = 'solid'
            document.getElementById("register-Email").placeholder = ''
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
                 fetch("/users", {
                    method:  "POST",
                    headers: { "Content-Type": "application/json" },
                    body:    JSON.stringify({ email, password })
                })
                    .then(res => {
                    if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
                    return res.json();
                    })
                    .then(createdUser => {
                    alert("Usuário cadastrado!");
                    window.location.href = "/login";
                    })
                    .catch(err => {
                    console.error("Falha no registro:", err);
                    document.getElementById("error-text").innerText = "Não foi possível registrar.";
                    });
                
            }
}