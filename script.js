// MBTI测试问题数据
const questions = [
    { text: "我喜欢参加热闹的聚会和社交活动。", dimension: "E-I" },
    { text: "我更关注事物的细节和具体信息，而不是抽象概念。", dimension: "S-N" },
    { text: "做决定时，我更依赖逻辑分析而不是情感因素。", dimension: "T-F" },
    { text: "我喜欢有计划、有组织的生活方式。", dimension: "J-P" },
    { text: "我通常是聚会中的活跃分子，喜欢成为焦点。", dimension: "E-I" },
    { text: "我更相信经验和实际情况，而不是直觉和预感。", dimension: "S-N" },
    { text: "我倾向于客观公正地评价事物，避免个人情感影响。", dimension: "T-F" },
    { text: "我喜欢把事情提前安排好，不喜欢临时改变计划。", dimension: "J-P" },
    { text: "我更愿意独自工作，而不是与团队合作。", dimension: "E-I" },
    { text: "我经常思考事物的象征意义和潜在可能性。", dimension: "S-N" },
    { text: "我会优先考虑他人的感受和需求。", dimension: "T-F" },
    { text: "我喜欢保持灵活，能够适应各种变化。", dimension: "J-P" },
    { text: "我需要时间独处来恢复精力。", dimension: "E-I" },
    { text: "我对未来的可能性和长远规划更感兴趣。", dimension: "S-N" },
    { text: "我认为诚实和公平比和谐的关系更重要。", dimension: "T-F" },
    { text: "我喜欢在截止日期前完成任务，避免拖延。", dimension: "J-P" },
    { text: "我喜欢与人交谈，分享自己的想法和感受。", dimension: "E-I" },
    { text: "我更关注现实和当前的情况，而不是未来的可能性。", dimension: "S-N" },
    { text: "我倾向于理性思考，不受情绪影响。", dimension: "T-F" },
    { text: "我喜欢保留选项，不喜欢过早做出决定。", dimension: "J-P" }
];

