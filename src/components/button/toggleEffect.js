const btnsContainer = document.getElementsByClassName('btn-wrapper');
const body = document.getElementsByTagName('body')[0];

for (let btnContainer of btnsContainer) {
  btnContainer.addEventListener('click', function() {
        let btn = btnContainer.getElementsByClassName('btn')[0];
        btnContainer.classList.toggle('active');
        body.classList.toggle('active');

        // Icon auslagern -.- 

        if (btn.innerText === "MORE") {
            btn.innerText = "LESS";
          } else {
            btn.innerText = "MORE";
          }
  });
 }