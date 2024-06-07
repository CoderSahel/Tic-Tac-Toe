let modeBtn=document.querySelector(".mode");
let button=document.querySelectorAll(".btn");
let body = document.querySelector("body");
let boxdiv = document.querySelectorAll(".box");
let result = document.querySelector(".res");
let reset = document.querySelector(".restart");
let newGame= document.querySelector(".new");
let mode="light";
let turn="X";
let finished=false;
let counter=0;

//dark mode functionality
modeBtn.addEventListener("click",()=>{
    if(mode==="dark"){
        mode="light";
        body.style.backgroundColor="white";
        body.style.color="black";
        for(let ele of button)
            {
                ele.classList.remove("btn-dark");
                ele.classList.add("btn-light");
            }
        for(let ele of boxdiv)
            {
                ele.classList.remove("dark-box");
                ele.classList.add("light-box");
            }
        modeBtn.innerHTML="Switch to dark mode";

    }
    else{
        mode="dark";
        body.style.backgroundColor="black";
        body.style.color="white";
        for(let ele of button)
            {
                ele.classList.remove("btn-light");
                ele.classList.add("btn-dark");
            }
        for(let ele of boxdiv)
            {
                ele.classList.remove("light-box");
                ele.classList.add("dark-box");
            }
        modeBtn.innerHTML="Switch to light mode";
    }
    console.log("mode button clicked");
});

//playing functionality
boxdiv.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(box.innerHTML !== "X" && box.innerHTML !== "O" && finished == false)
        {
            box.innerHTML=turn;
            counter++;
            if(turn==="X"){
                turn="O";
            }
            else{
                turn="X";
            }
        }
        checkResult();
    });
});

//check winner functionality
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const checkResult= () =>{
    if (counter === 9){
        result.innerHTML="Its a draw";
        result.style.visibility="visible";
        reset.style.visibility="visible";
        finished=true;

    }
    for (let pat of winningPattern ){
        box1=boxdiv[pat[0]];
        box2=boxdiv[pat[1]];
        box3=boxdiv[pat[2]];
        if(box1.innerHTML === box2.innerHTML && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML)
        {
            if(box1.innerHTML === "X"){
                result.innerHTML="First player is winner";
                result.style.visibility="visible";
                reset.style.visibility="visible";
                finished=true;
            }
            if(box1.innerHTML === "O"){
                result.innerHTML="Second player is winner";
                result.style.visibility="visible";
                reset.style.visibility="visible";
                finished=true;
            }
            
        }
    }
}

//reset functionality
newGame.addEventListener("click",()=>{
    resetGame();
});
reset.addEventListener("click",()=>{
    resetGame();
});

const resetGame=()=>{
    boxdiv.forEach((box)=>{
        box.innerHTML="";
    });
    turn="X";
    finished=false;
    counter=0;
    result.style.visibility="hidden";
    reset.style.visibility="hidden";
}