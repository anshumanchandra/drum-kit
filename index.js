audioFiles = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
let drums = document.querySelectorAll(".drum");
for (let i=0; i<drums.length; i++){
    drums[i].addEventListener("click",
     function (){
         var audio = new Audio("sounds/"+audioFiles[i]);
         audio.play();
         runAnimation(drums[i]);
        });
}
window.addEventListener("keydown", myEventHandler);
function myEventHandler(event){
    switch (event.code){
        case "KeyW":
            drums[0].click();
            runAnimation(drums[0]);
            break;
        case "KeyA":
            drums[1].click();
            runAnimation(drums[1]);
            break;
        case "KeyS":
            drums[2].click();
            runAnimation(drums[2]);
            break;
        case "KeyD":
            drums[3].click();
            runAnimation(drums[3]);
            break;
        case "KeyJ":
            drums[4].click();
            runAnimation(drums[4]);
            break;
        case "KeyK":
            drums[5].click();
            runAnimation(drums[5]);
            break;
        case "KeyL":
            drums[6].click();
            runAnimation(drums[6]);
            break;
    }
}

function runAnimation(hue){
    hue.classList.add("pressed");
    setTimeout(function() {
        hue.classList.remove("pressed");
    }, 100);
}

let button = document.querySelectorAll(".btn");
button.forEach(btn => {
    btn.addEventListener("click", function(e){
        console.log("clicked");
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        btn.appendChild(ripples);
    })
})
