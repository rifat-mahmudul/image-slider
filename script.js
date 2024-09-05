let curentIndex = 0;

const showSlide = (index) => {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    

    if(index >= totalSlides){
        curentIndex = 0;
    }

    else if(index < 0){
        curentIndex = totalSlides - 1;
    }

    else{
        curentIndex = index;
    }

    slides.style.transform = `translateX(${-curentIndex * 100}%)`
}


const prevSlide = () => {
    showSlide(curentIndex - 1);
}

const nextSlide = () => {
    showSlide(curentIndex + 1);
}