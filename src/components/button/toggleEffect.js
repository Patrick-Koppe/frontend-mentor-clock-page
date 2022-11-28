const btnsContainer = document.getElementsByClassName('btn-wrapper');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

for (let btnContainer of btnsContainer) {
  btnContainer.addEventListener('click', function() {
        let btn = btnContainer.getElementsByClassName('btn')[0];
        btnContainer.classList.toggle('active');
        body.classList.toggle('active');

        footerHeight = footer.offsetHeight;

        // swipe top the body outside of the screen
        if(body.classList.contains('active')) {
          body.style.top = '-' + footerHeight + 'px';
        } else {
          body.style.top = "0";
        }

        // Icon auslagern -.- 
        if (btn.innerText === "MORE") {
            btn.innerText = "LESS";
          } else {
            btn.innerText = "MORE";
        }
  });
 }