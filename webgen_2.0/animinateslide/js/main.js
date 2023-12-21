const images =["animinateslide/js/s5.jpg","animinateslide/js/s6.jpg","animinateslide/js/s5.jpg"];
const carousel=document.querySelector(".carousel");
const intervel =setInterval(function(){
    startCarousel ();
},5000);

var index =1;
startCarousel = () => {
    carousel.style.backgroundImage = `url(${ images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index >  images.length -1) index=0;
}

