const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.addEventListener("submit",(event)=>{
    event.preventDefault()
   
        if(name.value ==""){
            avisoNombre.innerText="Por favor completar esta informacion"
        }
        if(email.value ==""){
            avisoEmail.innerText="Por favor completar esta informacion"
        }


    else{
        form.submit();
    }

})
const form1 = document.querySelector("#formJumbo");
const suscribir = document.querySelector("#suscribir");

form1.addEventListener("submit", (event)=>{
    event.preventDefault()

    if(suscribir.value==""){
        avisoSuscribir.innerText="Por favor completar esta informacion"

    }else{
        form1.submit();
    }
})


