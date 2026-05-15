const generateBtn = document.getElementById('generate');
const resultEl = document.getElementById('result');

const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
const hourInput = document.getElementById('hour');

function getGanju(year, month, day, hour) {
    // 간지 계산 로직 (간략화된 버전)
    const gan = ['경', '신', '임', '계', '갑', '을', '병', '정', '무', '기'];
    const ji = ['신', '유', '술', '해', '자', '축', '인', '묘', '진', '사', '오', '미'];

    const yearGan = gan[year % 10];
    const yearJi = ji[year % 12];

    // 월, 일, 시에 대한 간지 계산은 더욱 복잡하며, 여기서는 생략합니다.

    return `${yearGan}${yearJi}년생`;
}

function getSaju(ganju) {
    // 사주 해석 로직 (간략화된 버전)
    const sajuData = {
        '갑자': '바다 속의 용과 같이 큰 잠재력을 가지고 있습니다.',
        '을축': '밭을 가는 소와 같이 성실하고 꾸준합니다.',
        '병인': '산속의 호랑이와 같이 용맹하고 리더십이 있습니다.',
        '정묘': '달나라의 토끼와 같이 섬세하고 예술적인 감각이 뛰어납니다.',
        // ... 다른 간지에 대한 해석 추가
    };

    return sajuData[ganju.substring(0, 2)] || "당신의 사주에 대한 정보가 아직 없습니다.";
}


generateBtn.addEventListener('click', () => {
    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value);
    const day = parseInt(dayInput.value);
    const hour = parseInt(hourInput.value);

    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour)) {
        resultEl.textContent = "생년월일시를 모두 입력해주세요.";
        return;
    }

    const ganju = getGanju(year, month, day, hour);
    const saju = getSaju(ganju);

    resultEl.textContent = `${ganju}, ${saju}`;
});
