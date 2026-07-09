import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARACTERS = [
  { nameZh: "电次", subtitleZh: "电锯恶魔人 · 主角", status: "存活", statusClass: "green", img: "/images/denji-anime.png", emoji: "⛓️", descZh: "欠债累累的孤儿，与波奇塔融合成为电锯人。他的目标平凡得可笑——食物、住所、与人交往——但在藤本树的世界里，即便是微小的梦想也要付出毁灭性的代价。" },
  { nameZh: "蕾塞", subtitleZh: "炸弹恶魔人 · 苏联特工", status: "死亡", statusClass: "red", img: "/images/reze-casual.png", emoji: "💣", descZh: "自幼被当作苏联特工培养的炸弹恶魔人，没有自己的名字。她与电次短暂的羁绊是第一部的感情核心——真实、无法调和、在还未开始时就已结束。", deathZh: "在前往与电次约定的海边之约前，被玛奇玛杀死。" },
  { nameZh: "帕瓦", subtitleZh: "血之魔人 · 公安对魔4课", status: "死亡", statusClass: "red", img: "/images/power-anime.png", emoji: "🩸", descZh: "被迫加入公安对魔特异的血之魔人。混乱、自私，却又暗藏着整部作品中最人性的光辉——她学会了爱一个人意味着什么。", deathZh: "被玛奇玛在电次面前射杀。" },
  { nameZh: "早川秋", subtitleZh: "公安恶魔猎人", status: "死亡", statusClass: "red", img: "/images/aki-anime.png", emoji: "🔫", descZh: "纪律严明的猎人，成为了电次和帕瓦的家人。他的契约让他付出了一切——而未来恶魔早已让他看到了结局。", deathZh: "被枪之恶魔附身，在漫天大雪中被电次亲手杀死。" },
  { nameZh: "玛奇玛", subtitleZh: "支配恶魔 · 公安局长", status: "死亡", statusClass: "red", img: "/images/makima-anime.png", emoji: "👁️", descZh: "支配恶魔的人类形态。第一部的核心反派——她策划了一切，系统性地摧毁了电次的世界。", deathZh: "被电次吃掉。后转生为那由多。" },
  { nameZh: "姬野", subtitleZh: "公安恶魔猎人", status: "死亡", statusClass: "red", img: "/images/himeno-anime.png", emoji: "🚬", descZh: "将眼睛献给幽灵恶魔的资深猎人，目睹了每一位搭档的死亡。藤本树笔下最像人的角色之一。", deathZh: "为了拯救电次将身体献给了幽灵恶魔。" },
  { nameZh: "波奇塔", subtitleZh: "电锯恶魔 · 真身", status: "已融合", statusClass: "blue", img: "/images/pochita-anime.png", emoji: "🐶", descZh: "地狱中最令人恐惧的存在——却因为电次需要一个伙伴而甘愿做一只小狗。" },
  { nameZh: "光熙", subtitleZh: "中国第一恶魔猎人 · 弓矢恶魔人", status: "死亡（暂）", statusClass: "red", img: "/images/quanxi-anime.png", emoji: "🏹", descZh: "中国最强的恶魔猎人——沉默、极其致命、对同伴极度忠诚。", deathZh: "与同伴一同被玛奇玛斩首。后被电锯人复活。" },
  { nameZh: "三鹰朝", subtitleZh: "战争恶魔人 · 第二部主角", status: "存活", statusClass: "green", img: "/images/asa-anime.png", emoji: "⚔️", descZh: "被社会孤立的女高中生，成为了战争恶魔的宿主。两个拼命寻找真实的人。" }
];

