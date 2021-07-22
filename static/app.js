


function startAnimation(){
    const bio = document.getElementById('p-bio')
    const img = document.querySelector('#bio img')
    bio.removeAttribute('id', 'p-bio')
    img.removeAttribute('id','img-bio')
    bio.setAttribute('id', 'bio-p')
    img.setAttribute('id','bio-img')
}

window.addEventListener('load', (e) => {
    startAnimation()
})



let slideIndex = 1
showSlides(slideIndex)



function showSlides(n){

    let slides = document.getElementById('slides')
    let slide = document.getElementById('slide')
    slides.style.display = 'block'
    if(n == 1){
        slide.setAttribute('src', '/static/downloadable-files/yvonne-reference.pdf')
    }
    if(n == 2){
        slide.setAttribute('src', '/static/downloadable-files/matt-reference.pdf')
    }
    // if(n == 3){
    //     slide.setAttribute('src', '/static/downloadable-files/yvonne-reference.pdf')
    // }
}

const prev = document.getElementById('prev')
const next = document.getElementById('next')

prev.addEventListener('click', (e) => {
    if(slideIndex == 1){
        slideIndex = 2
        showSlides(slideIndex)
    } else {
        slideIndex -= 1
        showSlides(slideIndex)
    }
})

next.addEventListener('click', (e) => {
    if(slideIndex == 2){
        slideIndex = 1
        showSlides(slideIndex)
    } else {
        slideIndex += 1
        showSlides(slideIndex)
    }
})

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
