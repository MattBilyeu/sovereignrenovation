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

