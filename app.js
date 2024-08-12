
let gameSeq=[];
let userSeq=[];

  let started =false;
  let level=0;
  let btns=["green","red","yellow","blue"];
  let h2=document.querySelector("h2");

  document.addEventListener("keypress",function(){
     if(started == false){

       started=true; 
       levelUp();
     }
  });

 
  function gameFlash(btn){ 
    btn.classList.add("flash");
    setTimeout( function(){
       btn.classList.remove("flash");
    },250);
  }

  function userFlash(btn){ 
    btn.classList.add("userflash");
    setTimeout( function(){
       btn.classList.remove("userflash");
    },250);
  }


 function levelUp(){
  userSeq=[];
   level++; 
   h2.innerText= `level ${level}`;

   let randIdx= Math.floor(Math.random() * 3);
   let randColor= btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
  
   gameFlash(randBtn);
 }

function checkAns(idx){
  
    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length)
        {
          setTimeout( levelUp,1000);
        }
    }else{
        h2.innerHTML= ` Game over..!  Your score was : <b> ${level} </b> <br>Press any key to start. `;
       
        reset();  
        
         // Create an image element
    let gameOverImage = document.createElement("img");
    
    // Set the source of the image
    gameOverImage.src = "path/to/your/image.jpg"; // Replace with the actual path to your image
    
    // Optionally set other attributes like alt, width, height, etc.
    gameOverImage.alt = "Game Over";
    gameOverImage.width = "100vh"; // Set the desired width
    gameOverImage.height = "100%"; // Set the desired height

    // Append the image to the body
    document.body.appendChild(gameOverImage);
       
        // document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
          document.querySelector("body").style.backgroundColor="white";
        },150);      
    }

}

 function btnPress(){
   
    let btn =this; 
    console.log(this);
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
 }

 let allBtns= document.querySelectorAll(".btn");

 for(btn of allBtns)
 {
    btn.addEventListener("click", btnPress);
 }

  function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;
  }
