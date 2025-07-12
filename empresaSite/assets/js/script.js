
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
    const url = `https://wa.me/559896028439?text=${encodeURIComponent(text)}`;

    window.open(url)
})


// gsap

gsap.registerPlugin(ScrollTrigger);

// hero section
gsap.fromTo(".hero-title", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:2,
    opacity:1,
})

gsap.fromTo(".description-hero", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:2.5,
    opacity:1
})

gsap.fromTo(".botaoContatoDois", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:3,
    opacity:1
})

// sobre-serction
gsap.fromTo(".tituloSobrenois" ,{
    y:500,
    opacity:0

},{
    y:0,
    duration:2,
    opacity:1,
     scrollTrigger:{
        trigger:".hero-title",
        start:"top 15%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".sobrenoisparagrafo" , {
    y: 500,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".sobrenoisparagrafo",
        start:"top 160%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".imgsobrenois", {
    y:500,
    opacity:0
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".imgsobrenois",
        start: "top 160%",
        toggleActions:"play none none none"
    }
})

// teste

    gsap.fromTo(".cardes" , {
        x: -2000,
        opacity:0
        },{
        x:0,
        opacity:1,
        duration: 2,
        scrollTrigger:{
            trigger:".cardes",
            start:"top 90%",
            toggleActions:"play none none none"
        }
    })

