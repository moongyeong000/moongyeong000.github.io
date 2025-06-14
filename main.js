document.getElementById('toggle-motivation').addEventListener('click', function() {
  const moti = document.getElementById('motivation');
  if (moti.style.display === 'none') {
    moti.style.display = 'block';
    this.textContent = 'tmi 접기';
  } else {
    moti.style.display = 'none';
    this.textContent = 'tmi 보기';
  }
});