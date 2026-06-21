const PASSWORD = '12/01/25';

const input  = document.getElementById('date-input');
const btn    = document.getElementById('submit-btn');
const errMsg = document.getElementById('error-msg');

// Auto-format as MM / DD / YY
input.addEventListener('input', () => {
  let raw = input.value.replace(/\D/g, '');
  let out = raw;
  if (raw.length > 2) out = raw.slice(0,2) + '/' + raw.slice(2);
  if (raw.length > 4) out = raw.slice(0,2) + '/' + raw.slice(2,4) + '/' + raw.slice(4,6);
  input.value = out;
});

input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
btn.addEventListener('click', check);

function check() {
  const val = input.value.trim();
  if (val === PASSWORD) {
    btn.innerHTML = '<span class="btn-text">Opening…</span> <span class="btn-arrow">✨</span>';
    btn.style.pointerEvents = 'none';
    setTimeout(() => { window.location.href = 'home.html'; }, 600);
  } else {
    errMsg.classList.add('visible');
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    input.value = '';
    input.focus();
    setTimeout(() => input.classList.remove('shake'), 500);
  }
}
