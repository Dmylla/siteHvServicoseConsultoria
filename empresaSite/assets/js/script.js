
//  submit form
const contatoform = document.querySelector(".contato-form")

contatoform.addEventListener("submit" , (e) => {
    e.preventDefault()
    const name =  document.querySelector("#nome").value
    const email =  document.querySelector("#email").value
    const phone =  document.querySelector("#telefone").value
    const subject =  document.querySelector(".imputtextarea").value

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)

    const text =  `
    Novo contato pelo site:

     Nome:${name}
     Telefone:${phone}
     Email:${email}
     Assunto:${subject}
    `
    const url = `https://wa.me/5598992431834?text=${encodeURIComponent(text)}`;

    window.open(url)
})


// More serviços

const buttonMoreServices = document.querySelector(".serviços-button")

console.log(buttonMoreServices)
buttonMoreServices.addEventListener("click" , () => {

    gsap.fromTo(".more-services",{
        y:300,
        opacity:0,
        display:"none"
    },{
        y:0,
        opacity:1,
        duration:1  ,
        display:"flex"
    })


    // console.log
    // const divMoreServices = document.querySelector(".more-services")
    // divMoreServices.style.display = "flex"
    // divMoreServices.style.opacity = "1"
    // console.log(divMoreServices)
})


