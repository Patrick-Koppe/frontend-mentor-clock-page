const btnsContainer = document.getElementsByClassName('btn-wrapper');
const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];

for (let btnContainer of btnsContainer) {
  btnContainer.addEventListener('click', function() {
        let btn = btnContainer.getElementsByClassName('btn')[0];
        btnContainer.classList.toggle('active');
        content.classList.toggle('active');

        footerHeight = footer.offsetHeight;

        // swipe top the content outside of the screen
        if(content.classList.contains('active')) {
          content.style.top = '-' + footerHeight + 'px';
        } else {
          content.style.top = "0";
        }

        // Icon auslagern -.- 
        if (btn.innerText === "MORE") {
            btn.innerText = "LESS";
          } else {
            btn.innerText = "MORE";
        }
  });
 }