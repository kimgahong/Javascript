initSlider();

function initSlider(){
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');

    // 페이지네이션 생성
    paginationContainer.className = 'pagination';
    sliderContainer.prepend(paginationContainer);

    // 슬라이드 개수 파악
    const slideCount = document.querySelectorAll('.slide').length; 

    for(let i = slideCount; i>0; i--){
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radios';
        radioBtn.className = 'slide-radio';
        radioBtn.id = `slide-radio-${i}`;

        if(i==1) radioBtn.checked = true;
        sliderContainer.prepend(radioBtn);

        // label 생성
        let label = document.createElement('label');
        label.setAttribute('for', `slide-radio-${i}`);
        //label.innerHTML = i;
        paginationContainer.prepend(label)
    }
    
        let autoRun = setInterval(changeSlide, 5000); //5초마다 이 함수가 불러짐

        function changeSlide() {
        const radioButtons = [...document.querySelectorAll('.slide-radio')];
        //console.log(radioButtons);
        const currentIndex = radioButtons.findIndex(rb => rb.checked);
        console.log(currentIndex);
        //ci0 % 4 = 1, ci2 % 4 =2, 3 % 4 = 3, 4 % 4 = 0
        radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
    }

    paginationContainer.addEventListener('mouseenter', ()=> clearInterval(autoRun));
    paginationContainer.addEventListener('mouseenter', ()=> autoRun = setInterval(changeSlide, 5000));
 }