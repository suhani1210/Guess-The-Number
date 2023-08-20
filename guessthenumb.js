var gnum = document.getElementById("eguess");
var sbut = document.getElementById("bguess");
var disp = document.querySelector(".resp");
var guesses = document.querySelector(".guesses");
var reset = document.querySelector(".reset");
var score = document.querySelector(".score");
var y = Math.floor(Math.random()*100);
var guess = 0;
var s = 0;
var text = "";
function rest(){
    disp.style.animation = "reset 1s";
}
sbut.onclick = function(){
    
    if(gnum.value == y){
    guess++;
    text = "हाँ !, उत्तर है" + gnum.value.toString();
    disp.textContent = "Yess";
    guesses.textContent = guess.toString();
    if(guess<s)
    {
        s = guess
    score.textContent = s.toString();
}
    else if(s == 0)
    {
        s = guess
    score.textContent = s.toString();
}
    disp.style.animation = "spin1 2s 0s 1 backwards";
    const utter = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
}
    else if(gnum.value > y){
    guess++;
    console.log(y);
    disp.textContent = "Try lower!";
    guesses.textContent = guess.toString();
    disp.style.animation = "wrong 1s 0s backwards";
    const utter = new SpeechSynthesisUtterance();
    utter.lang = "hi-IN";
    utter.text = gnum.value.toString()+"से कम प्रयास करें";
    window.speechSynthesis.speak(utter);
}
    else{
    guess++;
    console.log(y);
    disp.textContent = "Try higher!";
    guesses.textContent = guess.toString();
    disp.style.animation = "wrong 1s 0s backwards";
    const utter = new SpeechSynthesisUtterance();
    utter.lang = "hi-IN";
    utter.text =gnum.value.toString() + "से अधिक प्रयास करें";
    window.speechSynthesis.speak(utter);
}
setTimeout(rest, 1001);
};
reset.onclick = function(){
    guess = 0;
    gnum.value = "";
    y = Math.floor(Math.random()*100);
    disp.textContent = "Start The Game";
    guesses.textContent = guess.toString();
    disp.style.animation = "reset 0.1s 0s 1 both";
}

