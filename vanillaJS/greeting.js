const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const USER_LS = "currentUser";

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    

  }
  else{
    console.log(currnetUser);
  }

}

function init(){
  loadName();


}

init();