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
  }
];
