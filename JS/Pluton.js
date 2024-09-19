// بسم الله الرحمن الرحيم
let allList = document.querySelectorAll("ul li a");

allList.forEach(function (ele) {
  ele.onclick = function () {
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
