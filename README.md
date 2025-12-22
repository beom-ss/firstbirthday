# 아기 돌잔치 초대장

GitHub Pages로 호스팅되는 모바일 최적화 돌잔치 초대장입니다.

## 설정 방법

### 1. 네이버 지도 API 키 발급
1. [네이버 클라우드 플랫폼](https://www.ncloud.com/)에서 회원가입
2. AI·NAVER API > Application 등록
3. Maps > Web Dynamic Map 선택
4. Client ID 복사

### 2. 설정 변경
`index.html` 파일에서:
- `YOUR_CLIENT_ID`를 발급받은 Client ID로 변경
- 아기 이름, 날짜, 장소 정보 수정

`script.js` 파일에서:
- `targetDate`: 돌잔치 날짜 변경
- 좌표값 (37.5665, 126.9780): 실제 장소 좌표로 변경

### 3. 사진 추가
`images/` 폴더에 다음 파일들을 추가:
- `baby1.jpg`: 메인 사진
- `baby2.jpg`, `baby3.jpg`, `baby4.jpg`: 갤러리 사진

### 4. GitHub Pages 배포
1. GitHub 저장소 생성
2. Settings > Pages > Source를 `main` 브랜치로 설정
3. `https://username.github.io/repository-name` 으로 접속

## 좌표 찾는 방법
1. [네이버 지도](https://map.naver.com)에서 장소 검색
2. 주소 복사 후 우클릭 > "여기가 궁금해요" 클릭
3. 위도/경도 확인
