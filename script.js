// D-Day 계산
const targetDate = new Date('2025-01-15T12:00:00');

function updateDday() {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    const ddayElement = document.getElementById('dday');
    if (days > 0) {
        ddayElement.textContent = `D-${days}`;
    } else if (days === 0) {
        ddayElement.textContent = 'D-DAY';
    } else {
        ddayElement.textContent = `D+${Math.abs(days)}`;
    }
}

updateDday();

// 네이버 지도 초기화
const mapOptions = {
    center: new naver.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표 (변경 필요)
    zoom: 17
};

const map = new naver.maps.Map('map', mapOptions);

const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5665, 126.9780),
    map: map
});

// 네이버 지도 앱으로 열기
function openNaverMap() {
    const lat = 37.5665;
    const lng = 126.9780;
    const name = encodeURIComponent('돌잔치 장소');
    window.open(`nmap://place?lat=${lat}&lng=${lng}&name=${name}&appname=com.example.doljanchi`);
}
