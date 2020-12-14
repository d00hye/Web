var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var parrotX = new Array(0 ,0, 0, 100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400);
var parrotY = new Array(100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300);

var loc = {};
var ran = 0;
var mouseLoc = {};
var parrotCatch = false;
var D = 0;
var PF = 50;
var score = 0;
var times = 0;

var background = new Image();
background.src = "images/background.png";

var doorimg = new Image();
doorimg.src = "images/door.png";

var parrotimg = new Image();
parrotimg.src = "images/parrot.png";

var mouseimg = new Image();
mouseimg.src = "images/mouse.png";

var hitSound = new Audio('audio/hit.mp3');

function getMouseLoc(event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
    
    return {
        x: mouseX,
        y: mouseY
    };
}

function showarlet(){
    if(score>=15){
        alert("축하합니다 앵무새를 찾았습니다!");
    }else {
        alert("실패했습니다 다시 찾아보세요!")
    }
    $("#canvas").hide();
    
}

$(document).mousemove(function(event) {
    mouseLoc = getMouseLoc(event);

});

var reset = function () {
    ran = Math.floor(Math.random() * 15);
    loc.x = parrotX[ran];
    loc.y = parrotY[ran];
};

var init = function () {
    ctx.drawImage(background, 0, 0);
    for (var i = 0; i <= parrotX.length; i++) {
        ctx.drawImage(doorimg, parrotX[i], parrotY[i]);
    }
    
    if (parrotCatch) {
        ctx.globalAlpha = 0;
    } 
    ctx.drawImage(parrotimg, parrotX[ran], parrotY[ran]);  
    ctx.globalAlpha = 1;
    
    if (parrotCatch) {
        ctx.drawImage(mouseimg, 60, 0, 60, 60, mouseLoc.x - 30, mouseLoc.y - 30, 60, 60); 
        if (D > PF) {
            D = 0;
            parrotCatch = false;
        } else {
            D++;
        }
    } else {
        ctx.drawImage(mouseimg, 0, 0, 60, 60, mouseLoc.x - 30, mouseLoc.y - 30, 60, 60);  
    }  

    ctx.font = "bold 24px Arial, sans-serif";
    ctx.fillStyle = "rgb(249, 253, 255)";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("SCORE: " + score, canvas.width / 2, 10);
    ctx.strokeText("SCORE: " + score, canvas.width / 2, 10);
};   

var time = function(){
    times++;
    ctx.font = "bold 24px Arial, sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText('TIME: ' + Math.round(times / 127), canvas.width - 10, 10); 

}

var isCatch = function (x, y) {
    return x <= (loc.x + 60)
    && x >= loc.x
    && y <= (loc.y + 60)
    && y >= loc.y;
};

$(document).mousedown(function(event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
            
    if (isCatch(mouseX, mouseY) && parrotCatch === false) {
        parrotCatch = true;
    	reset();
    	init();
        hitSound.play();
        ++score;
    }
});

$('.sound').click(function() {
    var $this = $(this);

    if ($this.hasClass('sound-on')) {
        $this.removeClass('sound-on').addClass('sound-off');
        $(".myAudio").trigger('pause');
    } else {
        $this.removeClass('sound-off').addClass('sound-on');
        $(".myAudio").trigger('play');
    }
});

$("#startbtn").click(function () {
    $("#startPage").hide();
    $("#canvas").show();
    reset();
    main();
    $(".sound").css('display', "block");
    $(".myAudio").trigger('play');
    setTimeout(showarlet, 20000);
    
});

var main = function () {   
    init();
    time();
    requestAnimationFrame(main);
};

reset();
main();
