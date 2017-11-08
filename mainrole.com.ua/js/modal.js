var e;

function openModal(event) {
  document.getElementById('modal').style.display = "block";
  e = event.target;
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modal-content');
  if ( event.target == modal || event.target == modalContent ) {
    modal.style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex, e);

function plusSlides(n, name) {
  // var slides = document.getElementsByClassName("formodal");
  var slides = document.getElementsByName(name);
  var ev = 0;
  if (slideIndex+n > slides.length) { ev = slides[0] }
  else if (slideIndex+n <= 0) { ev = slides[slides.length-1] }
  else { ev = slides[(slideIndex+n)-1] }
  showSlides(slideIndex += n, ev);
}

function currentSlide(n) {
  showSlides(slideIndex = n, e);
}

function showSlides2(name, i) {
  var elem = document.getElementsByName(name)[i];
  showSlides(slideIndex = 0, elem);
}

function showSlides(n, e) {
  // var slides = document.getElementsByClassName("formodal");
  var slides = document.getElementsByName(e.name);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  var box = document.getElementById('like-mod');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  // var _name = e.name;
  // var slides = document.getElementsByName(_name);
  var was = [];
  if ( slides.length > 1 ) {
    for (var i = 0; i < slides.length; i++) {
      if ( slides[i].src != e.src &&
           !(was.indexOf(slides[i].src) > -1) ) {
        var elem = document.createElement("img");
        elem.setAttribute("src", slides[i].src);
        elem.setAttribute("class", 'formodal');
        elem.setAttribute('onclick', 'showSlides2("'+e.name+'", '+i+');');
        box.appendChild(elem);
        was.push(elem.src);
      }
    }
  }
  document.getElementById('modal-img').src = e.src;
  document.getElementById('modal-img').name = e.name;
}












window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            console.log('left');
            var n = -1;
            var slides = document.getElementsByName(name);
            var ev = 0;
            if (slideIndex+n > slides.length) { ev = slides[0] }
            else if (slideIndex+n <= 0) { ev = slides[slides.length-1] }
            else { ev = slides[(slideIndex+n)-1] }
            showSlides(slideIndex += n, ev);
        } else {
            console.log('right');
            var n = 1;
            var slides = document.getElementsByName(name);
            var ev = 0;
            if (slideIndex+n > slides.length) { ev = slides[0] }
            else if (slideIndex+n <= 0) { ev = slides[slides.length-1] }
            else { ev = slides[(slideIndex+n)-1] }
            showSlides(slideIndex += n, ev);
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};