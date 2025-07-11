
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
     Assunto:${email}
    `
    const url = `https://wa.me/559896028439?text=${encodeURIComponent(text)}`;

    window.open(url)
})