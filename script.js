let string = "";
let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText == "=") {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else {

      console.log(e.target.innerText)
      string = string + e.target.innerText;
      document.querySelector('input').value = string;
    }
  })
})