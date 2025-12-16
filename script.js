// 기본 메뉴 데이터 (localStorage에서 불러오기 전 기본값)
const defaultMenus = [
    // 필수 항목
    { name: "쌀국수", emoji: "🍜", comment: "뜨끈한 국물이 영혼을 치유합니다" },
    { name: "치미치미", emoji: "🍗", comment: "바삭바삭 치킨의 정석!" },
    { name: "봉구스 밥버거", emoji: "🍙", comment: "밥이야? 버거야? 둘 다야!" },
    { name: "오리고기", emoji: "🍗", comment: "상상오리 냠.." },

    // 한식
    { name: "김치찌개", emoji: "🍲", comment: "역시 한국인은 김치찌개지" },
    { name: "된장찌개", emoji: "🥘", comment: "구수한 된장 냄새 솔솔~" },
    { name: "순두부찌개", emoji: "🍲", comment: "부드러운 순두부에 밥 비벼먹기" },
    { name: "삼겹살", emoji: "🥓", comment: "고기 앞에서는 다 평등합니다" },
    { name: "불고기", emoji: "🥩", comment: "달콤 짭짤한 불고기 냠냠" },
    { name: "떡볶이", emoji: "🔥", comment: "매운맛에 중독되셨군요" },
    { name: "순대국", emoji: "🥣", comment: "소금 vs 새우젓... 당신의 선택은?" },
    { name: "칼국수", emoji: "🍜", comment: "손칼국수면 더 맛있음" },
    { name: "냉면", emoji: "🍜", comment: "겨울에도 냉면은 진리" },
    { name: "비빔밥", emoji: "🍚", comment: "쓱쓱 비벼서 한입에 쏙" },
    { name: "보쌈", emoji: "🥬", comment: "쌈 싸먹는 재미가 있죠" },
    { name: "족발", emoji: "🦶", comment: "야식의 왕... 근데 저녁인가" },
    { name: "삼계탕", emoji: "🐔", comment: "이열치열! 뜨거운 삼계탕" },
    { name: "감자탕", emoji: "🥔", comment: "뼈다귀 쪽쪽 빨아먹기" },
    { name: "부대찌개", emoji: "🍲", comment: "라면사리 추가는 기본이죠" },
    { name: "해물탕", emoji: "🦐", comment: "시원한 해물탕 국물 한 숟갈" },
    { name: "낙지볶음", emoji: "🐙", comment: "매콤달콤 낙지볶음!" },
    { name: "쭈꾸미", emoji: "🐙", comment: "쭈꾸미볶음 밥도둑" },
    { name: "제육볶음", emoji: "🐷", comment: "매콤한 제육에 밥 한 공기" },
    { name: "찜닭", emoji: "🍗", comment: "당면이 국물 다 흡수함" },
    { name: "닭갈비", emoji: "🐔", comment: "치즈 추가하면 더 맛있어요" },
    { name: "갈비찜", emoji: "🍖", comment: "특별한 날엔 갈비찜!" },

    // 중식
    { name: "짜장면", emoji: "🍝", comment: "단무지는 필수입니다" },
    { name: "짬뽕", emoji: "🥘", comment: "짜장 vs 짬뽕... 오늘은 짬뽕!" },
    { name: "탕수육", emoji: "🍖", comment: "부먹 vs 찍먹 논쟁은 영원히" },
    { name: "마라탕", emoji: "🌶️", comment: "오늘도 마라탕후루... 아니 마라탕" },
    { name: "마라샹궈", emoji: "🥘", comment: "국물 없는 마라의 정석" },
    { name: "양꼬치", emoji: "🍢", comment: "칭따오 한병 필수" },
    { name: "훠궈", emoji: "🍲", comment: "친구들과 훠궈 파티!" },

    // 일식
    { name: "초밥", emoji: "🍣", comment: "오마카세 가고 싶지만 일단 이거" },
    { name: "라멘", emoji: "🍜", comment: "일본 안 가도 라멘은 먹을 수 있어요" },
    { name: "돈까스", emoji: "🍖", comment: "경양식? 일식? 일단 소스부터" },
    { name: "우동", emoji: "🍜", comment: "따뜻한 우동 국물 후루룩" },
    { name: "규동", emoji: "🍚", comment: "쏘-오야~ 규동의 맛" },
    { name: "카레", emoji: "🍛", comment: "집밥 느낌 물씬 카레" },
    { name: "오코노미야끼", emoji: "🥞", comment: "일본식 부침개 맛집" },
    { name: "타코야키", emoji: "🐙", comment: "동글동글 타코야키" },

    // 양식
    { name: "피자", emoji: "🍕", comment: "파인애플 토핑 논쟁은 하지 맙시다" },
    { name: "햄버거", emoji: "🍔", comment: "수제버거 말고 그냥 맥도날드 어때요?" },
    { name: "치킨", emoji: "🍗", comment: "치킨은 진리입니다" },
    { name: "파스타", emoji: "🍝", comment: "알리오올리오 vs 크림 파스타" },
    { name: "스테이크", emoji: "🥩", comment: "오늘은 좀 럭셔리하게?" },
    { name: "리조또", emoji: "🍚", comment: "크리미한 리조또 한 그릇" },
    { name: "그라탕", emoji: "🧀", comment: "치즈 쭉쭉 늘어나는 그라탕" },
    { name: "샐러드", emoji: "🥗", comment: "오늘은 좀 건강하게... 아 몰라 고기 먹자" },

    // 분식
    { name: "튀김", emoji: "🍤", comment: "바삭바삭 모둠튀김" },
    { name: "라면", emoji: "🍜", comment: "역시 라면이 최고야" },
    { name: "김밥", emoji: "🍙", comment: "간단하게 김밥 한 줄" },
    { name: "쫄면", emoji: "🍝", comment: "쫄깃쫄깃 쫄면" },
    { name: "만두", emoji: "🥟", comment: "찐만두? 군만두? 둘 다!" },

    // 패스트푸드 & 기타
    { name: "타코", emoji: "🌮", comment: "멕시코 음식도 맛있어요!" },
    { name: "덮밥", emoji: "🍚", comment: "간단하게 한 그릇 뚝딱" },
    { name: "월남쌈", emoji: "🥬", comment: "신선한 야채에 쌈쌈" },
    { name: "케밥", emoji: "🌯", comment: "터키쉬 케밥 한 입" },
    { name: "팟타이", emoji: "🍝", comment: "태국 느낌 나는 밤" },
    { name: "반미", emoji: "🥖", comment: "베트남 샌드위치 반미!" },
    { name: "분짜", emoji: "🍜", comment: "베트남 쌀국수의 친구" },

    // 한국 프랜차이즈
    { name: "맥도날드", emoji: "🍔", comment: "맥날 감튀는 진리" },
    { name: "버거킹", emoji: "🍔", comment: "와퍼 먹고 싶다..." },
    { name: "롯데리아", emoji: "🍔", comment: "불고기버거 국룰" },
    { name: "맘스터치", emoji: "🍔", comment: "싸이버거 레전드" },
    { name: "KFC", emoji: "🍗", comment: "커넬 할아버지의 비밀 레시피" },
    { name: "파파이스", emoji: "🍗", comment: "케이준 치킨 맛집" },
    { name: "BBQ", emoji: "🍗", comment: "황금올리브 먹을 사람?" },
    { name: "교촌치킨", emoji: "🍗", comment: "허니콤보 vs 레드콤보" },
    { name: "BHC", emoji: "🍗", comment: "뿌링클 중독자 모여라" },
    { name: "굽네치킨", emoji: "🍗", comment: "오븐에 구운 치킨" },
    { name: "네네치킨", emoji: "🍗", comment: "네네의 소금구이" },
    { name: "호식이두마리치킨", emoji: "🍗", comment: "두 마리에 이 가격?!" },
    { name: "피자헛", emoji: "🍕", comment: "치즈크러스트 필수" },
    { name: "도미노피자", emoji: "🍕", comment: "30분 배달 보장" },
    { name: "미스터피자", emoji: "🍕", comment: "쉬림프 골드 엣지" },
    { name: "파파존스", emoji: "🍕", comment: "갈릭소스가 맛있는 그곳" },
    { name: "서브웨이", emoji: "🥪", comment: "이탈리안 BMT 주세요" },
    { name: "이삭토스트", emoji: "🥪", comment: "아침은 이삭이지" },
    { name: "죠스떡볶이", emoji: "🔥", comment: "매운 떡볶이 맛집" },
    { name: "신전떡볶이", emoji: "🔥", comment: "신전의 튀김도 맛있어" },
    { name: "한솥도시락", emoji: "🍱", comment: "가성비 도시락의 정석" },
    { name: "김밥천국", emoji: "🍙", comment: "만원의 행복" },
    { name: "김가네", emoji: "🍙", comment: "김밥 + 라면 조합" },

    // 배달 인기 메뉴
    { name: "족발야시장", emoji: "🦶", comment: "배달 족발 맛집" },
    { name: "60계치킨", emoji: "🍗", comment: "60가지 양념의 비밀" },
    { name: "처갓집양념치킨", emoji: "🍗", comment: "양념치킨의 원조" },
    { name: "자담치킨", emoji: "🍗", comment: "자담 간장치킨 최고" },
    { name: "피자알볼로", emoji: "🍕", comment: "고구마피자 먹을 사람?" },
    { name: "청년피자", emoji: "🍕", comment: "가성비 피자" },
    { name: "오구쌀피자", emoji: "🍕", comment: "쌀로 만든 피자" },
    { name: "떡참", emoji: "🍢", comment: "떡볶이 참 잘하는 집" },
    { name: "동대문엽기떡볶이", emoji: "🔥", comment: "엽떡 매운맛 도전" },
    { name: "응급실떡볶이", emoji: "🔥", comment: "진짜 매워서 응급실 감" },
    { name: "배떡", emoji: "🔥", comment: "배달 떡볶이 전문" },
    { name: "푸라닭", emoji: "🍗", comment: "블랙알리오 한번 드셔보세요" },
    { name: "멕시카나", emoji: "🍗", comment: "윙봉 세트 추천" },
    { name: "페리카나", emoji: "🍗", comment: "양념 반 후라이드 반" },
    { name: "또래오래", emoji: "🍗", comment: "치킨 + 떡볶이 세트" },
    { name: "노랑통닭", emoji: "🍗", comment: "통닭의 정석" },
    { name: "지코바", emoji: "🍗", comment: "무뼈닭발도 있어요" },
    { name: "굽네 볼케이노", emoji: "🌋", comment: "매운 오븐치킨" }
];

