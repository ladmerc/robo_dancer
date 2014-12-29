// button click
  $(".flash").click(function() {
    $(".brain").toggleClass('laser');
  });


var toggle = true;
// function to generate random number for random bg color
function createRandomBackground() {

  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  $("body").css("background", "rgba(" + red + ',' + green + ',' + blue + ',' + 1 + ')');
  
   //Another Way to achieve similar result
      // var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
      //  $("body").css("background", randomRGBA);

  };

function timeBackgroundChange() {
 timer = setInterval(createRandomBackground, 500);
}

function pauseBackgroundChange() {
  clearInterval(timer);
}

timeBackgroundChange();

$(".color").click(function() {
  toggle = !toggle;
  console.log(toggle);
  if(toggle){
    timeBackgroundChange();
  }
  else  {
    pauseBackgroundChange();
  }
});

$(".dance").click(function() {
  $("#dancer").toggle("slow");
});