const STORY_ARCS = [
  { num: "01", title: "第一部 第1–13话 | 序章", desc: "电次与波奇塔以恶魔猎人的身份维生。被黑帮杀害后，波奇塔与他融合，让他复活为人魔混血。公安的玛奇玛收留电次，让他加入对魔特异4课。" },
  { num: "02", title: "第一部 第14–22话 | 蝙蝠恶魔篇", desc: "帕瓦骗电次去救她的猫喵子。电次对抗蝙蝠恶魔，逐渐了解自己的力量和人类的脆弱。" },
  { num: "03", title: "第一部 第23–38话 | 永恒恶魔篇", desc: "对魔特异4课被永恒恶魔困在无限酒店中。电次连续奋战三天三夜。在一个不断夺走一切的世界里，想要究竟意味着什么？" },
  { num: "04", title: "第一部 第39–52话 | 炸弹少女篇", desc: "电次在咖啡馆遇到了蕾塞——温柔、好奇。电次坠入爱河。篇章以悲剧收场：蕾塞被玛奇玛杀死，在前往与电次约定的海边之约前。" },
  { num: "05", title: "第一部 第53–70话 | 国际刺客篇", desc: "来自多国的刺客齐聚日本，目标是电锯人的心脏。光熙率领一派，圣诞老人释放人偶恶魔。" },
  { num: "06", title: "第一部 第71–79话 | 枪之恶魔篇", desc: "枪之恶魔现身。秋与枪之恶魔的契约将他推向注定破碎的结局。" },
  { num: "07", title: "第一部 第80–97话 | 支配恶魔篇", desc: "玛奇玛——支配恶魔——一步步拆解电次的生活。电次最终用吃掉玛奇玛的方式击败了她。" },
  { num: "08", title: "第二部 第98话起 | 校园篇", desc: "新的主角三鹰朝——战争恶魔的宿主。关于哀伤、身份认同的探讨。" }
];

const PHILOSOPHIES = [
  { num: "01", title: "恐惧是力量的源泉", desc: "恶魔从恐惧中诞生。恐惧不仅是情绪——它是创造力，是生成性的暴力。" },
  { num: "02", title: "记忆的抹除", desc: "电锯恶魔吃掉的东西不仅被摧毁，还会从所有记忆中抹除。遗忘一定是损失吗？" },
  { num: "03", title: "欲望的平庸性", desc: "电次想要面包、温暖的床——而非成为最强。悲剧不在于梦想太小，而在于即使微小的梦想也会被剥夺。" },
  { num: "04", title: "电影即语言", desc: "藤本树的分镜呼应了库布里克和塔伦蒂诺。他将章节结构为电影序列。" },
  { num: "05", title: "爱即控制与毁灭", desc: "玛奇玛代表了最可怕形式的爱——完全占有。电次的爱混乱而笨拙——但他看到了人是人，而非物件。" },
  { num: "06", title: "没有意义的死亡", desc: "角色们突兀地、不体面地死去。哀伤不会被化解，它只是与生活并行。" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } })
};

function AdBanner({ label }: { label: string }) {
  return (
    <div className="ad-container" style={{ padding: '8px 16px' }}>
      <div className="ad-label" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</div>
      <ins className="adsbygoogle ad-slot ad-slot--leaderboard"
        data-ad-client="ca-pub-xxxxxxxxxxxxxx"
        data-ad-slot="1234567890"
        data-ad-format="horizontal"
        data-full-width-responsive="true"></ins>
      <script>{(adsbygoogle = window.adsbygoogle || []).push({})}</script>
    </div>
  );
}

