
  document
    .getElementById('form_body')
    .addEventListener('submit', perform_login);

 function perform_login(event)
{
    event.preventDefault();
    const email = document.getElementById('field_username').value
    const password = document.getElementById('field_password').value
    if(email == "")
        {
            document.getElementById('error-text').innerText= 'EMAIL VAZIO'
            document.getElementById('field_username').style.borderStyle = 'Solid'
            document.getElementById('field_username').style.borderColor = 'Red'
        }
    
    if(password == "")
        {
            document.getElementById('error-text-password').innerText= 'SENHA VAZIA'
            document.getElementById('field_password').style.borderStyle = 'Solid'
            document.getElementById('field_password').style.borderColor = 'Red'
        }
    if(email != "" && password != "")
    {
       //location.href = "/home"
        fetch("http://localhost:3000/users")

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            // parse the JSON out of the response
            return response.json();})

        .then(usersArray => 
        {

        const matchedUser = usersArray.find(user =>
        user.email === email && user.password === password
        );

        if (matchedUser) 
        {
           
            console.log("Login successful for user:", matchedUser);
            location.href = "/home";
        } 
        else 
        {
          
            document.getElementById("error-text").innerText = "Email ou Senha inválidos";
            document.getElementById("field_username").style.borderColor = "red";
            document.getElementById("field_password").style.borderColor = "red";
        }})
        .catch(err => console.error("Fetch or parse failed:", err));
    }
  
}
        

    
    /** 
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
       location.href = "/home"
    }
    */
    
