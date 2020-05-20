const title = document.querySelector("#title");
title.innerHTML = "Hi from JS";
console.log(title);
title.style.color = "#ffd800";

document.title = 'Javascript';
//Javascript를 배우는 이유 : 어떻게 HTML을 수정할 수 있는지도 맞지만
// 이것보단 이벤트에 반응하기 위해서.

function handleResize(){
  console.log("I have been resized");

}


//이거는 handleResize함수를 필요할 때 호출하는 것
window.addEventListener("resize", handleResize);

//이거는 handleResize함수를 바로 호출하는것
//window.addEventListener("resize", handleResize());