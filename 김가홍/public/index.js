let target = document.querySelector("#dynamic"); 

function randomString() {
    let stringArr = ["Save the Earth"]; 
    let selectString = stringArr[0]; 
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {

    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr); 
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());


// 커서 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);