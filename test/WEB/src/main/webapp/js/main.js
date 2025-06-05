// main.js

document.addEventListener('DOMContentLoaded', function() {
  // 1. 다크모드 토글
  const toggleBtn = document.getElementById('darkmode-toggle');
  const body = document.body;

  // 페이지 로드 시 저장된 테마 적용
  if(localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
	}
  if(toggleBtn) {
    toggleBtn.onclick = function() {
      body.classList.toggle('dark-mode');
      if(body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    }
  }
  
  const dragHint = document.getElementById('drag-hint');
  const hiddenContent = document.getElementById('hidden-content');

  if (dragHint && hiddenContent) {
    dragHint.addEventListener('dragstart', function(e) {
      hiddenContent.style.display = 'block';
    });
  }

  // 2. 인코딩/디코딩 도구 (encode-helper.html)
  if(document.getElementById('encodeForm')) {
    window.convertText = function() {
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
  }

  // 3. 드래그 앤 드롭 실습 (dragdrop-demo.html)
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

  // 4. 기타 공통 기능(필요시 추가)
  // 예: 메뉴 토글, 알림, 팁 박스 등
});