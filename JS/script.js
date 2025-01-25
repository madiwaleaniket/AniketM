let typeWriter = selector => {
let a = document.querySelector(selector)
let text = a.innerHTML
  
    ;(function _type(i = 0) {
      if (i === text.length) return
  
      a.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
      setTimeout(() => _type(i + 1), 100)
    })()
  }
  
  typeWriter(".typeWriter")
  
  //nav bar js code

  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-70
        }, 900);
        return false;
      }
    }
  });


   

