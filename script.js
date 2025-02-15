
let options = document.querySelectorAll(".option");
let display=document.querySelector(".title");
let reset =document.querySelector(".reset");
let player_total_score=document.querySelector(".player_score");
let bot_total_score=document.querySelector(".bot_score");
let bot_score=0;
let user_score=0;
let exit_button=document.querySelector(".exit_game")
const resetBorders = () => {
    options.forEach((opt) => {
        opt.style.border = "none";
    });
    display.innerText="Let's Play";
    display.style.backgroundColor="rgb(120, 120, 176)";
    display.style.color="white";
};
const disable = (flag) => {
    options.forEach((opt) => {
      
        opt.disabled = flag;
        if (!flag) {
           
            opt.style.border = "none";  // Reset borders on enable
        }
    });
};
const check_winner=(user_choose,bot_choose)=>{
    let user_choose_name;
    let bot_choose_name;
    if(user_choose==0) user_choose_name="Rock";
    else if(user_choose==1) user_choose_name="Paper";
    else{
        user_choose_name="Scissor";
    }
    if(bot_choose==0) bot_choose_name="Rock";
    else if(bot_choose==1) bot_choose_name="Paper";
    else{
        bot_choose_name="Scissor";
    }



    if(user_choose!=bot_choose){
    if((user_choose==0&&bot_choose==2)||(user_choose==1&&bot_choose==0)||(user_choose==2&&bot_choose==1)){
        user_score+=1;
        player_total_score.innerText=user_score;
        display.innerText=`You won! ${user_choose_name} beats ${bot_choose_name} `;
        display.style.backgroundColor="green";
    }
    else{
       bot_score+=1;
        bot_total_score.innerText=bot_score;
        display.innerText=`You lost! ${bot_choose_name} beats ${user_choose_name}`;
        display.style.backgroundColor="red";
    }}
    else{
        display.innerText=`Match Draw ${user_choose_name}  equals ${bot_choose_name}`;
        display.style.color="black";
        display.style.backgroundColor="white";
       
    }


}

options.forEach((opt)=>{
    opt.addEventListener('click',()=>{
        resetBorders(); 
        opt.style.border="10px solid green";
        let selected = Array.from(opt.parentNode.children).indexOf(opt)-1;
      
        let randomIndex = Math.floor(Math.random() * options.length);
        console.log("selection by user::: ",selected);
        console.log("selection by bot",randomIndex);
        
        if(selected!==randomIndex){
           options[randomIndex].style.border="10px solid red"; 
        }
        else{
        
            options[randomIndex].style.borderLeft="10px solid red";
            options[randomIndex].style.borderTop="10px solid red";
            options[randomIndex].style.borderBottom="10px solid green";
            options[randomIndex].style.borderRight="10px solid green";
        }
        
        check_winner(selected,randomIndex);
        setTimeout(resetBorders, 2000);
    })
})

reset.addEventListener("click",()=>{
    display.innerText="Let's Play";
    bot_score=0;
    user_Score=0;
    player_total_score.innerText=0;
    bot_total_score.innerText=0;
    resetBorders(); 
})


exit_button.addEventListener("click",()=>{

    window.location.href = "second.html";
})