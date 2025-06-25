export default function validateCPF(cpf) {
    // Remove all non-numeric characters
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        console.log("invalid: wrong length or repeated digits");
        return 0;
    }
    
    let soma_decimo = 0
    let soma_decimo_primeiro = 0

    let peso_decimo = 10
    let peso_decimo_primeiro = 11

    for(let i = 0; i < 9; i++)
        {
            soma_decimo += parseInt(cpf[i]) * peso_decimo
            peso_decimo--
            
        }
    
    for(let i = 0; i < 10; i++)
        {
            soma_decimo_primeiro += parseInt(cpf[i]) * peso_decimo_primeiro
            peso_decimo_primeiro--
            
        }
    
    let soma_decimo_check = (soma_decimo * 10) % 11

    if(soma_decimo_check  >= 10)
        {
            soma_decimo_check = 0
        }

    let soma_decimo_primeiro_check = (soma_decimo_primeiro * 10) % 11
    
    if(soma_decimo_primeiro_check >= 10)
        {
            soma_decimo_primeiro_check = 0
        }
    
    if(parseInt(cpf[9]) != soma_decimo_check )
        {
            console.log(" soma_decimo_check invalid")
            return 0
        }
    else if (parseInt(cpf[10]) != soma_decimo_primeiro_check)
        {
            console.log("soma_decimo_primeiro_check invalid")
            return 0
        }
    else
    {
        console.log("valid")
        return 1
    }   
}
