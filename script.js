document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var edad = document.getElementById("edad").value;
    var videoContainer = document.getElementById("videoContainer");

    if (edad < 18) {
        // Si es un niño, mostrar un video para niños
        videoContainer.innerHTML = '<p>Bienvenido al maravilloso mundo de Disney, disfruta esta gran aventura :D </p><br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/rhE16Je5oXc?si=LepQRpgb3F8bQ1Qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    } else {
        // Si es un adulto, mostrar un video de historia
        videoContainer.innerHTML = '<p>Hola de nuevo pequeño gigante, recordemos un poco nuestra niñez con este vídeo</p><br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/kIbqzo8Ic3U?si=v1jnw3DQGkC6616C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    }
});
