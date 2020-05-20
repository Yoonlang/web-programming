const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS;
  }
  else{
    title.className = "";
  }
}
// 이전 클래스를 존중해주지 않아서 css 의 class를 설정했을 때,
// class가 바뀌면 이전 것이 사라진다. 해결책은? 2.7 7:03

function init(){
  title.addEventListener("click", handleClick);
}
init();