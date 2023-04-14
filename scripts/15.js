document.addEventListener("DOMContentLoaded", () => {

    const bts = document.querySelectorAll('button');
    console.log('bts');

    //배열 리스트로 나오게 하기 


    //배열 안에 있는 것들을 하나씩 가져오기
    //case1 ; for loop
    // for (let i = 0; i < bts.length; i++) {
    //     console.log(bts[i].textContent);
      
    // }


    //case2-1(배열 순회) ; forEach
    // bts.forEach((item)=>{
    //     console.log(item);
    // })

    //case2-2 ; forEach(inx추가)
    bts.forEach((item, idx)=>{
        console.log(idx,item.textContent);
    })
    document.querySelectorAll('#h2id').textContent = bts.textContent;
    
    //case3 ; for in
    // for(let idx in bts){
    //     console.log(bts[idx].textContent);
    
    // }

    
    //case4-1 ; for of
    // for(let item of bts){
    //     console.log(item.textContent);
    // }

    //case4-2 ; for of (array 잡기)
    // for(let [k,v] of bts.entries()){
    //     console.log(k,v.textContent);
    // }



});