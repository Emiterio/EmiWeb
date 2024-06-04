document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.querySelector('.btnyes');
    const btnNo = document.querySelector('.btnno');

    // Función para mostrar la alerta al hacer clic en el botón "Encantada"
    btnYes.addEventListener('click', () => {
        alert('¡Sabía que dirías que SI! I love you');
    });

    // Función para mover el botón "Otro día" al pasar el mouse sobre él
    btnNo.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        btnNo.style.position = 'absolute';
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });
});

