var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener(("click"), function(){
    makeSound(this.innerHTML);
    buttonAnimation (this.innerHTML);
    })
};

//Function below is a callback waiting for "keydown to be equal to"
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
     switch (key){
    case "w":
        var boy=new Audio("sounds/boy-next-door.mp3");
        boy.play();
        break;
    case "a":
        var fuckyou=new Audio("sounds/fuckyou_N4ocxxs.mp3"); 
        fuckyou.play();
        break;
    case "s":
        var orgasm=new Audio("sounds/orgasm-6.mp3");
        orgasm.play();
        break;
    case "d":
        var spank=new Audio("sounds/spank-3.mp3");
        spank.play();
        break;
    case "j":
        var suction=new Audio("sounds/suction_lXUaIEQ.mp3");
        suction.play();
        break;
    case "k":
        var thats=new Audio("sounds/thats-amazing_i8ctuCt.mp3");
        thats.play();
        break;
    case "l":
        var woo=new Audio("sounds/woo_htcxajK.mp3");
        woo.play();
        break;
    }
}
function buttonAnimation (currentKey) {
 var activeButton = document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout (function(){activeButton.classList.remove("pressed");},100)
}