// MBTI类型描述
const mbtiTypes = {
    ISTJ: {
        name: "物流师型",
        description: "ISTJ型的人是认真、负责的，他们尊重传统和秩序。他们是可靠的、务实的，喜欢用实际的方法解决问题。ISTJ型的人注重细节，有很强的责任感，他们会认真完成自己的任务，并且期望别人也能如此。他们是很好的组织者，能够有效地管理资源和时间。"
    },
    ISFJ: {
        name: "守护者型",
        description: "ISFJ型的人是温暖、体贴的，他们非常关注他人的感受和需求。他们是可靠的、有责任感的，喜欢帮助别人。ISFJ型的人注重细节，有很强的记忆力，他们能够记住关于他人的重要信息。他们是很好的倾听者，能够理解他人的情感。"
    },
    INFJ: {
        name: "提倡者型",
        description: "INFJ型的人是理想主义者，他们有强烈的价值观和使命感。他们是富有洞察力的，能够理解他人的内心世界。INFJ型的人注重和谐，喜欢帮助他人成长和发展。他们是很好的顾问，能够提供有价值的建议。"
    },
    INTJ: {
        name: "建筑师型",
        description: "INTJ型的人是独立、理性的，他们有很强的逻辑思维能力。他们是有远见的，能够制定长远的计划。INTJ型的人注重效率，喜欢用创新的方法解决问题。他们是很好的战略家，能够看到事物的全局和本质。"
    },
    ISTP: {
        name: "鉴赏家型",
        description: "ISTP型的人是冷静、务实的，他们喜欢探索和理解事物的工作原理。他们是很好的问题解决者，能够在压力下保持冷静。ISTP型的人注重实际，喜欢动手操作，他们是很好的技术专家。"
    },
    ISFP: {
        name: "探险家型",
        description: "ISFP型的人是敏感、温柔的，他们喜欢艺术和美感。他们是很好的观察者，能够注意到周围环境的细节。ISFP型的人注重当下，喜欢享受生活中的美好时刻。他们是很好的艺术家，能够用各种形式表达自己的情感。"
    },
    INFP: {
        name: "调停者型",
        description: "INFP型的人是理想主义者，他们有强烈的个人价值观。他们是富有创造力的，能够产生新的想法和概念。INFP型的人注重和谐，喜欢帮助他人实现自己的潜力。他们是很好的作家和艺术家，能够用文字和艺术表达自己的情感。"
    },
    INTP: {
        name: "逻辑学家型",
        description: "INTP型的人是好奇、理性的，他们喜欢探索和理解复杂的概念。他们是很好的分析者，能够发现事物的规律和本质。INTP型的人注重逻辑，喜欢用科学的方法解决问题。他们是很好的科学家和思想家。"
    },
    ESTP: {
        name: "企业家型",
        description: "ESTP型的人是活跃、冒险的，他们喜欢刺激和挑战。他们是很好的社交者，能够与各种人相处。ESTP型的人注重实际，喜欢动手操作，他们是很好的销售者和谈判者。"
    },
    ESFP: {
        name: "表演者型",
        description: "ESFP型的人是热情、友好的，他们喜欢成为焦点。他们是很好的娱乐者，能够让周围的人感到快乐。ESFP型的人注重当下，喜欢享受生活中的美好时刻。他们是很好的演员和主持人。"
    },
    ENFP: {
        name: "竞选者型",
        description: "ENFP型的人是热情、富有创造力的，他们有很多想法和计划。他们是很好的激励者，能够鼓励他人追求自己的梦想。ENFP型的人注重和谐，喜欢帮助他人成长和发展。他们是很好的教练和顾问。"
    },
    ENTP: {
        name: "辩论家型",
        description: "ENTP型的人是聪明、好奇的，他们喜欢挑战和辩论。他们是很好的创新者，能够产生新的想法和概念。ENTP型的人注重逻辑，喜欢用理性的方法解决问题。他们是很好的发明家和企业家。"
    },
    ESTJ: {
        name: "执行官型",
        description: "ESTJ型的人是务实、负责的，他们喜欢有计划、有组织的生活方式。他们是很好的领导者，能够有效地管理团队和资源。ESTJ型的人注重效率，喜欢用实际的方法解决问题。他们是很好的管理者和组织者。"
    },
    ESFJ: {
        name: "领事型",
        description: "ESFJ型的人是友好、体贴的，他们非常关注他人的感受和需求。他们是很好的组织者，能够有效地管理社交活动。ESFJ型的人注重和谐，喜欢帮助他人。他们是很好的志愿者和社区工作者。"
    },
    ENFJ: {
        name: "主人公型",
        description: "ENFJ型的人是热情、富有魅力的，他们有很强的领导能力。他们是很好的激励者，能够鼓励他人追求自己的梦想。ENFJ型的人注重和谐，喜欢帮助他人成长和发展。他们是很好的教师和教练。"
    },
    ENTJ: {
        name: "指挥官型",
        description: "ENTJ型的人是自信、果断的，他们有很强的领导能力。他们是很好的战略家，能够制定长远的计划。ENTJ型的人注重效率，喜欢用创新的方法解决问题。他们是很好的管理者和企业家。"
    }
};

// 全局变量
let currentQuestionIndex = 0;
let answers = [];

