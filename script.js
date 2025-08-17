let correct = 0;
let total = 0;
let startTime;
let totalTime = 0;
let types = [];

function startQuiz() {
    types = [];
    if (document.getElementById('integers').checked) types.push('integer');
    if (document.getElementById('decimals').checked) types.push('decimal');
    if (document.getElementById('fractions').checked) types.push('fraction');
    if (types.length === 0) {
        alert('Vui lòng chọn ít nhất một loại số!');
        return;
    }
    generateQuestion();
}

function generateNumber(type) {
    if (type === 'integer') {
        return Math.floor(Math.random() * 201) - 100; // -100 to 100
    } else if (type === 'decimal') {
        return (Math.random() * 200 - 100).toFixed(2); // -100.00 to 100.00
    } else if (type === 'fraction') {
        const num = Math.floor(Math.random() * 21) - 10; // -10 to 10
        const den = Math.floor(Math.random() * 9) + 1; // 1 to 9
        return { num, den };
    }
}

function displayNumber(num) {
    if (typeof num === 'object') {
        return `${num.num}/${num.den}`;
    }
    return num;
}

function getValue(num) {
    if (typeof num === 'object') {
        return num.num / num.den;
    }
    return parseFloat(num);
}

function generateQuestion() {
    const type1 = types[Math.floor(Math.random() * types.length)];
    const type2 = types[Math.floor(Math.random() * types.length)];
    const num1 = generateNumber(type1);
    const num2 = generateNumber(type2);
    document.getElementById('num1').innerText = displayNumber(num1);
    document.getElementById('num2').innerText = displayNumber(num2);
    document.getElementById('num1').dataset.value = getValue(num1);
    document.getElementById('num2').dataset.value = getValue(num2);
    document.getElementById('message').innerText = '';
    startTime = Date.now();
}

function checkAnswer(choice) {
    const val1 = parseFloat(document.getElementById('num1').dataset.value);
    const val2 = parseFloat(document.getElementById('num2').dataset.value);
    let correctChoice;
    if (val1 > val2) correctChoice = '>';
    else if (val1 < val2) correctChoice = '<';
    else correctChoice = '=';

    total++;
    const timeTaken = (Date.now() - startTime) / 1000;
    totalTime += timeTaken;

    if (choice === correctChoice) {
        correct++;
        document.getElementById('message').innerText = 'Đúng!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Sai! Đáp án đúng là ' + correctChoice;
        document.getElementById('message').style.color = 'red';
    }

    updateStats();
    setTimeout(generateQuestion, 1000); // Chờ 1 giây trước câu tiếp theo
}

function updateStats() {
    document.getElementById('correct').innerText = correct;
    document.getElementById('total').innerText = total;
    const accuracy = total > 0 ? ((correct / total) * 100).toFixed(2) : 0;
    document.getElementById('accuracy').innerText = accuracy + '%';
    const avgTime = total > 0 ? (totalTime / total).toFixed(2) : 0;
    document.getElementById('avgTime').innerText = avgTime + 's';
}