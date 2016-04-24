console.log("Javascript is alive!");
$(document).ready(function(){


var greeting = document.getElementById('greeting');
greeting.innerHTML = "Hello, World!";

var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].style.backgroundColor = 'yellow';
}

var image = document.createElement('img');
 $(image).addClass('picture');

image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
var greetDiv = document.getElementById('greeting')
greetDiv.appendChild(image);
//add img to the #greeting div


// // Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.
var li = document.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
//loop through and add event listener
 li[i].addEventListener('click', function(e){
   for (var i = 0; i < li.length; i++) {
     //loop through and remove className

    var lis = li[i].className = "";
  }
    var target = e.target;
    var selected = $(target).addClass('selected');
  })
}


     for (var i = 0; i < li.length; i++) {
       var picture = document.querySelector('img');
       li[i].addEventListener('click', function(e){
        picture.setAttribute("src", "./images/" + e.target.innerHTML + ".jpeg");
      //  populate picture in image when food item is clicked
  })
  };

var ghosting = document.getElementById('ghosting');
ghosting.addEventListener('mouseover', function(){
  this.remove(ghosting);

});

var resize = document.getElementById('resize');
resize.addEventListener('mouseover', function(){
  this.style.width = "400px";
});

document.getElementById('resize').addEventListener("mouseout", function(){
    this.style.width = "200px";
    });

var lis = document.getElementsByTagName('li');
document.getElementById('reset').addEventListener("click", function(){
        $(lis).removeClass("selected")
picture.setAttribute("src", "./images/" + 'panic.jpeg');
    });

window.addEventListener("keypress", function(e){
if(e.keyCode <= 57 && e.keyCode >= 48)
alert("I HATE NUMBERZZZ!");

  });

});







// // BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
