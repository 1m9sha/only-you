let msg = "Will you be my Valentine? ❤️";
let i = 0;
function type() {
  if (i < msg.length) {
    document.getElementById("text").innerHTML += msg.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

document.getElementById("no").onmouseover = function () {
  this.style.position = "absolute";
  this.style.left = Math.random() * 80 + "%";
  this.style.top = Math.random() * 80 + "%";
}

function yes() {
  alert("YAY!!! 💖💖💖");
}