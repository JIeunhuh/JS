const show = () => {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".h2class > img").setAttribute("src", `../IMAGE/${n}.png`);
}