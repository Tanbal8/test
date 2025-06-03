var element = document.getElementById("element");
var status = document.getElementById("status");
console.log(element);
window.ontouchmove = function(e) {
    console.log(e);
    status.innerHTML = e;
}