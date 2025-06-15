# 페이지 소개
이 프로젝트는 보안/해킹 전문가를 꿈꾸고, 공격형 기업에서 근무하길 희망하는 한남대학교 정문경의 이력/포트폴리오 사이트입니다.

저에 대한 소개와 현재 가지고 있는 스킬, 진행했거나 할 예정인 프로젝트들, 추가로 가장 간단한 공격 기법들을 시행해 보는 사이트가 있습니다.

## 사이트 주소
https://moongyeong000.github.io/

## 프로젝트 구조
```
/
├── index.html           # 메인 이력/포트폴리오 페이지
├── practice.html        # 실습형 웹페이지
├── style.css            # 공통 스타일시트
├── main.js              # index.html용 JS
├── practice.js          # practice.html용 JS
└── README.md            # 프로젝트 설명 및 기능 명세
```

## 기능 목록

|기능 제목|설명|코드 위치|코드 설명|
|-----------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------|
| 자기소개/희망 직무 토글 | 자기소개 및 희망 직무를 버튼으로 열고 닫을 수 있음 | index.html:16, main.js:1| #toggle-motivation 버튼 클릭 시 #motivation 영역을 show/hide, 버튼 텍스트 변경|
| 공격법 검색/실습 기능| XSS, 시스템 명령어 삽입, 검색 최적화 조작 등 주요 공격 기법을 검색/코드 입력/설명 제공 | practice.html:16, practice.js:1| #attack-search 섹션, 입력값에 따라 복붙 코드/공격 원리/대응 방안 안내 |
| 로그인(SQL Injection) 실습 | SQL Injection 원리를 이용해 인증 우회 실습 가능 | practice.html:36, practice.js:34| 로그인 폼에 `' OR 1=1 --` 입력 시 SQL 쿼리의 인증 조건이 항상 참이 되어 관리자 페이지로 이동 |
| 관리자 페이지(SQL Injection)      | SQL Injection 성공 시 관리자 전용 페이지 노출, 공격 원리 및 대응 방안 상세 설명| practice.html:49, practice.js:95| showSection('admin') 호출 시 #admin-page 표시, SQL Injection 원리/예시/대응방안 안내|
| 로그인(URL 파라미터 인가 우회) 실습| URL 파라미터(manager=true) 조작을 통한 인가 우회 실습 가능| practice.html:36, practice.js:72| 로그인 실패 후 URL에 ?manager=true 추가 시 매니저 페이지로 이동|
| 매니저 페이지(인가 우회)| URL 파라미터 조작 성공 시 매니저 전용 페이지 노출, 공격 원리 및 대응 방안 상세 설명      | practice.html:68, practice.js:95| showSection('manager') 호출 시 #manager-page 표시, 인가 우회 원리/대응방안 안내|


## 기타
- **테마/디자인:**  
  - 외부 테마 없이 직접 HTML, CSS, JS로 설계/구현  
  - 모든 UI와 스타일을 직접 코딩함