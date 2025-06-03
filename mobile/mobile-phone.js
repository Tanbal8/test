var element = document.getElementById("element");
var status_div = document.getElementById("status");
status_div.innerHTML = "Mobile";
element.ontouchmove = function(e) {
    element.style.top = e.touches[0].clientY.toFixed(2) + "px";
    element.style.left = e.touches[0].clientX.toFixed(2) + "px";
}
let startY = 0;

window.addEventListener("touchstart", function (e) {
  startY = e.touches[0].clientY;
}, { passive: false });

window.addEventListener("touchmove", function (e) {
  const currentY = e.touches[0].clientY;

  // اگر کاربر دارد از بالای صفحه به سمت پایین می‌کشد (scroll top = 0)
  if (window.scrollY === 0 && currentY > startY) {
    e.preventDefault(); // جلوگیری از pull-to-refresh
  }
}, { passive: false });