// 결정장애 레벨
const indecisionLevels = [
    { min: 0, max: 0, emoji: "🙂", text: "시작 전" },
    { min: 1, max: 2, emoji: "🤔", text: "고민 중" },
    { min: 3, max: 5, emoji: "😅", text: "결정장애 시작" },
    { min: 6, max: 8, emoji: "😰", text: "좀 심각함" },
    { min: 9, max: 12, emoji: "🥵", text: "심각" },
    { min: 13, max: 15, emoji: "😱", text: "매우 심각" },
    { min: 16, max: 20, emoji: "🤯", text: "말기" },
    { min: 21, max: 30, emoji: "💀", text: "손 절단 권장" },
    { min: 31, max: 50, emoji: "👻", text: "그냥 굶으세요" },
    { min: 51, max: Infinity, emoji: "🎰", text: "도박 중독" }
];

let spinCount = 0;
let isSpinning = false;
let spinInterval = null;
let currentIndex = 0;
let currentShuffledMenus = []; // 현재 슬롯에 표시된 섞인 메뉴 배열

// localStorage에서 메뉴 불러오기 (없으면 기본값 사용)
let menus = loadMenusFromStorage();

function loadMenusFromStorage() {
    const saved = localStorage.getItem('customMenus');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return [...defaultMenus];
        }
    }
    return [...defaultMenus];
}

