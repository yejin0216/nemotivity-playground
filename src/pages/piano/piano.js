const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.play();
    noteSound.currentTime=0;

    key.classList.add('active');

    noteSound.addEventListener('ended', ()=> {
      key.classList.remove('active');
    });
  });
});