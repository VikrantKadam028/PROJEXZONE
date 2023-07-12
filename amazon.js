const submitBtn = document.getElementById("Btn");
const closeBtn = document.getElementById("close");
const popup = document.querySelector('.select');

submitBtn.addEventListener('click', function(){
    popup.classList.add('selectActive');
})

closeBtn.addEventListener('click', function(){
    popup.classList.remove('selectActive');
})

