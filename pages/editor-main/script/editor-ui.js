function showMenu(element, target, event) {
  Array.from(document.getElementsByClassName('menu')).forEach(x => {
    x.style.display = "none";
  });
  Array.from(document.getElementsByClassName('menuroot')).forEach(x => {
    x.style.color = null;
  });
  document.getElementById(`${target}_menu`).style.display = null;
  element.style.color = "#F39800";
  event.stopPropagation();
}
function hideMenus() {
  Array.from(document.getElementsByClassName('menu')).forEach(x => {
    x.style.display = "none";
  });
  Array.from(document.getElementsByClassName('menuroot')).forEach(x => {
    x.style.color = null;
  });
  Array.from(document.getElementsByClassName("dropdown-content")).forEach(function(x) {
    x.style.display = "none";
  });
}
var webview = document.querySelector("webview");
function zooming(scale, tags) {
  for (let i = 0; i < tags.length; i++) {
    tags[i].paper.setScale(scale / 100);
    tags[i].paper.zoom();
  }
  document.getElementById("rangevalue").innerHTML = scale + "%";
}
function dragMoveListener(event) {
  console.log("dragMoveListener");
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
  // translate the element
  target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";
  // update the position attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
function changetab(element, event) {
  event.stopPropagation();
  var tabstrip = document.getElementById("tabstrip");
  var p = tabstrip.children[0];
  do {
    if (p == element) p.classList.add("tabediting");
    else p.classList.remove("tabediting");
  } while ((p = p.nextElementSibling));
  webviews = document.querySelectorAll("webview");
  webviews.forEach(function(v) {
    v.classList.add("inactivetab");
  });
  webview = document.getElementById(element.id.substring(6));
  webview.classList.remove("inactivetab");
  webview.setZoomFactor(document.getElementById("rangeinput").value / 100);
}
interact(".dialog").draggable({
  // enable inertial throwing
  inertia: false,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "parent",
    endOnly: true,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  // enable autoScroll
  autoScroll: true,
  onstart: function(event) {},
  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function(event) {}
});
function dragMoveListener(event) {
  console.log("dragMoveListener");
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
  // translate the element
  target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";
  // update the position attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

function setwin(flag){
if (flag=="all") { //以螢幕大小縮放範圍
resizeTo(screen.availWidth,screen.availHeight);
moveTo(0,0);
} else { //預設大小
resizeTo(930,720);
moveTo(50,10);
}
}

const remote = require('electron').remote;

function Minimize() 
{
var window = remote.getCurrentWindow();
    window.minimize(); 
}



function setting() {
    document.getElementById("myModal").style.display = "block";
}

function cancel_setting() {
     document.getElementById("myModal").style.display = "none";
}


function addclose(){
		var node = document.createElement('div');
		node.setAttribute("style",`
			height:20px;
			width:20px;
            line-height: 15px;
			position:absolute;
			right: 5px;
            top: 2px;
            color:white;
            font-size:15px;
		`);
        node.setAttribute("class","close")
    var textnode = document.createTextNode("x");
    node.appendChild(textnode);
	document.querySelector(".page").appendChild(node);
}
