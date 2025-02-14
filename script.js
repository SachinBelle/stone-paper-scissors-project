
let options = document.querySelectorAll(".option");
let display=document.querySelector(".title");
let reset =document.querySelector(".reset");
let player_total_score=document.querySelector(".player_score");
let bot_total_score=document.querySelector(".bot_score");
let bot_score=0;
let user_score=0;

const resetBorders = () => {
    options.forEach((opt) => {
        opt.style.border = "none";
    });
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
    if(user_choose!=bot_choose){
    if((user_choose==0&&bot_choose==2)||(user_choose==1&&bot_choose==0)||(user_choose==2&&bot_choose==1)){
        user_score+=1;
        player_total_score.innerText=user_score;
        display.innerText="Player win";
    }
    else{
       bot_score+=1;
        bot_total_score.innerText=bot_score;
        display.innerText="Bot win";
    }}
    else{
        display.innerText="Draw";
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