// DOM元素
const introPage = document.getElementById('intro-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startTestBtn = document.getElementById('start-test');
const questionText = document.getElementById('question-text');
const optionBtns = document.querySelectorAll('.option-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const questionCounter = document.getElementById('question-counter');
const mbtiTypeElement = document.getElementById('mbti-type');
const personalityDescription = document.getElementById('personality-description');
const attitudeResult = document.getElementById('attitude-result');
const perceptionResult = document.getElementById('perception-result');
const judgmentResult = document.getElementById('judgment-result');
const lifestyleResult = document.getElementById('lifestyle-result');
const attitudeScore = document.getElementById('attitude-score');
const perceptionScore = document.getElementById('perception-score');
const judgmentScore = document.getElementById('judgment-score');
const lifestyleScore = document.getElementById('lifestyle-score');
const restartTestBtn = document.getElementById('restart-test');

// 初始化
function init() {
    // 绑定事件监听器
    startTestBtn.addEventListener('click', startTest);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartTestBtn.addEventListener('click', restartTest);
    
    optionBtns.forEach(btn => {
        btn.addEventListener('click', selectOption);
    });
    
    // 初始化答案数组
    answers = new Array(questions.length).fill(null);
}

// 开始测试
function startTest() {
    introPage.classList.remove('active');
    testPage.classList.add('active');
    loadQuestion(0);
}

// 加载问题
function loadQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    questionCounter.textContent = `问题 ${index + 1} / ${questions.length}`;
    
    // 更新进度条
    const progressPercentage = ((index + 1) / questions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
    
    // 重置选项状态
    optionBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 如果已有答案，高亮显示
    if (answers[index] !== null) {
        optionBtns.forEach(btn => {
            if (parseInt(btn.dataset.score) === answers[index]) {
                btn.classList.add('selected');
            }
        });
    }
    
    // 更新导航按钮状态
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? '查看结果' : '下一题';
}

// 选择选项
function selectOption(e) {
    // 移除所有选项的选中状态
    optionBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加当前选项的选中状态
    const selectedBtn = e.target;
    selectedBtn.classList.add('selected');
    
    // 保存答案
    answers[currentQuestionIndex] = parseInt(selectedBtn.dataset.score);
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// 下一题
function nextQuestion() {
    // 如果当前题没有回答，提示用户
    if (answers[currentQuestionIndex] === null) {
        alert('请选择一个答案后再继续');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        // 计算结果
        calculateResult();
    }
}

// 计算结果
function calculateResult() {
    // 计算各维度得分
    let scores = {
        'E': 0,
        'I': 0,
        'S': 0,
        'N': 0,
        'T': 0,
        'F': 0,
        'J': 0,
        'P': 0
    };
    
    questions.forEach((question, index) => {
        const answer = answers[index];
        const dimension = question.dimension;
        
        switch (dimension) {
            case 'E-I':
                if (answer <= 3) {
                    scores['I'] += (6 - answer);
                } else {
                    scores['E'] += answer;
                }
                break;
            case 'S-N':
                if (answer <= 3) {
                    scores['S'] += (6 - answer);
                } else {
                    scores['N'] += answer;
                }
                break;
            case 'T-F':
                if (answer <= 3) {
                    scores['F'] += (6 - answer);
                } else {
                    scores['T'] += answer;
                }
                break;
            case 'J-P':
                if (answer <= 3) {
                    scores['P'] += (6 - answer);
                } else {
                    scores['J'] += answer;
                }
                break;
        }
    });
    
    // 确定MBTI类型
    const mbtiType = 
        (scores['E'] > scores['I'] ? 'E' : 'I') +
        (scores['S'] > scores['N'] ? 'S' : 'N') +
        (scores['T'] > scores['F'] ? 'T' : 'F') +
        (scores['J'] > scores['P'] ? 'J' : 'P');
    
    // 显示结果
    showResult(mbtiType, scores);
}

// 显示结果
function showResult(mbtiType, scores) {
    // 切换到结果页
    testPage.classList.remove('active');
    resultPage.classList.add('active');
    
    // 更新结果内容
    mbtiTypeElement.textContent = mbtiType;
    personalityDescription.textContent = mbtiTypes[mbtiType].description;
    
    // 更新各维度结果
    attitudeResult.textContent = scores['E'] > scores['I'] ? `外向 (E)` : `内向 (I)`;
    perceptionResult.textContent = scores['S'] > scores['N'] ? `感觉 (S)` : `直觉 (N)`;
    judgmentResult.textContent = scores['T'] > scores['F'] ? `思考 (T)` : `情感 (F)`;
    lifestyleResult.textContent = scores['J'] > scores['P'] ? `判断 (J)` : `感知 (P)`;
    
    // 更新各维度分值
    attitudeScore.textContent = `E:${scores['E']} / I:${scores['I']}`;
    perceptionScore.textContent = `S:${scores['S']} / N:${scores['N']}`;
    judgmentScore.textContent = `T:${scores['T']} / F:${scores['F']}`;
    lifestyleScore.textContent = `J:${scores['J']} / P:${scores['P']}`;
}

// 重新测试
function restartTest() {
    // 重置变量
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    
    // 切换到首页
    resultPage.classList.remove('active');
    introPage.classList.add('active');
    
    // 重置进度条
    progress.style.width = '0%';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);