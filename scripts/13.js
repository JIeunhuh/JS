
function show() {
    // alert("안녕하세요.")
    document.getElementById("h2id").innerHTML="안녕하세요"; //원하는 위치에 script를 넣고 싶을 때 ; document.getElementById("id").innerHTML="text";
}//function(key word) show()(함수){ 실행문 }

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("h2id").innerHTML="안녕하세요";
});//dom이 다 나오고 난 다음에 글자를 나오도록 하게 함(domtree ;)