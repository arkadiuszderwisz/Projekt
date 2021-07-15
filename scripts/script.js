function galleryButton(){
    
    var a = document.getElementsByClassName('hidden-pics');
    for (var i = 0; i < a.length; i++) {
        a[i].style.height = '100%';
        a[i].style.width = '100%';
    }
    var b = document.getElementsByClassName('hidden-divs');
    for (var i = 0; i < b.length; i++) {
        b[i].style.display = 'block';
    }
    var c = document.getElementsByClassName('gallery-button');
    for (var i = 0; i < c.length; i++) {
        c[i].style.display = 'none';
    }
}

function newWindow() {
    window.open("https://wsei.edu.pl/kontakt/", "_blank", "width=800,height=800");
}







/* SLIDER */


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}