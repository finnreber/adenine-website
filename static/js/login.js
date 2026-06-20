const PASSWORD = '12/01/25';

const input  = document.getElementById('date-input');
const btn    = document.getElementById('submit-btn');
const errMsg = document.getElementById('error-msg');

// Auto-format as MM/DD/YY while typing
input.addEventListener('input', () => {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2);
  if (val.length > 5) val = val.slice(0, 5) + '/' + val.slice(5, 7);
  input.value = val;
});

// Submit on Enter key
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') check();
});

btn.addEventListener('click', check);

function check() {
  if (input.value.trim() === PASSWORD) {
    window.location.href = 'home.html';
  } else {
    // Show error + shake animation
    errMsg.style.display = 'block';
    input.classList.remove('input-error');
    void input.offsetWidth; // reflow to restart animation
    input.classList.add('input-error');
    input.value = '';
    input.focus();
  }
}
