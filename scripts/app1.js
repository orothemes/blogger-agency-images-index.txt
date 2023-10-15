// Adicione o elemento <style> ao elemento <head> do seu documento HTML
var styleElement = document.createElement("style");
styleElement.textContent = `
.mteffect{width:60px;height:60px;border-radius:99em;border:3px solid #6200ee;position:fixed;left:50%;transform:scale(0.5);display:none;z-index:999}.mteffect.active{display:block;animation:mteffect 0.4s ease-out forwards}
    @keyframes mteffect{from{transform:scale(0.2);opacity:1}to{transform:scale(1);opacity:0}}
`;
document.head.appendChild(styleElement);


// Adicione o script do jQuery ao head
var jqueryScript = document.createElement('script');
jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.head.appendChild(jqueryScript);


// Adicione o script do jQuery antes de </body>
jqueryScript.onload = function() {
  var dynamicScript = document.createElement('script');
  dynamicScript.innerHTML = `
  $("body").append($('<span class="mteffect"></span>')),$(document).on("click",function(n){var i=n.clientX,a=n.clientY;$(".mteffect").css({top:a-30,left:i-30}).addClass("active")}),$(".mteffect").on("animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd",function(){$(".mteffect").removeClass("active")});
  `;
document.body.appendChild(dynamicScript);
};
