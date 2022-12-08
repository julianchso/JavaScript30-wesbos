const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) => {
  div.addEventListener("click", logText, { useCapture: false, once: true });
});


// testing