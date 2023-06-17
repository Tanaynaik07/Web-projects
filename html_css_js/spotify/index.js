let playbtn=document.getElementById("hope_card");

var soundSelected = document.getElementById("hope");
var playSound = function() {
    soundSelected.play();
};

playbtn.addEventListener('click', playSound);