function saveMenusToStorage() {
    localStorage.setItem('customMenus', JSON.stringify(menus));
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initSlotReel();
    renderMenuGrid();
    updateMenuCount();

    // 메뉴 목록 기본으로 펼쳐서 보여주기 (메뉴가 많다는 걸 바로 알 수 있게)
    document.getElementById('menuGrid').classList.add('expanded');
    document.getElementById('toggleIcon').textContent = '▲';
});

function updateMenuCount() {
    document.getElementById('menuCount').textContent = `(${menus.length}개)`;
}

// 슬롯 릴 초기화
function initSlotReel() {
    const reel = document.getElementById('slotReel');
    reel.innerHTML = '';

    // 메뉴 섞기 (비슷한 메뉴가 연속으로 안 나오게) - 전역 변수에 저장
    currentShuffledMenus = shuffleArray([...menus]);

    // 메뉴들을 충분히 반복해서 추가
    const repeatedMenus = [...currentShuffledMenus, ...currentShuffledMenus, ...currentShuffledMenus, ...currentShuffledMenus];

    repeatedMenus.forEach(menu => {
        const item = document.createElement('div');
        item.className = 'slot-item';
        item.innerHTML = `
            <span class="slot-item-emoji">${menu.emoji}</span>
            <span class="slot-item-name">${menu.name}</span>
        `;
        reel.appendChild(item);
    });
}

