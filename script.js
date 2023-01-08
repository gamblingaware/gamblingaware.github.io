const a = document.getElementById("1");
const b = document.getElementById("2");
const c = document.getElementById("3");

var counter = 0;
var i = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter == 1) {
    a.classList.add("visually-hidden");
    b.classList.remove("visually-hidden");
    c.classList.add("visually-hidden");
  } else if (counter == 2) {
    a.classList.add("visually-hidden");
    b.classList.add("visually-hidden");
    c.classList.remove("visually-hidden");
  } else {
    a.classList.remove("visually-hidden");
    b.classList.add("visually-hidden");
    c.classList.add("visually-hidden");
    counter = 0;
  }
}, 3000);