function FloatingParticles() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            backgroundColor: `rgba(200, 0, 26, ${0.15 + Math.random() * 0.25})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#08090a', color: '#f7f8f8', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontFeatureSettings: "'cv01', 'ss03'", overflowX: 'hidden' }}>
      <FloatingParticles />

      {/* ─── NAV ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 32px',
        backgroundColor: scrolled ? 'rgba(8,9,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.25,0.1,0.25,1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#c8001a', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>✦</span>
          <span style={{ color: '#c8001a', fontSize: '20px', fontWeight: 590, letterSpacing: '-0.02em' }}>链锯人宇宙</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['角色', '简介', '剧情', '哲学'].map(item => (
            <a key={item} href={`#${item === '角色' ? 'characters' : item === '简介' ? 'intro' : item === '剧情' ? 'story' : 'philosophy'}`}
              style={{ fontSize: '13px', fontWeight: 510, color: 'rgba(247,248,248,0.6)', letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f7f8f8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,248,248,0.6)')}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(200,0,26,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(200,0,26,0.06) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '720px', padding: '0 24px' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ fontSize: '12px', color: '#c8001a', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 510 }}>
            藤本树 · 现代漫画杰作
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 7rem)', fontWeight: 510, lineHeight: 0.92,
              letterSpacing: '-0.04em', marginBottom: '28px', color: '#f7f8f8'
            }}>
            链<span style={{ color: '#c8001a', textShadow: '0 0 60px rgba(200,0,26,0.3)' }}>锯</span>人
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(208,214,224,0.7)', lineHeight: 1.7, marginBottom: '48px', fontWeight: 400, letterSpacing: '0.01em' }}>
            欲望、虚无、暴力与爱的诗篇
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}>
            <a href="#characters" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 28px', borderRadius: '6px',
              backgroundColor: 'rgba(200,0,26,0.9)', color: '#fff',
              fontSize: '14px', fontWeight: 510, letterSpacing: '0.02em',
              textDecoration: 'none', transition: 'all 0.3s',
              boxShadow: '0 0 30px rgba(200,0,26,0.2)'
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c8001a'; e.currentTarget.style.boxShadow = '0 0 50px rgba(200,0,26,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(200,0,26,0.9)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(200,0,26,0.2)'; }}>
              <span>探索角色</span>
              <span style={{ fontSize: '16px' }}>↓</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── AD 1 ─── */}
      <AdBanner label="广告" />

      {/* ─── CHARACTERS ─── */}
      <section id="characters" style={{ padding: '120px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.015)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', color: '#c8001a', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 510 }}>Character Guide</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 510, letterSpacing: '-0.02em' }}>全角色指南</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
            {CHARACTERS.map((char, i) => (
              <motion.div key={char.nameZh} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.25,0.1,0.25,1)',
                  display: 'flex', flexDirection: 'column'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.035)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                  <img src={char.img} alt={char.nameZh}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(0.8) contrast(1.15)', transition: 'all 0.6s' }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0) contrast(1)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(0.8) contrast(1.15)'; e.currentTarget.style.transform = 'scale(1)'; }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 40%)' }} />
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    fontSize: '10px', fontWeight: 510, letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '4px 10px', borderRadius: '4px',
                    backgroundColor: char.statusClass === 'green' ? 'rgba(16,185,129,0.25)' : char.statusClass === 'blue' ? 'rgba(96,165,250,0.25)' : 'rgba(200,0,26,0.25)',
                    color: char.statusClass === 'green' ? '#34d399' : char.statusClass === 'blue' ? '#93c5fd' : '#f87171',
                    backdropFilter: 'blur(8px)'
                  }}>{char.status}</div>
                </div>
                <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 590, letterSpacing: '-0.01em', marginBottom: '2px' }}>{char.nameZh}</h3>
                  <p style={{ fontSize: '10px', color: 'rgba(208,214,224,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 510 }}>{char.subtitleZh}</p>
                  <p style={{ fontSize: '14px', color: 'rgba(208,214,224,0.65)', lineHeight: 1.7, flex: 1, fontWeight: 400 }}>{char.descZh}</p>
                  {char.deathZh && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p style={{ fontSize: '10px', color: '#f87171', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 510 }}>† 死亡</p>
                      <p style={{ fontSize: '13px', color: 'rgba(208,214,224,0.45)', lineHeight: 1.6 }}>{char.deathZh}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AD 2 ─── */}
      <AdBanner label="广告" />

      {/* ─── INTRO ─── */}
      <section id="intro" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', color: '#c8001a', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 510 }}>Introduction</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 510, letterSpacing: '-0.02em' }}>什么是链锯人？</h2>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(208,214,224,0.7)', fontWeight: 400 }}>
            <p style={{ marginBottom: '20px' }}><strong style={{ color: '#f7f8f8', fontWeight: 510 }}>《链锯人》</strong>（チェンソーマン）是日本漫画家<strong style={{ color: '#f7f8f8', fontWeight: 510 }}>藤本树</strong>创作的漫画。第一部在《周刊少年Jump》连载，第二部在《少年Jump+》连载。</p>
            <p style={{ marginBottom: '20px' }}>故事设定在一个<strong style={{ color: '#f7f8f8', fontWeight: 510 }}>恶魔</strong>从人类集体恐惧中诞生的世界。人类与恶魔签订契约获得力量，而<strong style={{ color: '#f7f8f8', fontWeight: 510 }}>恶魔猎人</strong>负责消灭他们。在这混乱的中心，是<strong style={{ color: '#f7f8f8', fontWeight: 510 }}>电次</strong>——一个穷到卖器官维生的少年。</p>
            <p>《链锯人》最大的不同在于它<strong style={{ color: '#f7f8f8', fontWeight: 510 }}>拒绝成为英雄故事</strong>。藤本树将微小的人类欲望包裹在无情的残酷、哀伤和美丽之中。</p>
          </div>
        </div>
      </section>

      {/* ─── AD 3 ─── */}
      <AdBanner label="广告" />

      {/* ─── STORY ─── */}
      <section id="story" style={{ padding: '120px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.015)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', color: '#c8001a', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 510 }}>Full Story</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 510, letterSpacing: '-0.02em' }}>完整剧情章节</h2>
          </div>
          {STORY_ARCS.map((arc, i) => (
            <motion.div key={arc.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
              style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: '24px',
                padding: '40px 0', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)'
              }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 510, color: 'rgba(255,255,255,0.08)', lineHeight: 1, letterSpacing: '-0.03em' }}>{arc.num}</div>
              <div>
                <h3 style={{ fontSize: '13px', color: '#c8001a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 510 }}>{arc.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(208,214,224,0.6)', lineHeight: 1.8, fontWeight: 400 }}>{arc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── AD 4 ─── */}
      <AdBanner label="广告" />

      {/* ─── PHILOSOPHY ─── */}
      <section id="philosophy" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', color: '#c8001a', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 510 }}>Philosophy</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 510, letterSpacing: '-0.02em' }}>藤本树的哲学</h2>
          </div>
          <blockquote style={{ borderLeft: '2px solid rgba(200,0,26,0.5)', padding: '20px 32px', margin: '0 auto 64px', maxWidth: '620px', backgroundColor: 'rgba(255,255,255,0.015)', borderRadius: '4px' }}>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'rgba(247,248,248,0.8)', lineHeight: 1.6, marginBottom: '12px', fontWeight: 400, letterSpacing: '0.01em' }}>
              藤本树不写英雄。他写的是那些只想要一点点东西、而世界连这一点也不肯给他们的人。
            </p>
            <footer style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(208,214,224,0.3)', textTransform: 'uppercase', fontWeight: 510 }}>
              —— 链锯人主题内核批评
            </footer>
          </blockquote>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
            {PHILOSOPHIES.map((item, i) => (
              <motion.div key={item.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.015)', padding: '28px 32px 32px',
                  borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = 'rgba(200,0,26,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.015)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <p style={{ fontSize: '11px', color: 'rgba(200,0,26,0.5)', marginBottom: '12px', fontWeight: 510 }}>{item.num}</p>
                <h3 style={{ fontSize: '18px', fontWeight: 590, letterSpacing: '-0.01em', marginBottom: '12px', color: '#f7f8f8' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(208,214,224,0.55)', lineHeight: 1.8, fontWeight: 400 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AD 5 ─── */}
      <AdBanner label="广告" />

      {/* ─── FOOTER ─── */}
      <footer style={{ padding: '80px 0 64px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', color: 'rgba(200,0,26,0.4)', fontWeight: 510, letterSpacing: '0.3em', textTransform: 'uppercase' }}>✦</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 510, color: 'rgba(200,0,26,0.7)', marginBottom: '20px', letterSpacing: '-0.03em' }}>
          链锯人
        </h2>
        <p style={{ fontSize: '12px', color: 'rgba(208,214,224,0.2)', maxWidth: '500px', margin: '0 auto', lineHeight: 2, fontWeight: 400 }}>
          Chainsaw Man © 藤本树 / Shueisha. 本网站为粉丝向非官方站点。
        </p>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
          {['角色', '简介', '剧情', '哲学'].map(item => (
            <a key={item} href={`#${item === '角色' ? 'characters' : item === '简介' ? 'intro' : item === '剧情' ? 'story' : 'philosophy'}`}
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 510 }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.15)'}>
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
