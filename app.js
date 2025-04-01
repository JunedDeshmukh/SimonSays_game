gameSeq=[];
userSeq=[];

let gameStarted= false;
let level = 0;
let btns= ["red", "yellow","green","purple"];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
// let btn= document.querySelectorAll(".btn");


document.addEventListener("keypress", function(){
    if(gameStarted == false){
        console.log("game started");
        gameStarted= true;

        levelup();
    }
})

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);

}

function levelup(){
    level++;
    userSeq=[];
    h2.innerText= `level ${level}`;

    let ranIdx= Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let randBtn= document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function buttonPress(){
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx] ){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelup ,1000);
        }
    }else{
        h2.innerHTML= `Game over!<b>your score was ${level}<b><br> press any key to restart`;
       
        h3.innerText= `Current Score = ${level}`;
        // checkhighScore();
        reset();
        
    }
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    gameStarted=false;
    
    
}


