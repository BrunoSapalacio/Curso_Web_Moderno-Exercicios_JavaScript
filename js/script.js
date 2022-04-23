function loading() {
  this.load = document.querySelector("#load");
  this.load.style.display = "none";
}

let btn = document.querySelector("#top");
window.onscroll = function () {
  scrollTopo();
};

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function scrollTopo() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
