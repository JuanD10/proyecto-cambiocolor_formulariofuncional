(function () {
    emailjs.init("ycRHKpdBFqVi1gWHF"); 
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_uxb110o", "template_ymfiahm", this)
      .then(function () {
        document.getElementById("form-status").classList.remove("hidden");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Ocurrió un error al enviar el mensaje. Intenta más tarde.");
        console.error(error);
      });
  });
  