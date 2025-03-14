const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('statusMessage');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const data = {
        name: name,
        email: email,
        message: message
    }; 

    setTimeout(() => {
        statusMessage.textContent = 'Enviando...';
        fetch('https://jko-backend.vercel.app/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',  // Especificamos que los datos serán en formato JSON
            },
            body: JSON.stringify(data)  // Convertimos el objeto data a JSON
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error al enviar el formulario');
              }
              return response.json();  // Suposición de que el servidor devuelve JSON
            })
            .then(data => {
              // Si todo salió bien
              console.log('Respuesta del servidor:', data);
              statusMessage.textContent = "¡Formulario enviado con éxito!";
              form.reset();  // Limpiar el formulario
            })
            .catch(error => {
              // Si hubo un error
              console.error('Error:', error);
              statusMessage.textContent = "Houve um erro ao enviar o formulario. Tente novamente ou entre em contato pelo WhatsApp.";
            });
        }, 2000)
})