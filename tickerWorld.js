function Carrousel(){
var myIndex = 2;
displaymel();

function displaymel() {
  var i;
  var x = document.getElementsByClassName("mel-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length){myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(displaymel, 1000);
}

var index = 2;
displayber();

function displayber() {
  var i;
  var x = document.getElementsByClassName("ber-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;
  if(index > x.length){index = 1}
  x[index-1].style.display = "block";
  setTimeout(displayber,1000);
}

};
Carrousel();


function Melbourne(){
var frameId;
var links = $('.Link');
var box = $('.links-melbourne');
console.log(box);


var distance = 0;

function newAnimation() {
  links.css({left: distance + 'px'});
  var width = links.eq(0).outerWidth();
  if (links.eq(0).position().left <-width) {

    box.append(links[0]);
    links = $('.Link');
    distance += width;
    links.css({left: distance + 'px'});
  }

  distance -=0.5;

  frameId = requestAnimationFrame(newAnimation);
}

frameId = requestAnimationFrame(newAnimation);

$('.Link').on('mouseenter',function(){
  cancelAnimationFrame(frameId);
});
$('.Link').on('mouseleave',function(){
  frameId = requestAnimationFrame(newAnimation);
});

};

Melbourne();


function Berlin(){
var frame;
var link2 = $('.Link2');
var box2= $('.links-berlin');



var distance2 = 0;

function animationBer() {
  link2.css({left: distance2 + 'px'});
  var width = link2.eq(0).outerWidth();
  if (link2.eq(0).position().left <-width) {

    box2.append(link2[0]);
    link2 = $('.Link2');
    distance2 += width;
    link2.css({left: distance2 + 'px'});
  }

  distance2 -=0.5;

  frame = requestAnimationFrame(animationBer);
}

frame = requestAnimationFrame(animationBer);

$('.Link2').on('mouseenter',function(){
  cancelAnimationFrame(frame);
});
$('.Link2').on('mouseleave',function(){
  frame = requestAnimationFrame(animationBer);
});
};
Berlin();