// 배열 섞기 (Fisher-Yates 알고리즘)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 메뉴 그리드 렌더링
function renderMenuGrid() {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';

    menus.forEach((menu, index) => {
        const chip = document.createElement('div');
        chip.className = 'menu-chip';
        chip.innerHTML = `
            <button class="menu-chip-delete" onclick="deleteMenu(${index})" title="삭제">✕</button>
            <div class="menu-chip-emoji">${menu.emoji}</div>
            <div class="menu-chip-name">${menu.name}</div>
        `;
        grid.appendChild(chip);
    });
}

// 돌리기 시작
function startSpin() {
    if (isSpinning) return;

    isSpinning = true;

    // 스핀 시작할 때 메뉴 섞기 (이전 결과는 유지하고 새로 시작할 때만 섞음)
    initSlotReel();

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const slotDisplay = document.getElementById('slotDisplay');
    const resultDisplay = document.getElementById('resultDisplay');

    // 버튼 전환
    startBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');

    // 스피닝 상태 표시
    slotDisplay.classList.add('spinning');

    // 결과 영역 업데이트
    resultDisplay.innerHTML = `
        <div class="result-spinning">
            🎲 돌아가는 중... 멈추고 싶을 때 버튼을 누르세요!
        </div>
    `;

    // 릴 스피닝 시작
    const reel = document.getElementById('slotReel');
    const itemHeight = window.innerWidth <= 480 ? 140 : 160;
    currentIndex = 0;

    spinInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % (menus.length * 2);
        // CSS 애니메이션으로 처리하므로 여기서는 인덱스만 추적
    }, 80);
}

// 멈추기
function stopSpin() {
    if (!isSpinning) return;

    isSpinning = false;
    spinCount++;

    clearInterval(spinInterval);

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const slotDisplay = document.getElementById('slotDisplay');
    const reel = document.getElementById('slotReel');

    // 스피닝 중지
    slotDisplay.classList.remove('spinning');

    // 섞인 배열에서 랜덤 메뉴 선택 (슬롯에 표시된 것과 동일한 배열 사용)
    const selectedIndex = Math.floor(Math.random() * currentShuffledMenus.length);
    const selectedMenu = currentShuffledMenus[selectedIndex];

    // 릴 위치 조정 (섞인 배열 기준)
    const itemHeight = window.innerWidth <= 480 ? 140 : 160;
    reel.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    reel.style.transform = `translateY(-${(selectedIndex + currentShuffledMenus.length) * itemHeight}px)`;

    // 버튼 전환
    stopBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
    startBtn.innerHTML = '🎰 다시 돌리기!';

    // 스핀 카운트 업데이트
    document.getElementById('spinCount').textContent = spinCount;
    updateIndecisionLevel();

    // 결과 표시 (약간 딜레이)
    setTimeout(() => {
        displayResult(selectedMenu);
        reel.style.transition = 'none';
        // 다음 스핀 시작할 때 섞을 예정이므로 여기서는 섞지 않음
    }, 500);
}

