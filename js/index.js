
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function(){
  $('#mainSlick').slick({
    rtl: true
  });
});



var item = document.getElementsByClassName('accordionItem');
var heading = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < item.length; i++) {
        item[i].className = 'accordionItem close';
    }
    console.log(item.length)
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}