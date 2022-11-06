const btns = document.getElementsByClassName('btn');

for (let btn of btns) {
    btn.addEventListener('click', function() {
      console.log('click event', btn.innerText);
        btn.classList.toggle('active');

        // Icon auslagern -.-

        if (btn.innerText === "MORE") {
            btn.innerText = "LESS";
          } else {
            btn.innerText = "MORE";
          }
    });
 }