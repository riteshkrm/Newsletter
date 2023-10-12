document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input");
    const errorText = document.querySelector(".error-text");
    const thanks = document.querySelector(".thanks");
    const emailValue = document.querySelector(".email-value");
    const dismissButton = document.querySelector(".dismiss");
    const hero = document.querySelector('.hero-section')


    function validateEmail(email) {
      const emailFormat = /^\S+@\S+\.\S+$/;
      return emailFormat.test(email);
    }
  
   
    input.addEventListener("input", () => {
      input.classList.remove("error-input");
      errorText.classList.add("hidden");
    });
  
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (!validateEmail(input.value)) {
        input.classList.add("error-input");
        errorText.classList.remove("hidden");
        errorText.innerHTML = "Valid email required";
        
      } else {
        hero.classList.add('hidden')
        form.classList.add("hidden");
        thanks.classList.remove("hidden");
        emailValue.textContent = input.value;
        form.reset();
      }
    });
  
   
    dismissButton.addEventListener("click", function () {
      form.classList.remove("hidden");
      thanks.classList.add("hidden");
      hero.classList.remove('hidden')
    });
  });
  
