
//  submit form
const contatoform = document.querySelector(".contato-form")

contatoform.addEventListener("submit" , (e) => {
    e.preventDefault()
    const name =  document.querySelector("#nome").value
    const email =  document.querySelector("#email").value
    const phone =  document.querySelector("#telefone").value
    const subject =  document.querySelector(".input-textarea").value

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
    const url = `https://wa.me/559892431834?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
})


// More serviços

const buttonMoreServices = document.querySelector(".serviços-button")

console.log(buttonMoreServices)
buttonMoreServices.addEventListener("click" , () => {

    buttonMoreServices.setAttribute("disabled" ,"true")

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
})


// slider

 document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

