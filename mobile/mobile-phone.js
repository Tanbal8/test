var element = document.getElementById("element");
var status_div = document.getElementById("status");
status_div.innerHTML = "Mobile";
element.ontouchmove = function(e) {
    element.style.top = e.touches[0].clientY.toFixed(2) + "px";
    element.style.left = e.touches[0].clientX.toFixed(2) + "px";
}