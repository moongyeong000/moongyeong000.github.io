document.getElementById('toggle-motivation').addEventListener('click', function() {
  const moti = document.getElementById('motivation');
  if (moti.style.display === 'none') {
    moti.style.display = 'block';
    this.textContent = '간략히';
  } else {
    moti.style.display = 'none';
    this.textContent = '자세히';
  }
});