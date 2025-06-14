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

const attackData = {
  'xss': {
    code: `<script>alert('XSS')</script>`,
    displayCode: `&lt;script&gt;alert('XSS')&lt;/script&gt;`,
    desc: `XSS(Cross Site Scripting)는 사용자의 입력값이 필터링 없이 웹페이지에 출력되어, 악의적인 스크립트가 실행되는 취약점입니다.<br>
    <b>예시 코드:</b> <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code><br>
    <b>대응 방안:</b> 입력값 필터링, 출력 시 이스케이프 처리, CSP 적용 등`
  },
  '시스템 명령어 삽입': {
    code: `; ls -al`,
    displayCode: `; ls -al`,
    desc: `시스템 명령어 삽입은 입력값이 서버의 명령어로 실행되어 시스템 제어가 가능한 취약점입니다.<br>
    <b>예시 코드:</b> <code>; ls -al</code><br>
    <b>대응 방안:</b> 입력값 검증, 쉘 명령어 직접 실행 금지, 최소 권한 원칙 적용 등`
  },
  '검색 최적화 조작': {
    code: `<a href="https://malicious.com">무료 쿠폰</a>`,
    displayCode: `&lt;a href="https://malicious.com"&gt;무료 쿠폰&lt;/a&gt;`,
    desc: `검색 최적화 조작(SEO Manipulation)은 검색 결과에 노출되도록 유도한 페이지에 악성 링크/키워드를 삽입하는 기법입니다.<br>
    <b>예시 코드:</b> <code>&lt;a href="https://malicious.com"&gt;무료 쿠폰&lt;/a&gt;</code><br>
    <b>대응 방안:</b> 사용자 입력값 검증, 허용 태그 제한, 정기적 모니터링 등`
  }
};

const attackInput = document.getElementById('attack-input');
const attackSearchBtn = document.getElementById('attack-search-btn');
const attackCodeDiv = document.getElementById('attack-code');
const attackPayloadInput = document.getElementById('attack-payload');
const attackPayloadBtn = document.getElementById('attack-payload-btn');
const attackDescDiv = document.getElementById('attack-desc');

attackSearchBtn.addEventListener('click', function() {
  const value = attackInput.value.trim().toLowerCase();
  let found = null;
  for (let key in attackData) {
    if (key.toLowerCase() === value) {
      found = attackData[key];
      break;
    }
  }
  attackDescDiv.innerHTML = '';
  attackPayloadInput.style.display = 'none';
  attackPayloadBtn.style.display = 'none';
  if (found) {
    attackCodeDiv.innerHTML = `<b>복붙 가능한 코드:</b> <code>${found.displayCode}</code>`;
    attackPayloadInput.value = '';
    attackPayloadInput.style.display = 'inline-block';
    attackPayloadBtn.style.display = 'inline-block';
  } else {
    attackCodeDiv.innerHTML = `<span style="color:#ff8080;">지원하지 않는 공격 기법입니다.</span>`;
  }
});

attackPayloadBtn.addEventListener('click', function() {
  const value = attackInput.value.trim().toLowerCase();
  let found = null;
  for (let key in attackData) {
    if (key.toLowerCase() === value) {
      found = attackData[key];
      break;
    }
  }
  if (found && attackPayloadInput.value.trim() === found.code) {
    attackDescDiv.innerHTML = found.desc;
  } else {
    attackDescDiv.innerHTML = `<span style="color:#ff8080;">코드가 정확하지 않습니다. 복붙하여 입력해보세요.</span>`;
  }
});

const loginForm = document.getElementById('login-form');
const loginUser = document.getElementById('login-user');
const loginPass = document.getElementById('login-pass');
const loginResult = document.getElementById('login-result');
const adminPage = document.getElementById('admin-page');
const managerPage = document.getElementById('manager-page');

window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('manager') && params.get('manager') === 'true') {
    showSection('manager');
  }
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (loginPass.value.trim() === "' OR 1=1 --" || loginUser.value.trim() === "' OR 1=1 --") {
    showSection('admin');
  } else {
    loginResult.innerHTML = `<span style="color:#ff8080;">로그인 실패! SQL Injection 또는 URL 파라미터 우회를 시도해보세요.</span>`;
  }
});

function showSection(type) {
  adminPage.style.display = 'none';
  managerPage.style.display = 'none';
  loginResult.innerHTML = '';
  if (type === 'admin') {
    adminPage.style.display = 'block';
    window.scrollTo({ top: adminPage.offsetTop - 40, behavior: 'smooth' });
  } else if (type === 'manager') {
    managerPage.style.display = 'block';
    window.scrollTo({ top: managerPage.offsetTop - 40, behavior: 'smooth' });
  }
}
