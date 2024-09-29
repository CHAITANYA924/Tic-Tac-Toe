let reset = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let winBox = document.querySelector(".winBox");
let winText = document.querySelector(".winText");
let newGame = document.querySelector(".newGame");

let count =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let textO = true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(textO === true){
            box.innerText = "O"
            box.style.color = "blue"
            textO = false;
          }else{
            textO === false;
            box.innerText = "X"
            box.style.color = "red"
            textO = true;
          }
          winnerDec()
          
    });
});


let winnerDec=()=>{
 count.forEach((item)=>{
   let value1 =boxes[item[0]].innerText;
   let value2 =boxes[item[1]].innerText;
   let value3 =boxes[item[2]].innerText;
   if(value1 != "" && value2 != "" &&value3 != ""){
    if (value1 === value2 && value2 === value3){
        console.log("con")
        CongOnScreen(value1);
        disabled();
    }
   
   }
   
 })
}
let CongOnScreen=(congrats)=>{
    winText.innerText = `congratulation u own the match ${congrats}`;
    winBox.classList.remove("hide")
   
}


let disabled=()=>{
    boxes.forEach((data)=>{
        data.disabled = true
    })
}

let enable=()=>{
    boxes.forEach((data)=>{
        textO === true;
        data.innerText ="";
        winBox.classList.add("hide");
        data.disabled =false;
    })
}


reset.addEventListener("click", enable);
newGame.addEventListener("click", enable)