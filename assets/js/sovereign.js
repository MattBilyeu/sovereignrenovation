const servicesImage = document.querySelector('#servicesImage');

const handleImageTransition = function(string) {
    servicesImage.classList.add('veil');
    setTimeout(()=> {
        servicesImage.classList.remove('veil');
    },1000);
    setTimeout(()=> {
        servicesImage.src = string;
    },500)
}

const kitchenRemodel = document.querySelector('#kitchenRemodel');
kitchenRemodel.addEventListener('click', ()=> {
    handleImageTransition('assets/images/sovereign/kitchen-remodel.jpg');
})

const countertop = document.querySelector('#countertop');
countertop.addEventListener('click', ()=> {
    handleImageTransition('assets/images/sovereign/counter-install.jpg');
})

const cabinetry = document.querySelector('#cabinetry');
cabinetry.addEventListener('click', ()=> {
    handleImageTransition('assets/images/sovereign/cabinets-install.jpg');
})

const lighting = document.querySelector('#lighting');
lighting.addEventListener('click', ()=> {
    handleImageTransition('assets/images/sovereign/lighting-install.jpg');
})

const testimonials = document.querySelectorAll('.testimonial');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index = 0;

const handleLeft = function() {
    if (index === 0) {
        index = testimonials.length-1;
    } else {
        index--;
    }
    setActive();
    clearInterval(testimonialScroll);
}

left.addEventListener('click', ()=> {
    handleLeft();
})

const handleRight = function() {
    if (index === testimonials.length-1) {
        index = 0;
    } else {
        index++;
    }
    setActive();
    clearInterval(testimonialScroll);
}

right.addEventListener('click', ()=> {
    handleRight();
})

const setActive = function() {
    testimonials.forEach(item => {
        item.classList.remove('active');
    });
    testimonials[index].classList.add('active');
}

const testimonialScroll = setInterval(()=> {
    if (index === testimonials.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setActive();
},2000);