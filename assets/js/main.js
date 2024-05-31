// Initialization for ES Users
// email.js
(function(){
    emailjs.init("user_youruserID"); // Substitua "user_youruserID" pelo seu User ID do EmailJS

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };

        let sendCopy = this.sendCopy.checked;

        emailjs.send("service_yourServiceID", "template_yourTemplateID", formData)
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response);

                if (sendCopy) {
                    emailjs.send("service_yourServiceID", "template_yourTemplateID", formData);
                    console.log('Cópia enviada para o cliente!');
                }
            }, function(error) {
                console.error('Erro ao enviar e-mail:', error);
            });
    });
})();
