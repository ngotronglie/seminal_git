const listimg = document.getElementsByClassName("img");
console.log(listimg);
let index = 0;
listimg[index].style.display = "block";
function pre() {
  listimg[index].style.display = "none";
  index--;
  if (index < 0) {
    index = listimg.length - 1;
  }
  listimg[index].style.display = "block";
}
function next() {
  listimg[index].style.display = "none";
  index++;
  if (index > listimg.length - 1) {
    index = 0;
  }
  listimg[index].style.display = "block";
}
var a = setInterval(next, 200);
