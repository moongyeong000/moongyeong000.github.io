// 인코딩/디코딩 도구
function convertText() {
  const mode = document.getElementById('mode').value;
  const input = document.getElementById('inputText').value;
  let output = '';
  try {
    if (mode === 'base64encode') output = btoa(unescape(encodeURIComponent(input)));
    else if (mode === 'base64decode') output = decodeURIComponent(escape(atob(input)));
    else if (mode === 'urlencode') output = encodeURIComponent(input);
    else if (mode === 'urldecode') output = decodeURIComponent(input);
    else if (mode === 'hexencode') output = Array.from(input).map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join('');
    else if (mode === 'hexdecode') output = input.match(/.{1,2}/g).map(h=>String.fromCharCode(parseInt(h,16))).join('');
  } catch (e) { output = '[오류] 변환 실패'; }
  document.getElementById('output').textContent = output;
}

// 드래그 앤 드롭 실습
document.addEventListener('DOMContentLoaded', function() {
  const drag = document.getElementById('drag');
  const drop = document.getElementById('drop');
  const hidden = document.getElementById('hidden');
  if (drag && drop && hidden) {
    drag.ondragstart = e => e.dataTransfer.setData('text/plain', 'show');
    drop.ondragover = e => e.preventDefault();
    drop.ondrop = e => {
      e.preventDefault();
      hidden.style.display = 'block';
    };
  }
});