// 결과 표시
function displayResult(menu) {
    const resultDisplay = document.getElementById('resultDisplay');

    resultDisplay.innerHTML = `
        <div class="result-final">
            <div class="result-emoji">${menu.emoji}</div>
            <div class="result-name">${menu.name}</div>
            <div class="result-comment">${menu.comment}</div>
        </div>
    `;

    // 폭죽 효과
    createConfetti();
}

// 폭죽 효과
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#6C63FF', '#FF6B9D', '#00D9A5', '#FFB84D', '#A855F7', '#38BDF8'];

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            confetti.style.width = '12px';
            confetti.style.height = '6px';
        }

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// 결정장애 레벨 업데이트
function updateIndecisionLevel() {
    const levelElement = document.getElementById('indecisionLevel');
    const level = indecisionLevels.find(l => spinCount >= l.min && spinCount <= l.max);

    if (level) {
        levelElement.textContent = level.emoji;
        levelElement.title = level.text;
    }
}

// 메뉴 리스트 토글
function toggleMenuList() {
    const menuGrid = document.getElementById('menuGrid');
    const toggleIcon = document.getElementById('toggleIcon');

    menuGrid.classList.toggle('expanded');
    toggleIcon.textContent = menuGrid.classList.contains('expanded') ? '▲' : '▼';
}

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (isSpinning) {
            stopSpin();
        } else {
            startSpin();
        }
    }
});

// 이스터 에그
console.log(`
    🍜 오늘 뭐 먹지?! 🍔
    
    메뉴 추가/삭제가 가능합니다!
    추가한 메뉴는 브라우저에 저장되어 유지됩니다.
    
    TIP: 스페이스바로도 돌리고 멈출 수 있어요!
    
    🎰 맛있는 식사 되세요!
`);

// ============ 메뉴 관리 기능 ============

// 모달 열기
function openAddModal() {
    document.getElementById('addModal').classList.remove('hidden');
    document.getElementById('menuName').focus();
}

// 모달 닫기
function closeAddModal() {
    document.getElementById('addModal').classList.add('hidden');
    // 입력값 초기화
    document.getElementById('menuName').value = '';
    document.getElementById('menuEmoji').value = '';
    document.getElementById('menuComment').value = '';
}

// 새 메뉴 추가
function addNewMenu() {
    const name = document.getElementById('menuName').value.trim();
    const emoji = document.getElementById('menuEmoji').value.trim() || '🍽️';
    const comment = document.getElementById('menuComment').value.trim() || '맛있겠다!';

    if (!name) {
        alert('메뉴 이름을 입력해주세요!');
        document.getElementById('menuName').focus();
        return;
    }

    // 중복 체크
    if (menus.some(m => m.name === name)) {
        alert('이미 있는 메뉴입니다!');
        return;
    }

    // 메뉴 추가
    menus.push({ name, emoji, comment });
    saveMenusToStorage();

    // UI 업데이트
    renderMenuGrid();
    updateMenuCount();
    initSlotReel();

    closeAddModal();

    // 성공 피드백
    createConfetti();
}

// 메뉴 삭제
function deleteMenu(index) {
    const menu = menus[index];
    if (confirm(`"${menu.name}" 메뉴를 삭제할까요?`)) {
        menus.splice(index, 1);
        saveMenusToStorage();

        renderMenuGrid();
        updateMenuCount();
        initSlotReel();
    }
}

// 기본 메뉴로 초기화
function resetToDefault() {
    if (confirm('모든 커스텀 메뉴를 삭제하고 기본 메뉴로 초기화할까요?')) {
        menus = [...defaultMenus];
        saveMenusToStorage();

        renderMenuGrid();
        updateMenuCount();
        initSlotReel();

        alert('기본 메뉴로 초기화되었습니다!');
    }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeAddModal();
    }
});

// 모달 외부 클릭시 닫기
document.getElementById('addModal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeAddModal();
    }
});
