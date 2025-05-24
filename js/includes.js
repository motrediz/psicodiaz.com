function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
        .then(res => res.text())
        .then(data => {
          el.innerHTML = data;

          // Esperamos un poco para asegurarnos que el DOM del header está en el documento
          if (file.includes('header.html')) {
            setTimeout(() => {
              const script = document.createElement('script');
              script.src = '/js/navbar.js';
              document.body.appendChild(script);
            }, 100); // puedes ajustar el tiempo si hace falta
          }
        });
    });
  }

document.addEventListener("DOMContentLoaded", includeHTML);