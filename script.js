// MBTI测试问题数据
const questions = [
    { text: "当你要出外一整天，你会不会", options: [
        { text: "A、计划你要做什么和在什么时候做", score: { J: 1 } },
        { text: "B、说去就去", score: { P: 1 } }
    ]},
    { text: "你认为自己是一个", options: [
        { text: "A、较为随性所至的人", score: { P: 1 } },
        { text: "B、较为有条理的人", score: { J: 1 } }
    ]},
    { text: "假如你是一位老师，你会选教", options: [
        { text: "A、以事实为主的课程", score: { S: 1 } },
        { text: "B、涉及理论的课程", score: { N: 1 } }
    ]},
    { text: "你通常", options: [
        { text: "A、与人容易混熟", score: { E: 1 } },
        { text: "B、比较沉静和矜持", score: { I: 1 } }
    ]},
    { text: "一般来说，你和那些人比较合得来？", options: [
        { text: "A、富于想象力的人", score: { N: 1 } },
        { text: "B、现实的人", score: { S: 1 } }
    ]},
    { text: "你是否经常让", options: [
        { text: "A、你的情感支配你的理智", score: { F: 1 } },
        { text: "B、你的理智主宰你的情感", score: { T: 1 } }
    ]},
    { text: "处理许多事情上，你会喜欢", options: [
        { text: "A、凭兴之所至行事", score: { P: 1 } },
        { text: "B、按照计划行事", score: { J: 1 } }
    ]},
    { text: "你是否", options: [
        { text: "A、容易让人了解", score: { E: 1 } },
        { text: "B、难于让人了解", score: { I: 1 } }
    ]},
    { text: "按照程序表做事，是否", options: [
        { text: "A、合你心意", score: { J: 1 } },
        { text: "B、令你感到束缚", score: { P: 1 } }
    ]},
    { text: "当你有一份特别的任务，你会喜欢", options: [
        { text: "A、开始前小心组织计划", score: { J: 1 } },
        { text: "B、边做边找需做什么", score: { P: 1 } }
    ]},
    { text: "在大多数情况下，你会选择", options: [
        { text: "A、顺其自然", score: { P: 1 } },
        { text: "B、按程序表做事", score: { J: 1 } }
    ]},
    { text: "大多数人会说你是一个", options: [
        { text: "A、重视自我隐私的人", score: { I: 1 } },
        { text: "B、非常坦率开放的人", score: { E: 1 } }
    ]},
    { text: "你宁愿被人认为是一个", options: [
        { text: "A、实事求是的人", score: { S: 1 } },
        { text: "B、机灵的人", score: { N: 1 } }
    ]},
    { text: "在一大群人当中，通常是", options: [
        { text: "A、你介绍大家认识", score: { E: 1 } },
        { text: "B、别人介绍你", score: { I: 1 } }
    ]},
    { text: "你会跟哪些人做朋友？", options: [
        { text: "A、常提出新主意的", score: { N: 1 } },
        { text: "B、脚踏实地的", score: { S: 1 } }
    ]},
    { text: "你倾向", options: [
        { text: "A、重视感情多于逻辑", score: { F: 1 } },
        { text: "B、重视逻辑多于感情", score: { T: 1 } }
    ]},
    { text: "你比较喜欢", options: [
        { text: "A、坐观事情发展才做计划", score: { P: 1 } },
        { text: "B、很早就做计划", score: { J: 1 } }
    ]},
    { text: "你喜欢花很多的时间", options: [
        { text: "A、一个人独处", score: { I: 1 } },
        { text: "B、和别人在一起", score: { E: 1 } }
    ]},
    { text: "与很多人在一起会否", options: [
        { text: "A、令你活力倍增", score: { E: 1 } },
        { text: "B、常常令你心力交瘁", score: { I: 1 } }
    ]},
    { text: "你比较喜欢", options: [
        { text: "A、很早便把约会、社交聚集等事情安排妥当", score: { J: 1 } },
        { text: "B、无拘无束，看当时有什么好玩就做什么", score: { P: 1 } }
    ]},
    { text: "计划一个旅程时，你较喜欢", options: [
        { text: "A、大部分时间都是跟当天的感觉行事", score: { P: 1 } },
        { text: "B、事先知道大部分的日子会做什么", score: { J: 1 } }
    ]},
    { text: "在社交聚会中，你是否", options: [
        { text: "A、有时感到烦闷", score: { I: 1 } },
        { text: "B、常常乐在其中", score: { E: 1 } }
    ]},
    { text: "你通常是否", options: [
        { text: "A、和别人容易混熟", score: { E: 1 } },
        { text: "B、趋向自处一隅", score: { I: 1 } }
    ]},
    { text: "哪些人会更吸引你？", options: [
        { text: "A、一个思想敏捷及非常聪颖的人", score: { N: 1 } },
        { text: "B、实事求是，具丰富常识的人", score: { S: 1 } }
    ]},
    { text: "在日常工作中，你会", options: [
        { text: "A、颇为喜欢处理迫使你分秒必争的突发事件", score: { P: 1 } },
        { text: "B、通常预先计划，以免要在压力下工作", score: { J: 1 } }
    ]},
    { text: "你认为别人一般", options: [
        { text: "A、要花很长时间才认识你", score: { I: 1 } },
        { text: "B、用很短的时间便认识你", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、注重隐私", score: { I: 1 } },
        { text: "B、坦率开放", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、预先安排的", score: { J: 1 } },
        { text: "B、无计划的", score: { P: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、抽象", score: { N: 1 } },
        { text: "B、具体", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、温柔", score: { F: 1 } },
        { text: "B、坚定", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、思考", score: { T: 1 } },
        { text: "B、感受", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、事实", score: { S: 1 } },
        { text: "B、意念", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、冲动", score: { P: 1 } },
        { text: "B、决定", score: { J: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、热衷", score: { E: 1 } },
        { text: "B、文静", score: { I: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、文静", score: { I: 1 } },
        { text: "B、外向", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、有系统", score: { J: 1 } },
        { text: "B、随意", score: { P: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、理论", score: { N: 1 } },
        { text: "B、肯定", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、敏感", score: { F: 1 } },
        { text: "B、公正", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、令人信服", score: { T: 1 } },
        { text: "B、感人的", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、声明", score: { S: 1 } },
        { text: "B、概念", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、不受约束", score: { P: 1 } },
        { text: "B、预先安排", score: { J: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、矜持", score: { I: 1 } },
        { text: "B、健谈", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、有条不紊", score: { J: 1 } },
        { text: "B、不拘小节", score: { P: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、意念", score: { N: 1 } },
        { text: "B、实况", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、同情怜悯", score: { F: 1 } },
        { text: "B、远见", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、利益", score: { T: 1 } },
        { text: "B、祝福", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、务实的", score: { S: 1 } },
        { text: "B、理论的", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、朋友不多", score: { I: 1 } },
        { text: "B、朋友众多", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、有系统", score: { J: 1 } },
        { text: "B、即兴", score: { P: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、富想象的", score: { N: 1 } },
        { text: "B、以事论事", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、亲切的", score: { F: 1 } },
        { text: "B、客观的", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、客观的", score: { T: 1 } },
        { text: "B、热情的", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、建造", score: { S: 1 } },
        { text: "B、发明", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、文静", score: { I: 1 } },
        { text: "B、爱合群", score: { E: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、理论", score: { N: 1 } },
        { text: "B、事实", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、富同情", score: { F: 1 } },
        { text: "B、和逻辑", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、据分析力", score: { T: 1 } },
        { text: "B、多愁善感", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、合情合理", score: { T: 1 } },
        { text: "B、令人着迷", score: { F: 1 } }
    ]},
    { text: "当你要在一个星期内完成一个大项目，你在开始的时候就会", options: [
        { text: "A、把要做的不同工作依次列出", score: { J: 1 } },
        { text: "B、马上动工", score: { P: 1 } }
    ]},
    { text: "在社交场合中，你经常会感到", options: [
        { text: "A、与某些人很难打开话匣子和保持对话", score: { I: 1 } },
        { text: "B、与多数人都能从容地长谈", score: { E: 1 } }
    ]},
    { text: "要做许多人也做的事，你比较喜欢", options: [
        { text: "A、按照一般人认可的方法去做", score: { S: 1 } },
        { text: "B、构想一个自己的方法", score: { N: 1 } }
    ]},
    { text: "你刚认识的朋友能否说出你的兴趣？", options: [
        { text: "A、马上可以", score: { E: 1 } },
        { text: "B、要待他们真正了解你之后才可以", score: { I: 1 } }
    ]},
    { text: "你通常较喜欢的科目是", options: [
        { text: "A、讲授概念和原则的", score: { N: 1 } },
        { text: "B、讲授事实和数据的", score: { S: 1 } }
    ]},
    { text: "哪个是较高的赞誉？获称许为", options: [
        { text: "A、一贯感性的人", score: { F: 1 } },
        { text: "B、一贯理性的人", score: { T: 1 } }
    ]},
    { text: "你认为按照程序表做事", options: [
        { text: "A、有时是需要的，但一般来说你不大喜欢这样做", score: { P: 1 } },
        { text: "B、大多数情况下是有帮助而且是你喜欢做的", score: { J: 1 } }
    ]},
    { text: "和一群人在一起，你通常会选", options: [
        { text: "A、跟你很熟络的人个别谈话", score: { I: 1 } },
        { text: "B、参与大伙儿的谈话", score: { E: 1 } }
    ]},
    { text: "在社交聚会中，你会", options: [
        { text: "A、是说话很多的一个", score: { E: 1 } },
        { text: "B、让别人多说话", score: { I: 1 } }
    ]},
    { text: "把在周末期间要完成的事列成清单，这个主意会", options: [
        { text: "A、合你心意", score: { J: 1 } },
        { text: "B、使你提不起劲", score: { P: 1 } }
    ]},
    { text: "哪个是较高的赞誉？获称许为", options: [
        { text: "A、能干的", score: { T: 1 } },
        { text: "B、富有同情心的", score: { F: 1 } }
    ]},
    { text: "你通常喜欢", options: [
        { text: "A、事先安排你的社交约会", score: { J: 1 } },
        { text: "B、随兴之所至做事", score: { P: 1 } }
    ]},
    { text: "总的来说，要做一个大型作业时，你会选", options: [
        { text: "A、边做边想该做什么", score: { P: 1 } },
        { text: "B、首先把工作按部细分", score: { J: 1 } }
    ]},
    { text: "你能否滔滔不绝地与人聊天？", options: [
        { text: "A、只限于跟你有共同兴趣的人", score: { I: 1 } },
        { text: "B、几乎跟任何人都可以", score: { E: 1 } }
    ]},
    { text: "你会", options: [
        { text: "A、跟随一些证明有效的方法", score: { S: 1 } },
        { text: "B、分析还有什么毛病，及针对尚未解决的难题", score: { N: 1 } }
    ]},
    { text: "为乐趣而阅读时，你会", options: [
        { text: "A、喜欢奇特或创新的表达方式", score: { N: 1 } },
        { text: "B、喜欢作者直话直说", score: { S: 1 } }
    ]},
    { text: "你宁愿替哪一类上司（或者老师）工作？", options: [
        { text: "A、天性纯良，但常常前后不一的", score: { F: 1 } },
        { text: "B、言辞尖锐但永远合逻辑的", score: { T: 1 } }
    ]},
    { text: "你做事多数是", options: [
        { text: "A、按当天心情去做", score: { P: 1 } },
        { text: "B、照拟好的程序表去做", score: { J: 1 } }
    ]},
    { text: "你是否", options: [
        { text: "A、可以与任何人按需要从容地交谈", score: { E: 1 } },
        { text: "B、只是对某些人或是在某种情况下才可以畅所欲言", score: { I: 1 } }
    ]},
    { text: "要做决定时，你认为比较重要的是", options: [
        { text: "A、据事实衡量", score: { T: 1 } },
        { text: "B、考虑他人的感受和意见", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、富想象", score: { N: 1 } },
        { text: "B、真实的", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、仁慈慷慨的", score: { F: 1 } },
        { text: "B、意志坚定的", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、公正的", score: { T: 1 } },
        { text: "B、有关怀心的", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、制作", score: { S: 1 } },
        { text: "B、设计", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、可能性", score: { N: 1 } },
        { text: "B、必然性", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、温柔", score: { F: 1 } },
        { text: "B、力量", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、实际", score: { S: 1 } },
        { text: "B、多愁善感", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、制造", score: { S: 1 } },
        { text: "B、创造", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、新颖的", score: { N: 1 } },
        { text: "B、已知的", score: { S: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、同情", score: { F: 1 } },
        { text: "B、分析", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、坚持己见", score: { T: 1 } },
        { text: "B、温柔有爱心", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、具体的", score: { S: 1 } },
        { text: "B、抽象的", score: { N: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、全心投入", score: { F: 1 } },
        { text: "B、有决心的", score: { T: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、能干", score: { T: 1 } },
        { text: "B、仁慈", score: { F: 1 } }
    ]},
    { text: "在下列每一对词语中，哪一个词语更合你心意？", options: [
        { text: "A、实际", score: { S: 1 } },
        { text: "B、创新", score: { N: 1 } }
    ]}
];

// MBTI类型描述
const mbtiTypes = {
    "ISTJ": {
        name: "ISTJ - 物流师型",
        description: "ISTJ型的人是严肃的、有责任心的和通情达理的社会坚定分子。他们值得信赖，他们重视承诺，对他们来说，言语就是庄严的宣誓。ISTJ型的人工作缜密，讲求实际，很有头脑也很现实。他们具有很强的集中力、条理性和 准确性。无论他们做什么，都相当有条理和可靠。他们具有坚定不移、深思熟虑的思想，一旦他们着手自己相信是最好的行动方法时，就很难转变或变得沮丧。ISTJ型的人特别安静和勤奋，对于细节有很强的记忆和判断。他们能够引证准确的事实支持自己的观点，把过去的经历运用到现在的决策中。他们重视和利用符合逻辑、客观的分析，以坚持不懈的态度准时地完成工作，并且总是安排有序，很有条理。他们重视必要的理论体系和传统 惯例，对于那些不是如此做事的人则很不耐烦。ISTJ型的人总是很传统、谨小慎微。他们聆听和喜欢确实、清晰地陈述事物。ISTJ型的人天生不喜欢显露，即使危机之时，也显得很平静。他们总是显得责无旁贷、坚定不变、但是在他们冷静的外表之下，也许有强烈却很少表露的反应。"
    },
    "ISFJ": {
        name: "ISFJ - 守卫者型",
        description: "ISFJ型的人忠诚、有奉献精神和同情心，理解别人的感受。他们意志清醒而有责任心，乐于为人所需。ISFJ型的人十分务实，他们喜欢平和谦逊的人。他们喜欢利用大量的事实情况，对于细节则有很强的记力。他们耐心地对待任务的整个阶段，喜欢事情能够清晰明确。ISFJ型的人具有强烈的职业道德，所以他们如果知道自己的行为真正有用时，会对需要完成之事承担责任。他们准确系统地完成任务。他们具有传统的价值观，十分保守。他们利用符合实际的判断标准做决定，通过出色的注重实际的态度增加了稳定性。ISFJ型的人平和谦虚、勤奋严肃。他们温和、圆通，支持朋友和同伴。他们乐于协助别人，喜欢实际可行地帮助他人。他们利用个人热情与人交往，在困难中与他人和睦相处。ISFJ型的人不喜欢表达个人情感，但实际上对于大多数的情况和事件都具有强烈的个人反应。他们关心、保护朋友，愿意为朋友献身，他们有为他人服务的意识，愿意完成他们的责任和义务。"
    },
    "INFJ": {
        name: "INFJ - 提倡者型",
        description: "INFJ型的人生活在思想的世界里。他们是独立的、有独创性的思想家，具有强烈的感情、坚定的原则和正直的人性。他们信任自己的洞察力，习惯于按照自己的意愿行事，即使自己的意愿与他人的期望不符。INFJ型的人忠诚、坚定、富有理想。他们珍视正直，十分坚定以至达到倔强的地步。因为他们的说服能力，以及对于什么对公共利益最有利有清楚的看法，所以 INFJ型的人会成为伟大的领导者。由于他们的贡献，他们通常会受到尊重或敬佩。INFJ型的人外表平静、沉默、思想深邃。他们谨慎而敏感，人道主义和同情心往往使他们对别人的情感体贴入微。他们都有一个交往广泛、非常私密的小圈子，在这个圈子里，他们能找到合适的人分享他们真正的感受。INFJ型的人具有强烈的艺术敏感性和创造力，他们做事坚决，有计划而且有创造性，他们具有强烈的洞察力，相信灵感的作用。他们对现实以外的可能性，以及对他人的隐藏动机和可能性都有很强的感觉。INFJ型的人是完美主义者，对自己和对他人的要求都很严格。他们具有强烈的价值观念，需要使自己所做的事情符合自己的价值观。他们有很好的个人品德，对于责任有强烈的使命感。"
    },
    "INTJ": {
        name: "INTJ - 建筑师型",
        description: "INTJ型的人是完美主义者。他们强烈地要求个人自由和能力，同时在他们独创的思想中，不可动摇的信仰促使他们达到目标。INTJ型的人思维严谨、有逻辑性、足智多谋，他们能够看到新计划实行后的结果。他们对自己和别人都很苛求，往往几乎同样强硬地逼迫别人和自己。他们并不十分受冷漠与批评的干扰，作为所有性格类型中最独立的，INTJ型的人更喜欢以自己的方式行事。面对相反意见，他们通常持怀疑态度，十分坚定和坚决。权威本身不能强制地们，只有他们认为这些规则对自己的更重要的目标有用时，才会去遵守。INTJ型的人是天生的谋略家，具有独特的思想、伟大的远见和梦想。他们天生精于理论，对于复杂而综合的概念运转灵活。他们是优秀的战略思想家，通常能清楚地看到任何局势的利处和缺陷。对于感兴趣的问题，他们是出色的、具有远见和见解的组织者。如果是他们自己形成的看法和计划，他们会投入不可思议的注意力、能量和积极性。领先到达或超过自己的高标准的决心和坚忍不拔，使他们获得许多成就。"
    },
    "ISTP": {
        name: "ISTP - 鉴赏家型",
        description: "ISTP型的人坦率、诚实、讲求实效，他们喜欢行动而非漫谈。他们很谦逊，对于完成工作的方法有很好的理解力。ISTP型的人擅长分析，所以他们对客观含蓄的原则很有兴趣。他们对于技巧性的事物有天生的理解力，通常精于使用工具和进行手工劳动。他们往往做出有条理而保密的决定，他们仅仅是按照自己所看到的、有条理而直接地陈述事实。ISTP型的人好奇心强，而且善于观察，只有理性、可靠的事实才能使他们信服。他们重视事实，简直就是有关他们知之甚深的知识的宝库。他们是现实主义者，所以能够很好地利用可获得的资源，同时他们擅于把握时机，这使他们变得很讲求实效。ISTP型的人平和而寡言，往往显得冷酷而清高，而且容易害羞，除了是与好朋友在一起时。他们平等、公正。他们往往受冲动的驱使，对于即刻的挑战和问题具有相当的适应性和反应能力。因为他们喜欢行动和兴奋的事情，所以他们乐于户外活动和运动。"
    },
    "ISFP": {
        name: "ISFP - 探险家型",
        description: "ISFP型的人平和、敏感，他们保持着许多强烈的个人理想和自己的价值观念。他们更多地是通过行为而不是言辞表达自己深沉的情感。ISFP型的人谦虚而缄默，但实际上他们是具有巨大的友受和热情之人，但是除了与他们相知和信赖的人在一起外，他们不经常表现出自我的另一面。因为ISFP型的人不喜欢直接地自我表达，所以常常被误解。ISFP型的人耐心、灵活，很容易与他人相处，很少支配或控制别人。他们很客观，以一种相当实事求是的方式接受他人的行为。他们善于观察周围的人和物，却不寻求发现动机和含义。ISFP型的人完全生活在现在，所以他们的准备或计划往往不会多于必需，他们是很好的短期计划制定者。因为他们喜欢享受目前的经历，而不继续向下一个目标兑现，所以他们对完成工作感到很放松。ISFP型的人对于从经历中直接了解和感受的东西很感兴趣，常常富有艺术天赋和审美感，力求为自己创造一个美丽而隐蔽的环境。没有想要成为领导者，ISFP型的人经常是忠诚的追随者和团体成员。因为他们利用个人的价值标准去判断生活中的每一件事，所以他们喜欢那些花费时间去认识他们和理解他们内心的忠诚之人。他们需要最基本的信任和理解，在生活中需要和睦的人际关系，对于冲突和分歧则很敏感。"
    },
    "INFP": {
        name: "INFP - 调停者型",
        description: "INFP把内在的和谐视为高于其他一切。他们敏感、理想化、忠诚，对于个人价值具有一种强烈的荣誉感。他们个人信仰坚定，有为自认为有价值的事业献身的精神。INFP型的人对于已知事物之外的可能性很感兴趣，精力集中于他们的梦想和想象。他们思维开阔、有好奇心和洞察力，常常具有出色的长远眼光。在日常事务中，他们通常灵活多变、具有忍耐力和适应性，但是他们非常坚定地对待内心的忠诚，为自己设定了事实上几乎是不可能的标准。INFP型的人具有许多使他们忙碌的理想和忠诚。他们十分坚定地完成自己所选择的事情，他们往往承担得太多，但不管怎样总要完成每件事。虽然对外部世界他们显得冷淡缄默，但INFP型的人很关心内在。他们富有同情心、理解力，对于别人的情感很敏感。除了他们的价值观受到威胁外，他们总是避免冲突，没有兴趣强迫或支配别人。INFP型的人常常喜欢通过书写而不是口头来表达自己的感情。当INFP型的人劝说别人相信他们的想法的重要性时，可能是最有说服力的。INFP很少显露强烈的感情，常常显得沉默而冷静。然而，一旦他们与你认识了，就会变得热情友好，但往往会避免浮浅的交往。他们珍视那些花费时间去思考目标与价值的人。"
    },
    "INTP": {
        name: "INTP - 逻辑学家型",
        description: "INTP型的人是解决理性问题者。他们很有才智和条理性，以及创造才华的突出表现。INTP型的人外表平静、缄默、超然，内心却专心致志于分析问题。他们苛求精细、惯于怀疑。他们努力寻找和利用原则以理解许多想法。他们喜欢有条理和有目的的交谈，而且可能会仅仅为了高兴，争论一些无益而琐细的问题。只有有条理的推理才会使他们信服。通常INTP型的人是足智多谋、有独立见解的思考者。他们重视才智，对于个人能力有强烈的欲望，有能力也很感兴趣向他人挑战。INTP型的人最主要的兴趣在于理解明显的事物之外的可能性。他们乐于为了改进事物的目前状况或解决难题而进行思考。他们的思考方式极端复杂，而且他们能很好地组织概念和想法。偶尔，他们的想法非常复杂，以致于很难向别人表达和被他人理解。INTP型的人十分独立，喜欢冒险和富有想象力的活动。他们灵活易变、思维开阔，更感兴趣的是发现有创见而且合理的解决方法，而不是仅仅看到成为事实的解决方式。"
    },
    "ESTP": {
        name: "ESTP - 企业家型",
        description: "ESTP型的人不会焦虑，因为他们是快乐的。ESTP型的人活跃、随遇而安、天真率直。他们乐于享受现在的一切而不是为将来计划什么。ESTP型的人很现实，他们信任和依赖于自己对这个世界的感受。他们是好奇而热心的观察者。因为他们接受现在的一切，所以他们思维开阔，能够容忍自我和他人。ESTP型的人喜欢处理、分解与恢复原状的真实事物。ESTP型的人喜欢行动而不是漫谈，当问题出现时，他们乐于去处理。他们是优秀的解决问题的人，这是因为他们能够掌握必要的事实情况，然后找到符合逻辑的明智的解决途径，而无需浪费大量的努力或精力。他们会成为适宜外交谈判的人，他们乐于尝试非传统的方法，而且常常能够说服别人给他们一个妥协的机会。他们能够理解晦涩的原则，在符合逻辑的基础上，而不是基于他们对事物的感受之上做出决定。因此，他们讲求实效，在情况必须时非常强硬。在大多数的社交场合中，ESTP型的人很友善，富有魅力、轻松自如而受人欢迎。在任何有他们的场合中，他们总是爽直、多才多艺和有趣，总有没完没了的笑话和故事。他们善于通过缓和气氛以及使冲突的双方相互协调，从而化解紧张的局势。"
    },
    "ESFP": {
        name: "ESFP - 表演者型",
        description: "ESFP型的人乐意与人相处，有一种真正的生活热情。他们顽皮活泼，通过真诚和玩笑使别人感到事情更加有趣。ESFP型的人脾气随和、适应性强，热情友好和慷慨大方。他们擅长交际，常常是别人的'注意中心'。他们热情而乐于合作地参加各种活动和节目，而且通常立刻能应对几种活动。ESFP型的人是现实的观察者，他们按照事物的本身去对待并接受它们。他们往往信任自己能够听到、闻到、触摸和看到的事物，而不是依赖于理论上的解释。因为他们喜欢具体的事实，对于细节有很好的记忆力，所以他们能从亲身的经历中学到最好的东西。共同的感觉给予他们与人和物相处的实际能力。他们喜欢收集信息，从中观察可能自然出现的解决方法。ESFP型的人对于自我和他人都能容忍和接受，往往不会试图把自己的愿望强加于他人。ESFP型的人通融和有同情心，通常许多人都真心地喜欢他们。他们能够让别人采纳他们的建议，所以他们很擅于帮助冲突的各方重归于好。他们寻求他人的陪伴，是很好的交淡者。他们乐于帮助旁人，偏好以真实有形的方式给予协助。ESFP型的人天真率直，很有魅力和说服力。他们喜欢意料不到的事情，喜欢寻找给他人带来愉快和意外惊喜的方法。"
    },
    "ENFP": {
        name: "ENFP - 竞选者型",
        description: "ENFP型的人充满热情和新思想。他们乐观、自然、富有创造性和自信，具有独创性的思想和对可能性的强烈感受。对于ENFP型的人来说，生活是激动人生的戏剧。ENFP型的人对可能性很感兴趣，所以他们了解所有事物中的深远意义。他们具有洞察力，是热情的观察者，注意常规以外的任何事物。ENFP型的人好奇，喜欢理解而不是判断。ENFP型的人具有想象力、适应性和可变性，他们视灵感高于一切，常常是足智多谋的发明人。ENFP型的人不墨守成规，善于发现做事情的新方法，为思想或行为开辟新道路，并保持它们的开放。在完成新颖想法的过程中，ENFP型的人依赖冲动的能量。他们有大量的主动性，认为问题令人兴奋。他们也从所处的周围其他人中得到能量，把自己的才能与别人的力量成功地结合在一起。ENFP型的人具有魅力、充满生机。他们待人热情、彬彬有礼、富有同情心，愿意帮助别人解决问题。他们具有出色的洞察力和观察力，常常关心他人的发展。ENFP型的人避免冲突，喜欢和睦。他们把更多的精力倾注于维持个人关系而不是客观事物，喜欢保持一种广泛的关系。"
    },
    "ENTP": {
        name: "ENTP - 辩论家型",
        description: "ENTP型的人喜欢兴奋与挑战。他们热情开放、足智多谋、健谈而聪明，擅长于许多事情，不断追求增加能力和个人权力。ENTP型的人天生富有想象力，他们深深地喜欢新思想，留心一切可能性。他们有很强的首创精神，善于运用创造冲动。ENTP型的人视灵感高于其他的一切，力求使他们的新颖想法转变为现实。他们好奇、多才多艺、适应性强，在解决挑战性和理论性问题时善于随机应变。ENTP型的人灵活而率直，能够轻易地看出任何情况中的缺点，乐于出于兴趣争论问题的某方面。他们有极好的分析能力，是出色的策略谋划者。他们几乎一直能够为他们所希望的事情找出符合逻辑的推理。大多数的ENTP型人喜欢审视周围的环境，认为多数的规则和章程如果不被打破，便意味着屈从。有时他们的态度不从习俗，乐于帮助别人超出可被接受和被期望的事情。他们喜欢自在地生活，在每天的生活中寻找快乐和变化。ENTP型的人富有想象力地处理社会关系，常常有许多的朋友和熟人。他们表现得很乐观，具有幽默感。ENTP型的人吸引和鼓励同伴，通过他们富有感染力的热情，鼓舞别人加入他们的行动中。他们喜欢努力理解和回应他人，而不是判断他人。"
    },
    "ESTJ": {
        name: "ESTJ - 总经理型",
        description: "ESTJ型的人高效率地工作，自我负责，监督他人工作，合理分配和处置资源，主次分明，井井有条；能制定和遵守规则，多喜欢在制度健全、等级分明、比较稳定的企业工作；倾向于选择较为务实的业务，以有形产品为主；喜欢工作中带有和人接触、交流的成分，但不以态度取胜；不特别强调工作的行业或兴趣，多以职业角度看待每一份工作。ESTJ型的人很善于完成任务；他们喜欢操纵局势和促使事情发生；他们具有责任感，信守他们的承诺。他们喜欢条理性并且能记住和组织安排许多细节。他们及时和尽可能高效率地、系统地开始达到目标。ESTJ型的人被迫做决定。他们常常以自己过去的经历为基础得出结论。他们很客观，有条理性和分析能力，以及很强的推理能力。事实上，除了符合逻辑外，其他没有什么可以使他们信服。同时，ESTJ型的人又很现实、有头脑、讲求实际。他们更感兴趣的是实际的事物，而不是诸如抽象的想法和理论等无形的东西。他们往往对那些认为没有实用价值的东西不感兴趣。他们知道自己周围将要发生的事情，而首要关心的则是目前。ESTJ型的人讲求实际，越是任务型的工作越能发挥特长。大多数ESTJ型的人觉得传统、真诚、砂砾的家庭生活非常重要，他们会很好地维护自己的家庭价值观。他们喜欢和家人聚在一起。ESTJ型的人总是处于忙碌中，有时会让自己变得粗心，容易忽视他人的情感，变得武断，强迫别人接受自己的意见和价值观。"
    },
    "ESFJ": {
        name: "ESFJ - 执政官型",
        description: "ESFJ型的人通过直接的行动和合作积极地以真实、实际的方法帮助别人。他们友好、富有同情心和责任感。ESFJ型的人把他们同别人的关系放在十分重要的位置，所以他们往往具有和睦的人际关系，并且通过很大的努力以获得和维持这种关系。事实上，他们常常理想化自己欣赏的人或物。ESFJ型的人往往对自己以及自己的成绩十分欣赏，因而他们对于批评或者别人的漠视很敏感。通常他们很果断，表达自己的坚定的主张，乐于事情能很快得到解决。ESFJ型的人很现实，他们讲求实际、实事求是和安排有序。他们参与并能记住重要的事情和细节，乐于别人也能对自己的事情很确信。他们在自己的个人经历或在他们所信赖之人的经验之上制定计划或得出见解。他们知道并参与周围的物质世界，并喜欢具有主动性和创造性。ESFJ型的人十分小心谨慎，也非常传统化，因而他们能恪守自己的责任与承诺。他们支持现存制度，往往是委员会或组织机构中积极主动和乐于合作的成员，他们重视并能保持很好的社交关系。他们不辞劳苦地帮助他人，尤其在遇到困难或取得成功时，他们都很积极活跃。"
    },
    "ENFJ": {
        name: "ENFJ - 主人公型",
        description: "ENFJ型的人热爱人类，他们认为人的感情是最重要的。而且他们很自然地关心别人，以热情的态度对待生命，感受与个人相关的所有事物。由于他们很理想化，按照自己的价值观生活，因此ENFJ型的人对于他们所尊重和敬佩的人、事业和机构非常忠诚。他们精力充沛、满腔热情、富有责任感、勤勤勤恳恳、锲而不舍。ENFJ型的人具有自我批评的自然倾向。然而，他们对他人的情感具有责任心，所以ENFJ型的人很少在公共场合批评人。他们敏锐地意识到什么是（或不是）合适的行为。他们彬彬有礼、富有魅力、讨人喜欢、深谙社会。ENFJ型的人具有平和的性格与忍耐力，他们长于外交，擅长在自己的周围激发幽默感。他们是天然的领导者，受人欢迎而有魅力。他们常常得利于自己口头表达的天份，愿意成为出色的传播工作者。ENFJ型的人在自已对情况感受的基础上做决定，而不是基于事实本身。他们对显而易见的事物之外的可能性，以及这些可能性以怎样的方式影响他人感兴趣。ENFJ型的人天生具有条理性，他们喜欢一种有安排的世界，并且希望别人也是如此。即使其他人正在做决定，他们还是喜欢把问题解决了。ENFJ型的人富有同情心和理解力，愿意培养和支持他人。他们能很好地理解别人，有责任感和关心他人。由于他们是理想主义者，因此他们通常能看到别人身上的优点。"
    },
    "ENTJ": {
        name: "ENTJ - 指挥官型",
        description: "ENTJ型的人是伟大的领导者和决策人。他们能轻易地看出事物具有的可能性，很高兴指导别人，使他们的想象成为现实。他们是头脑灵活的思想家和伟大的长远规划者。因为ENTJ型的人很有条理和分析能力，所以他们通常对要求推理和才智的任何事情都很擅长。为了在完成工作中称职，他们通常会很自然地看出所处情况中可能存在的缺陷，并且立刻知道如何改进。他们力求精通整个体系，而不是简单地把它们作为现存的接受而已。ENTJ型的人乐于完成一些需要解决的复杂问题，他们大胆地力求掌握使他们感兴趣的任何事情。ENTJ型的人把事实看得高于一切，只有通过逻辑的推理才会确信。ENTJ型的人渴望不断增加自己的知识基础，他们系统地计划和研究新情况。他们乐于钻研复杂的理论性问题，力求精通任何他们认为有趣的事物。他们对于行为的未来结果更感兴趣，而不是事物现存的状况。ENTJ型的人是热心而真诚的天生领导者，他们往往能够控制他们所处的任何环境。因为他们具有预见能力，并且向别人传播他们的观点，所以他们是出色的群众组织者。他们往往按照一套相当严格的规律生活，并且希望别人也是如此。因此他们往往具有挑战性，同样艰难地推动自我和他人前进。"
    }
};

// DOM元素
const introPage = document.getElementById('intro-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startTestBtn = document.getElementById('start-test');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
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

// 全局变量
let currentQuestionIndex = 0;
let answers = [];

// 初始化
function init() {
    // 绑定事件监听器
    startTestBtn.addEventListener('click', startTest);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartTestBtn.addEventListener('click', restartTest);
    
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
    
    // 清空并重新创建选项按钮
    optionsContainer.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.dataset.optionIndex = optionIndex;
        
        // 如果已有答案，高亮显示
        if (answers[index] === optionIndex) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', selectOption);
        optionsContainer.appendChild(btn);
    });
    
    // 更新导航按钮状态
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? '查看结果' : '下一题';
}

// 选择选项
function selectOption(e) {
    // 移除所有选项的选中状态
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加当前选项的选中状态
    const selectedBtn = e.target;
    selectedBtn.classList.add('selected');
    
    // 保存答案
    answers[currentQuestionIndex] = parseInt(selectedBtn.dataset.optionIndex);
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
    // 如果是最后一题，计算结果
    if (currentQuestionIndex === questions.length - 1) {
        calculateResult();
    } else {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

// 计算结果
function calculateResult() {
    // 初始化分数
    const scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 计算得分
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            const option = questions[questionIndex].options[answerIndex];
            for (const [dimension, score] of Object.entries(option.score)) {
                scores[dimension] += score;
            }
        }
    });
    
    // 确定MBTI类型
    const attitude = scores.E > scores.I ? 'E' : 'I';
    const perception = scores.S > scores.N ? 'S' : 'N';
    const judgment = scores.T > scores.F ? 'T' : 'F';
    const lifestyle = scores.J > scores.P ? 'J' : 'P';
    
    // 处理同分情况
    const mbtiType = attitude + perception + judgment + lifestyle;
    
    // 显示结果
    showResult(mbtiType, scores);
}

// 显示结果
function showResult(mbtiType, scores) {
    // 切换到结果页面
    testPage.classList.remove('active');
    resultPage.classList.add('active');
    
    // 更新结果内容
    mbtiTypeElement.textContent = mbtiType;
    personalityDescription.textContent = mbtiTypes[mbtiType].description;
    
    // 更新维度结果
    attitudeResult.textContent = scores.E > scores.I ? '外向 (E)' : '内向 (I)';
    perceptionResult.textContent = scores.S > scores.N ? '实感 (S)' : '直觉 (N)';
    judgmentResult.textContent = scores.T > scores.F ? '思考 (T)' : '情感 (F)';
    lifestyleResult.textContent = scores.J > scores.P ? '判断 (J)' : '感知 (P)';
    
    // 更新维度得分
    attitudeScore.textContent = `E:${scores.E} / I:${scores.I}`;
    perceptionScore.textContent = `S:${scores.S} / N:${scores.N}`;
    judgmentScore.textContent = `T:${scores.T} / F:${scores.F}`;
    lifestyleScore.textContent = `J:${scores.J} / P:${scores.P}`;
}

// 重新测试
function restartTest() {
    // 重置全局变量
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    
    // 切换到首页
    resultPage.classList.remove('active');
    introPage.classList.add('active');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);