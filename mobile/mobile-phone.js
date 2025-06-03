var element = document.getElementById("element");
var status_div = document.getElementById("status");
status_div.innerHTML = "Mobile";
element.ontouchmove = function(e) {
    element.style.top = e.touches[0].clientY.toFixed(2) + "px";
    element.style.left = e.touches[0].clientX.toFixed(2) + "px";
}

let startY = 0;

window.addEventListener('touchstart', function (e) {
  if (e.touches.length !== 1) return; // فقط یک انگشت
  startY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', function (e) {
  const currentY = e.touches[0].clientY;
  const isPullingDown = currentY > startY;

  // اگر در بالای صفحه هستیم و کاربر دارد به پایین می‌کشد
  if (window.scrollY === 0 && isPullingDown&& e.cancelable) {
    e.preventDefault(); // جلوگیری از refresh
  }
}, { passive: false });