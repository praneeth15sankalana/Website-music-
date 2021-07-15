function find(){
    clearTimeout(cTimer);
    findResult();
}
// marks counting
function findResult(){
    
    var Qone = document.Quiz.Qone.value;
    var Qtwo = document.Quiz.Qtwo.value;
    var Qthree = document.Quiz.Qthree.value;
    var Qfour = document.Quiz.Qfour.value;
    var Qfive = document.Quiz.Qfive.value;
    var Qsix = document.Quiz.Qsix.value;
    var Qseven = document.Quiz.Qseven.value;
    var Qeight = document.Quiz.Qeight.value;
    var Qnine = document.Quiz.Qnine.value;
    var Qten = document.Quiz.Qten.value;
    var points = 0;
    var right = 0;
    
    if (Qone == "1"){
        right++;
        points = points + 2;
    }else{
        points=points-1;
    }
    
    if (Qtwo == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qthree == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qfour == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qfive == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qsix == "1"){
        right++;
        points = points + 2;
    }else{
        points=points-1;
    }
    
    if (Qseven == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qeight == "1"){
        right++;
        points = points + 2;
    }else{
       points=points-1;
    }
    
    if (Qnine == "1"){
        right++;
        points = points + 2;
    }else{
        points=points-1;
    }
    
    if (Qten == "1"){
        right++;
        points = points + 2;
    }else{
        points=points-1;
    }


    
    var finished = ["Congratulations..! Great job","Not bad..!","You can do better than this.. Try again.."];
    console.log(finished);
    var range;
    
    if (right < 2){
        range = 2;
    }
    
    if (right >= 2 && right < 10){
        range = 1;
    }
    
    if (right >= 10){
        range = 0;
    }

    document.getElementById("quizForm").style.display = "none"; 


    document.getElementById("finished").style.visibility = "visible";
    document.getElementById("display").innerHTML = finished[range];
    document.getElementById("got").innerHTML = "You marked " + right + " correct answers out of 10 questions.";
    document.getElementById("collect").innerHTML = "you took " + points + " points out of 20";
    
}


// time setting
var timeSec = 60;
function timeOut(){
    var timeMin = Math.round((timeSec - 30) / 60);
    var remSec = timeSec % 60;
    
    if(remSec < 10){
        remSec = "0" + remSec;
    }
    document.getElementById('time').innerHTML = timeMin + ":" + remSec;
    
    if(timeSec == 0){
        clearInterval(cTimer);
        document.getElementById('time').innerHTML = "Expired";
        findResult();
    }else{
        timeSec --;
    }
}
var cTimer = setInterval('timeOut()',1000);

function myFunction1() {
    document.getElementById("font").style.fontSize = "0.8em";
}

function myFunction2() {
    document.getElementById("font").style.fontSize = "1.1em";
}

function myFunction3() {
    document.getElementById("font").style.fontSize = "1.25em";
}

function myFunction4() {
    document.getElementById("font").style.fontSize = "1.4em";
}

function myFunction5() {
    document.getElementById("font").style.fontSize = "1.9em";
}