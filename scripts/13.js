// document.getElementById("h2id").innerHTML = "시작입니다."; //error


// function show() {
//     // alert("안녕하세요.")
//     event.preventDefault(); // event.preventDefault(); 사용하면 action이 없어도 자기자신을 호출하지 않음ㄴ
//     document.getElementById("h2id").innerHTML = "안녕하세요"; //원하는 위치에 script를 넣고 싶을 때 ; document.getElementById("id").innerHTML="text";
// }//function(key word) show()(함수){ 실행문 }

//const : 바뀌면안됨
const show = () => {
    event.preventDefault();

    //랜덤 수 생성하기(1-6)
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n); //console.log() :
    /*if(n==1){
    document.getElementById("h2id").innerHTML = "<img src='../IMAGE/1.png'>"; }//''&""안에 html 코드 쓸 수 있음
    else if(n==2){
        document.getElementById("h2id").innerHTML = "<img src='../IMAGE/2.png'>"
    }
    else if(n==3){
        document.getElementById("h2id").innerHTML = "<img src='../IMAGE/3.png'>"
    }
    else if(n==4){
        document.getElementById("h2id").innerHTML = "<img src='../IMAGE/4.png'>"
    }
    else if(n==5){
        document.getElementById("h2id").innerHTML = "<img src='../IMAGE/5.png'>"
    }
    else{
        document.getElementById("h2id").innerHTML = "<img src='../IMAGE/6.png'>"  
    }*/
    // html문 안에 n 넣기
    // document.getElementById("h2id").innerHTML = "<img src='../IMAGE/" + n + ".png'>";

    // ` `문자열 사용 
    document.getElementById("h2id").innerHTML = `<img src='../IMAGE/${n}.png'>`; 

    //switch case 문

    //array 만들어서 

}//화살표 함수

/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("h2id").innerHTML = "시작입니다.";
});
//인수 안에 함수를 바로 짜서 집어넣을 수 있음(이름이 없는 함수:바로 실행되므로 이름 필요 x)
//dom이 다 나오고 난 다음에 글자를 나오도록 하게 함(domtree ;)*/

// document.addEventListener("DOMContentLoaded", () => {
//     // document.getElementById("h2id").innerHTML = "시작입니다.";
//     document.querySelector('.h2class').innerHTML = "class 선택자 : 시작입니다." // \
//('seletor') : dom내의 톡정 요소 조회
//     const bt = document.createElement('button');
//     bt.textContent = '확인';
//     document.getElementById('hdiv').append(bt);
//     // createElement():document내에 새로운 요소 생성(변수에 저장)
//     //append() : 새로 생성한 요소를 특정 노드에 연결
// }); //화살표 함수 

