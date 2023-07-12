const submitBtn = document.getElementById("Btn");
const closeBtn = document.getElementById("close");
const popup = document.querySelector('.popupcontainer');

submitBtn.addEventListener('click', function() {
   popup.classList.add('popupActive');
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('popupActive');
 })
 













// function submit() {
//     popup.classList.add('popupActive');
//     document.getElementsByClassName(".popupcontainer").innerHTML;
// }

// function CloseBtn() {
//     popup.classList.remove('popupActive');
// }