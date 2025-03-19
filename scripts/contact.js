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
                throw new Error('Erro ao enviar o formulario');
              }
              return response.json();  
            })
            .then(data => {
              // Si todo salió bien
              statusMessage.textContent = "O formulario foi enviado com sucesso!";
              form.reset();  // Limpiar el formulario
            })
            .catch(error => {
              console.error('Erro:', error);
              statusMessage.textContent = "Houve um erro ao enviar o formulario. Tente novamente ou entre em contato pelo WhatsApp.";
            });
        }, 2000)
})