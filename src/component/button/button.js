import "./button.scss";


const btns = document.getElementsByClassName('btn');

for (let btn of btns) {
    btn.addEventListener('click', function() {
        btn.classList.toggle('active');
        console.log('click event');
    });
 }