export interface Character {
  name: string;
  nameZh: string;
  subtitle: string;
  subtitleZh: string;
  status: string;
  statusZh: string;
  img: string;
  emoji: string;
  link: string;
  desc: string;
  descZh: string;
  death?: string;
  deathZh?: string;
}

export const ALL_CHARACTERS: Character[] = [
  {
    name: "DENJI (デンジ)",
    nameZh: "电次",
    subtitle: "Chainsaw Devil Hybrid / Protagonist",
    subtitleZh: "电锯恶魔人 · 主角",
    status: "Alive",
    statusZh: "存活",
    img: "/images/denji-anime.png",
    emoji: "⛓️",
    link: "/denji",
    desc: "A debt-ridden orphan who merges with Pochita to become Chainsaw Man. His goals are mundane — food, shelter, connection — but in Fujimoto's world, even small dreams carry a devastating price.",
    descZh: "欠债累累的孤儿，与波奇塔融合成为电锯人。他的目标平凡得可笑——食物、住所、与人交往——但在藤本树的世界里，即便是微小的梦想也要付出毁灭性的代价。"
  },
  {
    name: "REZE / LADY REZE (レゼ)",
    nameZh: "蕾塞",
    subtitle: "Bomb Devil Hybrid / Soviet Operative",
    subtitleZh: "炸弹恶魔人 · 苏联特工",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/reze-casual.png",
    emoji: "💣",
    link: "/reze",
    desc: "A Soviet assassin raised with no name, fused with the Bomb Devil. Her brief connection with Denji is the emotional heart of Part 1 — genuine, irreconcilable, and ended before it could begin.",
    descZh: "自幼被当作苏联特工培养的炸弹恶魔人，没有自己的名字。她与电次短暂的羁绊是第一部的感情核心——真实、无法调和、在还未开始时就已结束。",
    death: "Killed by Makima before she could reach Denji. She never got to see the ocean.",
    deathZh: "在前往与电次约定的海边之约前，被玛奇玛杀死。她最终也没能见到大海。"
  },
  {
    name: "POWER (パワー)",
    nameZh: "帕瓦",
    subtitle: "Blood Fiend / Division 4",
    subtitleZh: "血之魔人 · 公安对魔4课",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/power-anime.png",
    emoji: "🩸",
    link: "/power",
    desc: "A Blood Fiend who joined Public Safety under coercion. Chaotic, selfish, and secretly one of the series' most human characters — she learned what it means to love someone.",
    descZh: "被迫加入公安对魔特异的血之魔人。混乱、自私，却又暗藏着整部作品中最人性的光辉——她学会了爱一个人意味着什么。",
    death: "Shot by Makima in front of Denji — calculated cruelty designed to break him completely.",
    deathZh: "被玛奇玛在电次面前射杀——精心策划的残酷，目的是彻底摧毁电次。"
  },
  {
    name: "AKI HAYAKAWA (早川アキ)",
    nameZh: "早川秋",
    subtitle: "Public Safety Devil Hunter",
    subtitleZh: "公安恶魔猎人",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/aki-anime.png",
    emoji: "🔫",
    link: "/aki",
    desc: "A disciplined hunter who became a found-family figure to Denji and Power. His contracts cost him everything — and the Future Devil showed him exactly how it would end.",
    descZh: "纪律严明的猎人，成为了电次和帕瓦的家人。他的契约让他付出了一切——而未来恶魔早已让他看到了结局。",
    death: "Possessed by the Gun Devil and killed by Denji himself in a heartbreaking snow-covered battle.",
    deathZh: "被枪之恶魔附身，在漫天大雪中被电次亲手杀死——令人心碎的战斗。"
  },
  {
    name: "MAKIMA (マキマ)",
    nameZh: "玛奇玛",
    subtitle: "Control Devil / Public Safety Director",
    subtitleZh: "支配恶魔 · 公安局长",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/makima-anime.png",
    emoji: "👁️",
    link: "/makima",
    desc: "The Control Devil in human form. Part 1's central villain — she orchestrated everything while systematically dismantling Denji's world. She cannot conceive of equals, only those to dominate.",
    descZh: "支配恶魔的人类形态。第一部的核心反派——她策划了一切，系统性地摧毁了电次的世界。在她眼中世界没有平等，只有被支配者。",
    death: "Eaten by Denji — the only way to destroy her. She later reincarnated as Nayuta.",
    deathZh: "被电次吃掉——毁灭她的唯一方式。后转生为那由多。"
  },
  {
    name: "HIMENO (姫野)",
    nameZh: "姬野",
    subtitle: "Public Safety Devil Hunter",
    subtitleZh: "公安恶魔猎人",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/himeno-anime.png",
    emoji: "🚬",
    link: "/himeno",
    desc: "A senior hunter who gave her eye to the Ghost Devil and watched every partner die. Cynical, warm, and quietly exhausted by grief — one of the series' most humanly written characters.",
    descZh: "将眼睛献给幽灵恶魔的资深猎人，目睹了每一位搭档的死亡。愤世嫉俗、温暖、被悲伤无声压垮——藤本树笔下写的最像人的角色之一。",
    death: "Offered her entire body to the Ghost Devil to save Denji. Left only a note: 'Goodbye.'",
    deathZh: "为了拯救电次将自己的整个身体献给了幽灵恶魔。只留下一张纸条：\"再见。\""
  },
  {
    name: "POCHITA (ポチタ)",
    nameZh: "波奇塔",
    subtitle: "Chainsaw Devil — True Form",
    subtitleZh: "电锯恶魔 · 真身",
    status: "Merged",
    statusZh: "已融合",
    img: "/images/pochita-anime.png",
    emoji: "🐶",
    link: "/pochita",
    desc: "The Chainsaw Devil — most feared being in Hell — who spent years as a small puppy because Denji needed a companion. Merged with Denji's heart so he could live the life he always talked about.",
    descZh: "电锯恶魔——地狱中最令人恐惧的存在——却因为电次需要一个伙伴而甘愿做一只小狗。与电次的心脏融合，只为了让电次过上他梦想中的生活。"
  },
  {
    name: "QUANXI (クァンシ)",
    nameZh: "光熙",
    subtitle: "Chinese First Devil Hunter / Arrow Devil Hybrid",
    subtitleZh: "中国第一恶魔猎人 · 弓矢恶魔人",
    status: "Deceased (Temp)",
    statusZh: "死亡（暂）",
    img: "/images/quanxi-anime.png",
    emoji: "🏹",
    link: "/quanxi",
    desc: "China's most powerful devil hunter — stoic, supremely lethal, and fiercely loyal to her companions. Among the fastest characters in the series.",
    descZh: "中国最强的恶魔猎人——沉默、极其致命、对同伴极度忠诚。全系列速度最快的角色之一。",
    death: "Decapitated alongside her companions by Makima. Later resurrected by Chainsaw Man.",
    deathZh: "与同伴一同被玛奇玛斩首。后被电锯人复活。"
  },
  {
    name: "ANGEL (アンジェル)",
    nameZh: "天使",
    subtitle: "Angel Devil / Public Safety Div. 4",
    subtitleZh: "天使恶魔 · 公安对魔4课",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/angel-anime.png",
    emoji: "👼",
    link: "/angel",
    desc: "An Angel Devil whose touch shortens human lifespans. Forced into Devil Hunter service under Makima, he became Aki Hayakawa's partner — and the first person whose life he cared about losing.",
    descZh: "触碰他人会缩短寿命的天使恶魔。被玛奇玛胁迫加入恶魔猎人队伍，成为早川秋的搭档——也是他第一次在乎失去的一个人。",
    death: "Killed alongside Beam in the attack on Division 4's hideout. His final moments were spent in the apartment that had become his home.",
    deathZh: "与比姆一同在对魔4课据点的袭击中丧生。最后的时光，是在那个已经成为他的家的公寓里度过的。"
  },
  {
    name: "BEAM (ビーム)",
    nameZh: "毕姆",
    subtitle: "Shark Fiend / Public Safety Div. 4",
    subtitleZh: "鲨鱼魔人 · 公安对魔4课",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/beam-anime.png",
    emoji: "🦈",
    link: "/beam",
    desc: "A Shark Fiend and Denji's most devoted fan. He worshipped Denji as the embodiment of absolute freedom — and died charging headfirst into an unwinnable fight to protect him.",
    descZh: "鲨鱼魔人，电次的头号狂热粉丝。他将电次视为绝对自由的化身——为保护电次，一头冲向不可战胜的敌人，战死沙场。",
    death: "Killed instantly by Santa Claus during the International Assassins Arc, charging in to protect Denji.",
    deathZh: "在国际刺客篇中为保护电次而冲向圣诞老人，被瞬间击杀。"
  },
  {
    name: "ASA MITAKA / YORU (三鷹アサ / ヨル)",
    nameZh: "三鹰朝 / 夜",
    subtitle: "War Devil Hybrid / Part 2 Protagonist",
    subtitleZh: "战争恶魔人 · 第二部主角",
    status: "Alive",
    statusZh: "存活",
    img: "/images/asa-anime.png",
    emoji: "⚔️",
    link: "/asa",
    desc: "A socially isolated student who becomes the War Devil's host. She and Denji circle each other through Part 2 — two people desperately searching for something real.",
    descZh: "一个被社会孤立的女高中生，成为了战争恶魔的宿主。她与电次在第二部中互相靠近、互相试探——两个拼命寻找真实的人。"
  },
  {
    name: "YORU (ヨル)",
    nameZh: "夜",
    subtitle: "War Devil — Full Form / Part 2 Character",
    subtitleZh: "战争恶魔 · 完整形态 / 第二部角色",
    status: "Alive",
    statusZh: "存活",
    img: "/images/asa-yoru.png",
    emoji: "⚔️",
    link: "/yoru",
    desc: "The War Devil in its complete form, sharing Asa Mitaka's body. Cold, decisive, and willing to do anything — but her bond with Asa is slowly changing her. A core Part 2 character.",
    descZh: "战争恶魔的完整形态，寄宿在三鹰朝体内。冷酷、果断、为达目的不择手段——但与朝的羁绊正在改变她。第二部核心角色之一。"
  },
  {
    name: "JUSTICE DEVIL (正義の悪魔)",
    nameZh: "正义恶魔",
    subtitle: "Mysterious Contractor / Part 2",
    subtitleZh: "谜之契约者 / 第二部",
    status: "Alive",
    statusZh: "存活",
    img: "/images/justice-dev.png",
    emoji: "⚖️",
    link: "/justice",
    desc: "A Part 2 devil who contracts with multiple characters. Her identity and true purpose remain the story's biggest mysteries. She acts in the name of justice — but her actions defy all predictability.",
    descZh: "第二部出现的恶魔，与多名角色签订契约。她的身份和目的是第二部最大谜团之一。以正义之名行最不可预测之事。"
  },
  {
    name: "SPIDER DEVIL (蜘蛛の悪魔)",
    nameZh: "蜘蛛恶魔",
    subtitle: "Public Safety Collaborator / International Assassins Arc",
    subtitleZh: "公安合作恶魔 · 国际刺客篇",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/spider-anime.png",
    emoji: "🕷️",
    link: "/spider",
    desc: "A giant spider devil cooperating with Public Safety. She fought in the International Assassins Arc and served Makima with reverent loyalty.",
    descZh: "与公安合作的巨大蜘蛛恶魔。在国际刺客篇中助战，对玛奇玛有着敬畏的忠诚。"
  },
  {
    name: "SANTA CLAUS (サンタクロース)",
    nameZh: "圣诞老人",
    subtitle: "Leader of the International Assassins / Doll Devil Contractor",
    subtitleZh: "国际刺客组织首领 · 人偶恶魔契约者",
    status: "Deceased",
    statusZh: "死亡",
    img: "/images/santa-claus.png",
    emoji: "🎅",
    link: "/santa-claus",
    desc: "The insane old leader of the International Assassins who contracted with the Doll Devil. To obtain the Chainsaw Devil's heart, she offered her own body and soul — transforming herself into an army of countless dolls.",
    descZh: "国际刺客组织的疯狂首领，与人偶恶魔签订契约。为了获取电锯人的心脏不惜献上自己的身体和灵魂，将自己转化为无数人偶大军。",
    death: "Killed by the Darkness Devil as payment for her contract — a debt that consumed everything she had.",
    deathZh: "被暗之恶魔以契约代价杀死——一笔耗尽她一切的债务。"
  },
  {
    name: "GUN DEVIL (銃の悪魔)",
    nameZh: "枪之恶魔",
    subtitle: "Embodiment of Humanity's Fear of Guns",
    subtitleZh: "恐惧的化身",
    status: "Defeated",
    statusZh: "已击败",
    img: "/images/gun-devil.png",
    emoji: "🔫",
    link: "/gun-devil",
    desc: "The ultimate Devil born from humanity's fear of guns. A single appearance caused millions of deaths worldwide — its power fragments were divided among nations. It is the root cause of all events in Part 1.",
    descZh: "人类对枪的恐惧催生出的终极恶魔。仅一次现身就造成全球数百万人死亡——其力量碎片被各国分配。是第一部的万恶之源。"
  },
  {
    name: "DARKNESS DEVIL (闇の悪魔)",
    nameZh: "暗之恶魔",
    subtitle: "Primal Fear — Darkness",
    subtitleZh: "原初恐惧——黑暗",
    status: "Active",
    statusZh: "活跃",
    img: "/images/darkness-devil.png",
    emoji: "🕳️",
    link: "/darkness-devil",
    desc: "One of the most primal fears — fear of the dark. Residing in the deepest depths of Hell. Its power is overwhelming — its mere presence robs all beings of their will to fight. It is the embodiment of primal terror.",
    descZh: "最原始的恐惧之一——对黑暗的恐惧。居住在地狱最深处。其实力压倒性强大——仅凭存在就让人丧失战意。它是原初恐惧的化身。"
  },
  {
    name: "FUTURE DEVIL (未来の悪魔)",
    nameZh: "未来恶魔",
    subtitle: "Prophecy Contractor / Aki's Partner",
    subtitleZh: "预知契约者 · 早川秋的搭档",
    status: "Alive",
    statusZh: "存活",
    img: "/images/future-devil.png",
    emoji: "🔮",
    link: "/future",
    desc: "A devil who can see the future — and tells everyone it's terrible. Contracted with Aki Hayakawa. He watches the worst possible outcomes unfold with glee. His catchphrase: 'The future rules!'",
    descZh: "能预知未来的恶魔——并且乐于告诉每个人事情会很糟。与早川秋签订契约。他满怀欣喜地看着最糟糕的结局逐渐应验。口头禅：「未来最棒！」"
  },
  {
    name: "GHOST DEVIL (幽霊の悪魔)",
    nameZh: "幽灵恶魔",
    subtitle: "Invisible Arms Contractor / Himeno's Partner",
    subtitleZh: "隐形手臂契约者 · 姬野的搭档",
    status: "Unknown",
    statusZh: "未知",
    img: "/images/ghost-devil.png",
    emoji: "👻",
    link: "/ghost",
    desc: "A devil contracted to Himeno, granting her invisible arms. Each use cost her a body part. When Himeno gave her entire body, he manifested fully — a mass of countless arms. Then both vanished together.",
    descZh: "与姬野签订契约的恶魔，赋予她隐形手臂的能力。每次使用都让她失去一部分身体。当姬野献出全部身体后，他终于完全现形——无数手臂组成的巨物。随后两者一同消失。"
  },
  {
    name: "HELL DEVIL (地獄の悪魔)",
    nameZh: "地狱恶魔",
    subtitle: "Gatekeeper of Hell / Dimensional Gate Opener",
    subtitleZh: "地狱的守门人 · 次元之门开启者",
    status: "Active",
    statusZh: "活跃",
    img: "/images/hell-devil.png",
    emoji: "💀",
    link: "/hell",
    desc: "A devil who opens portals between the human world and Hell. Appeared in the International Assassins Arc, dragging enemies into the abyss. He is the gatekeeper — neutral, mechanical, and terrifying in his indifference.",
    descZh: "在人间与地狱间开启传送门的恶魔。在国际刺客篇中登场，将敌人拉入深渊。他是守门人——中立、机械、冷漠得令人恐惧。"
  },
  {
    name: "TYPHOON DEVIL (台風の悪魔)",
    nameZh: "台风恶魔",
    subtitle: "Natural Disaster Incarnate / Reze Arc",
    subtitleZh: "天灾化身 · 蕾塞篇",
    status: "Defeated",
    statusZh: "已击败",
    img: "/images/typhoon-devil.png",
    emoji: "🌀",
    link: "/typhoon",
    desc: "A devil born from humanity's fear of typhoons. A massive, destructive presence in the Reze Arc — but when facing the Chainsaw Devil, his raw power was no match for pure carnage. A showcase of false strength.",
    descZh: "以人类的台风恐惧为食的恶魔。在蕾塞篇中以巨大而具有破坏性的姿态登场——但在面对链锯恶魔时，他的蛮力在纯粹的暴力面前不堪一击。虚假力量的绝佳展示。"
  }
];
