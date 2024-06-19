document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de normas cargada");
});

document.addEventListener("DOMContentLoaded", () => {
    // Efecto de desvanecimiento al cargar la página
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);

    // Efecto de desvanecimiento en los enlaces del menú
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'color 0.3s';
            link.style.color = '#bfe9ff';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffffff';
        });
    });

    // Animación en las zonas
    const zones = document.querySelectorAll('.zone');
    zones.forEach(zone => {
        zone.addEventListener('mouseover', () => {
            zone.style.transition = 'transform 0.3s, box-shadow 0.3s';
            zone.style.transform = 'scale(1.1)';
            zone.style.boxShadow = '0px 0px 15px 10px #ff6e7f';
        });
        zone.addEventListener('mouseout', () => {
            zone.style.transform = 'scale(1)';
            zone.style.boxShadow = '0px 0px 10px 5px #ff6e7f';
        });
    });

    // Botón flotante
    const floatingButton = document.createElement('button');
    floatingButton.textContent = 'Contact Us';
    floatingButton.style.position = 'fixed';
    floatingButton.style.bottom = '20px';
    floatingButton.style.right = '20px';
    floatingButton.style.padding = '10px 20px';
    floatingButton.style.backgroundColor = '#ff6e7f';
    floatingButton.style.color = '#ffffff';
    floatingButton.style.border = 'none';
    floatingButton.style.borderRadius = '10px';
    floatingButton.style.cursor = 'pointer';
    floatingButton.style.transition = 'background-color 0.3s';

    floatingButton.addEventListener('mouseover', () => {
        floatingButton.style.backgroundColor = '#bfe9ff';
    });

    floatingButton.addEventListener('mouseout', () => {
        floatingButton.style.backgroundColor = '#ff6e7f';
    });

    floatingButton.addEventListener('click', () => {
        alert('¡Gracias por contactarnos!');
    });

    document.body.appendChild(floatingButton);
});

document.addEventListener('DOMContentLoaded', function() {
    const imagenTemporal = document.getElementById('imagen-temporal');

    // Mostrar la imagen temporalmente al cargar la página
    imagenTemporal.style.display = 'block';

    // Ocultar la imagen después de 5 segundos
    setTimeout(function() {
        imagenTemporal.style.display = 'none';
    }, 2000); // 5000 milisegundos = 5 segundos
});
