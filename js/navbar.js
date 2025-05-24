$("#menu-toggle").click(function() {
  $("#mobile-menu").slideToggle("fast");
})

$(window).resize(function() {
  $("#mobile-menu").hide();
})

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const submenu = document.getElementById('submenu-servicios');
  const contactoBoton1 = document.getElementById('contacto-boton1');
  const contactoBoton2 = document.getElementById('contacto-boton2');
  const logo = document.getElementById('logo');

  if (window.scrollY > 0) {
    navbar.style.height = '40px';
    
    contactoBoton1.classList.remove('py-2');
    contactoBoton1.classList.add('py-0');

    contactoBoton2.classList.remove('py-2');
    contactoBoton2.classList.add('py-0');
    
    logo.classList.remove('h-14');
    logo.classList.add('h-10');
    logo.classList.add('opacity-0');
    submenu.classList.add('translate-y-[6px]');
    submenu.classList.remove('translate-y-4');


  } else {
    navbar.style.height = '60px';

    contactoBoton1.classList.remove('py-0');
    contactoBoton1.classList.add('py-2');

    contactoBoton2.classList.remove('py-0');
    contactoBoton2.classList.add('py-2');

    logo.classList.remove('h-10');
    logo.classList.add('h-14');
    logo.classList.remove('opacity-0'); 
    submenu.classList.remove('translate-y-[6px]');
    submenu.classList.add('translate-y-4');
  }
});



$("#toggle-servicios").click(function (e) {
  e.preventDefault();
  $("#submenu-servicios").slideToggle("fast");
});

$(document).click(function (e) {
  const target = $(e.target);
  if (!target.closest("#submenu-servicios").length && !target.closest("#toggle-servicios").length) {
    $("#submenu-servicios").slideUp("fast");
  }
});