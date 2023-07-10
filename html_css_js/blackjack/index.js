let cards=document.querySelector("#cards");
    let sum_area=document.querySelector('#sum')
    let play=document.querySelector(".play")
    let message=document.querySelector("#message");
    play.addEventListener("click",start_game);
    let btn_area=document.querySelector("#button_area");


    function start_game(){
      let num1=1+Math.floor(Math.random()*14);
    let num2=1+Math.floor(Math.random()*14);
      cards.innerHTML="";
      sum_area.innerHTML="";
      cards.textContent="Cards: "+ num1+" and "+num2;
      let sum=num1+num2;
      sum_area.innerHTML='Sum:' + " "+sum ; 
      if(sum<21){
        play.innerHTML="New Cards";
      }
      else if(sum===21){
        message.innerHTML="You have Hit the Blackjack!! 🥳";
        btn_area.innerHTML="";
        play.removeEventListener("click",start_game);
      }
      else{
        message.innerHTML="You are done 🥺"
        btn_area.innerHTML="";
        play.removeEventListener("click",start_game);
      }
    }