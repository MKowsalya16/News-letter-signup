const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});
const emailInput = document.getElementById('email');
const errorDiv = document.querySelector('.error');

emailInput.addEventListener('invalid', function(event) {
  event.preventDefault();
  emailInput.classList.add('error'); 
  emailInput.style.borderColor = '2px solid red'; 
  errorDiv.style.display = 'block';
  

  
});

emailInput.addEventListener('input', function() {
  emailInput.classList.remove('error');
  emailInput.style.borderColor = 'hsl(231, 7%, 60%)';
  errorDiv.style.display = 'none';
});

