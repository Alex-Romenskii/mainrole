window.onload = function() {

  slowScroll();

  showActiveItem();

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    mouseDrag: false,
    touchDrag: false
  });

  // jQuery(document).ready(function($) {
  //   $('a[data-rel^=lightcase]').lightcase();
  // });

}

$(document).ready(function() {

  $(".fancybox-thumb").fancybox({

    prevEffect  : 'none',
    nextEffect  : 'none',

    // autoSize: false,

    // height: 1500,
    // padding: 0,

    // autoSize: false,
    // autoHeight: true,
    // type: 'inline',
    onUpdate: function() {
      $('.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened').css({
        background: 'transparent',
        width: '100%',
        top: '0',
        left: '0',
        height: '100%',
        overflow: 'hidden'
      });
      $('.fancybox-skin').css({
        background: 'transparent',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      });
      $('.fancybox-outer').css({
        height: '100%',
        overflow: 'hidden'
      });
      $('.fancybox-inner').css({
        background: 'transparent',
        width: '100%',
        height: '100%',
        'text-align': 'center',
        overflow: 'hidden'
      });
      $('.fancybox-image').css({
        background: 'transparent',
        width: 'auto',
        height: '95%',
        display: 'inline-block'
      });
      $('#fancybox-thumbs > ul').css({
        left: 0,
        margin: 'auto'
      });
    },

    helpers : {
      title : {
        type: 'inside'
      },
      thumbs  : {
        width : 75,
        height  : 75
      }
    }

  });

  $('.fancybox-media').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers : {
      media : {}
    }
  });

});

window.onscroll = function() {
  showActiveItem();
}

function slowScroll() {

  var links = document.querySelectorAll("[href^='#']");
  var speed = 0.75;

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {

      var scroll = window.pageYOffset;
      var hash = this.href.replace(/[^#]*(.*)/, "$1");
      var pos = document.querySelector(hash).getBoundingClientRect().top;
      var start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        var r = (pos < 0 ? Math.max(scroll - progress/speed, scroll + pos) : Math.min(scroll + progress/speed, scroll + pos));
        window.scrollTo(0, r);
        if ( r != scroll + pos ) requestAnimationFrame(step);
        else location.hash = hash;
      }

      return false;

    }
  }

}

function getYPosition(el) {

  var yPos = 0;

  while (el) {

    if (el.tagName == "BODY") {
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;

  }

  return yPos;

}

function findSmallerItem(array) {

  var min = Infinity;
  var SmallerItem = '';

  for(var item in array) {
    if(array[item] < min) {
      min = array[item];
      SmallerItem = item;
    }
  }

  return SmallerItem;

}

function showActiveItem() {

  var wrapper = document.getElementById('wrapper');
  var examples = document.getElementById('examples');
  var block = document.getElementsByClassName('heading-scroll')[0];

  var items = {
    'wrapper': Math.abs( getYPosition(wrapper) ),
    'examples': Math.abs( getYPosition(examples) )
  };

  var SmallerItem = findSmallerItem(items);
  var link = document.getElementById(SmallerItem + '-link');

  if ( link ) {

    var localLink = '';

    for (item in items) {
      if ( document.getElementById(item + '-link').classList.contains('active') ) {
        document.getElementById(item + '-link').classList.remove('active');
      }
    }

    link.classList.contains('active') ? link.classList.remove('active') : link.classList.add('active');
    block.className = 'heading-scroll ' + SmallerItem;

  }

}