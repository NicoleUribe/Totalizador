import FizzBuzz from "./Fizz.Buzz.js";
 
const numero_input = document.querySelector("#numero");
const form = document.querySelector("#fb-form");
const div = document.qquerySelector("#resultado-div")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const numero_fb = Number.parseInt(numero_input.value);
  const fb = new FizzBuzz();

 div.innerHTML = "<p>" + fb.generar(numero_fb) + "</p>";
});
