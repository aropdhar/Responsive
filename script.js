// navbar responsive section

let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


menu.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// home section slide


const sr = ScrollReveal({

    distance: "60px",
    duration: 2500,
    reset:true

});

sr.reveal('.home_text' , {delay:200 , origin:'left'});
sr.reveal('.image' , {delay:200 , origin:'right'});

// breakfast section

sr.reveal('.breakfast', {delay:300 , origin:'bottom'});
sr.reveal('.breakfast_card , .about_text',{delay:300, origin:'top'});

// menu section slide

sr.reveal('.menu' , {delay:300 ,origin:'top'});

sr.reveal('#slide' , {delay:300 ,origin:'left'});
sr.reveal('#slide1' , {delay:300 ,origin:'top'});
sr.reveal('#slide2' , {delay:300 ,origin:'bottom'});
sr.reveal('#slide3' , {delay:300 ,origin:'right'});

// contact section

sr.reveal('.contact' , {delay:300 ,origin:'top'});