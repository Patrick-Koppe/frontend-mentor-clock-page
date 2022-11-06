const btnsContainer = document.getElementsByClassName('btn-wrapper');

for (let btnContainer of btnsContainer) {
  btnContainer.addEventListener('click', function() {
        let btn = btnContainer.getElementsByClassName('btn')[0];
        btnContainer.classList.toggle('active')

        // Icon auslagern -.-

        if (btn.innerText === "MORE") {
            btn.innerText = "LESS";
          } else {
            btn.innerText = "MORE";
          }
  });
 }