var link = document.getElementById("icon_link");
var copyButton = document.getElementById("copyButton");
var linkIcon = document.querySelectorAll("a");

function hoverEffect(e) {
  link.innerHTML = e.href;
}

function copyText() {
  var text = link.innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

copyButton.addEventListener("click", copyText);

for (var i = 0; i < linkIcon.length; i++) {
  linkIcon[i].onmouseover = function () {
    hoverEffect(this);
  };
}
