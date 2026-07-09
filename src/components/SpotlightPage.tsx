import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ALL_CHARACTERS } from "@/lib/allCharacters";

export interface GalleryImage {
  src: string; alt: string; caption: string; emoji: string; wide?: boolean;
}
export interface Arc { num: string; title: string; desc: string; }
export interface PhilosophyItem { num: string; title: string; desc: string; }
export interface DeathItem { name: string; arc: string; img: string; emoji: string; desc: string; weight: string; }
export interface Stat { label: string; value: string; color?: string; }

export interface SpotlightPageProps {
  currentSlug: string;
  navBrand: string;
  hero: { prefix: string; highlight: string; tagline: string; img: string; };
  spotlight: { title: string; bio: React.ReactNode; stats: Stat[]; gallery: GalleryImage[]; belowStats?: { src: string; alt: string; caption: string; emoji: string; }[]; };
  story: { subtitle: string; title: string; arcs: Arc[]; };
  philosophy: { subtitle: string; title: string; quote: string; attribution: string; items: PhilosophyItem[]; };
  deaths: { subtitle: string; title: string; items: DeathItem[]; };
}

export default function SpotlightPage({ currentSlug, navBrand, hero, spotlight, story, philosophy, deaths }: SpotlightPageProps) {
  const sv = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const fullName = hero.prefix + hero.highlight;

  return (
    <div className="bg-[var(--black)] min-h-screen text-[var(--text)]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 mix-blend-difference bg-black/40 backdrop-blur-sm border-b border-[var(--smoke)]">
        <Link to="/" className="text-[var(--red)] font-['Black_Han_Sans'] text-2xl tracking-wider hover:opacity-80 transition-opacity">{navBrand}</Link>
        <ul className="hidden md:flex space-x-6 font-mono text-[11px] tracking-widest uppercase">
          <li><a href="#spotlight" className="hover:text-[var(--red)] transition-colors">Spotlight</a></li>
          <li><a href="#characters" className="hover:text-[var(--red)] transition-colors">Characters</a></li>
          <li><a href="#intro" className="hover:text-[var(--red)] transition-colors">Intro</a></li>
          <li><a href="#story" className="hover:text-[var(--red)] transition-colors">Story</a></li>
          <li><a href="#philosophy" className="hover:text-[var(--red)] transition-colors">Philosophy</a></li>
          <li><a href="#deaths" className="hover:text-[var(--red)] transition-colors">Deaths</a></li>
          <li><Link to="/" className="text-[var(--red)] hover:opacity-70 transition-opacity">← Home</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ background: 'radial-gradient(circle at 70% 50%, var(--red) 0%, transparent 60%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] z-0 h-full">
          <img src={hero.img} alt={fullName} className="w-full h-full object-cover filter grayscale contrast-125 object-top [mask-image:linear-gradient(to_right,transparent,black_20%)] hidden md:block" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="font-mono text-[var(--red)] text-sm tracking-[0.3em] uppercase mb-6">Chainsaw Man Universe — Character Spotlight</p>
            <h1 className="font-['Black_Han_Sans'] text-8xl md:text-[10rem] leading-none mb-8 tracking-tighter">
              {hero.prefix}<span className="text-[var(--red)]">{hero.highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-[var(--bone)]">{hero.tagline}</p>
            <a href="#spotlight" className="inline-block font-mono text-sm tracking-widest uppercase border border-[var(--smoke)] py-4 px-8 hover:border-[var(--red)] hover:bg-[var(--red)] hover:text-white transition-all duration-300">
              Explore ↓
            </a>
          </div>
        </div>
      </section>

      {/* CHARACTER SPOTLIGHT */}
      <motion.section id="spotlight" className="py-24 md:py-32 container mx-auto px-6 md:px-12" {...sv}>
        <div className="mb-16">
          <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">Character Spotlight</p>
          <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">{spotlight.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--bone)]">
            {spotlight.bio}
            <div className="grid grid-cols-2 gap-px bg-[var(--smoke)] border border-[var(--smoke)] mt-12">
              {spotlight.stats.map(s => (
                <div key={s.label} className="bg-[var(--off-black)] p-6">
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">{s.label}</p>
                  <p className={`font-serif ${s.color || ''}`}>{s.value}</p>
                </div>
              ))}
            </div>
            {spotlight.belowStats && spotlight.belowStats.map((img, i) => (
              <div key={i} className="relative group overflow-hidden border border-[var(--smoke)] mt-4">
                <ImageWithFallback src={img.src} alt={img.alt} fallbackEmoji={img.emoji} fallbackLabel="IMG.PNG"
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="font-mono text-[10px] uppercase tracking-widest">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full">
            {(() => {
              const main = spotlight.gallery[0];
              const mids = spotlight.gallery.slice(1).filter(g => !g.wide);
              const wides = spotlight.gallery.slice(1).filter(g => g.wide);
              return (
                <>
                  {main && (
                    <div className="relative group overflow-hidden border border-[var(--smoke)] min-h-32">
                      <ImageWithFallback src={main.src} alt={main.alt} fallbackEmoji={main.emoji} fallbackLabel="IMG0.PNG"
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="font-mono text-[10px] uppercase tracking-widest">{main.caption}</span>
                      </div>
                    </div>
                  )}
                  {mids.length > 0 && (
                    <div className={`grid gap-3 ${mids.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {mids.map((img, j) => (
                        <div key={j} className="relative group overflow-hidden border border-[var(--smoke)] min-h-24">
                          <ImageWithFallback src={img.src} alt={img.alt} fallbackEmoji={img.emoji} fallbackLabel={`IMG${j+1}.PNG`}
                            className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 bg-gradient-to-t from-black/70 to-transparent">
                            <span className="font-mono text-[10px] uppercase tracking-widest">{img.caption}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {wides.map((img, j) => (
                    <div key={j} className="relative group overflow-hidden border border-[var(--smoke)] min-h-24">
                      <ImageWithFallback src={img.src} alt={img.alt} fallbackEmoji={img.emoji} fallbackLabel={`WIDE${j}.PNG`}
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="font-mono text-[10px] uppercase tracking-widest">{img.caption}</span>
                      </div>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      </motion.section>

      {/* CHARACTERS GRID */}
      <motion.section id="characters" className="py-24 md:py-32 bg-[var(--off-black)]" {...sv}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">Full Character Guide</p>
            <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">CHARACTERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_CHARACTERS.map((char) => {
              const isCurrent = char.link === currentSlug;
              return (
                <div key={char.name} className={`border bg-[var(--black)] flex flex-col group relative ${isCurrent ? 'border-[var(--red)]' : 'border-[var(--smoke)] hover:border-gray-600'} transition-colors`}>
                  {isCurrent && (
                    <div className="absolute top-3 right-3 z-10 font-mono text-[10px] text-[var(--red)] uppercase tracking-widest bg-black/80 px-2 py-1 border border-[var(--red)]">You are here</div>
                  )}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <ImageWithFallback src={char.img} alt={char.name} fallbackEmoji={char.emoji} fallbackLabel={`${char.emoji}.PNG`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale contrast-125 group-hover:grayscale-0 bg-[var(--off-black)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                    <div className={`absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 ${
                      char.status === "Alive" ? "bg-green-900/80 text-green-400" :
                      char.status === "Merged" ? "bg-blue-900/80 text-blue-400" :
                      "bg-red-900/80 text-[var(--red)]"}`}>{char.status}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-['Black_Han_Sans'] text-lg mb-1">{char.name}</h3>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-3">{char.subtitle}</p>
                    <p className="text-xs text-[var(--bone)] leading-relaxed flex-1">{char.desc}</p>
                    {char.death && (
                      <div className="mt-3 pt-3 border-t border-[var(--smoke)]">
                        <p className="font-mono text-[10px] text-[var(--red)] uppercase tracking-wider mb-1">Death</p>
                        <p className="text-[11px] text-gray-400 leading-relaxed">{char.death}</p>
                      </div>
                    )}
                    {!isCurrent && (
                      <Link to={char.link} className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[var(--red)] hover:text-white transition-colors flex items-center gap-1 group/l">
                        <span>View spotlight</span><span className="group-hover/l:translate-x-1 transition-transform">→</span>
                      </Link>
                    )}
                  </div>
                  {!isCurrent && <Link to={char.link} className="absolute inset-0" aria-label={`${char.name} spotlight`} />}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* WHAT IS CHAINSAW MAN */}
      <motion.section id="intro" className="py-24 md:py-32 container mx-auto px-6 md:px-12" {...sv}>
        <div className="mb-16">
          <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">Introduction</p>
          <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">WHAT IS CHAINSAW MAN?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--bone)]">
            <p><strong className="text-white">Chainsaw Man</strong> (チェンソーマン) is a manga series written and illustrated by <strong className="text-white">Tatsuki Fujimoto</strong>, serialized in Weekly Shōnen Jump from December 2018 to December 2020 (Part 1), and continuing in Shōnen Jump+ from July 2022 onward (Part 2).</p>
            <p>The series takes place in a world where <strong className="text-white">Devils</strong> — born from humanity's collective fears — manifest as terrifying entities. Some humans form contracts with Devils to gain power; others, called <strong className="text-white">Devil Hunters</strong>, work for Public Safety agencies to eliminate them.</p>
            <p>After being betrayed and killed by yakuza, Denji is resurrected by his pet Devil dog <strong className="text-white">Pochita</strong>, who merges with his heart. Denji awakens as the <strong className="text-white">Chainsaw Man</strong> — a being who can sprout chainsaws from his body and revs toward every threat with reckless, joyful violence.</p>
            <p>What sets Chainsaw Man apart is its <strong className="text-white">refusal to be heroic</strong>. Fujimoto wraps small human desires in a world of relentless brutality, grief, and beauty. The result is manga unlike anything else.</p>
          </div>
          <div className="relative border border-[var(--smoke)] p-4 bg-[var(--off-black)]">
            <div className="relative">
              <ImageWithFallback src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Chainsaw_Man_volume_1.jpg/220px-Chainsaw_Man_volume_1.jpg"
                alt="Chainsaw Man Volume 1" fallbackEmoji="📖" fallbackLabel="VOL1.JPG"
                className="w-full h-auto grayscale contrast-125 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-[var(--red)] mix-blend-multiply opacity-40 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* STORY */}
      <motion.section id="story" className="py-24 md:py-32 bg-[var(--off-black)]" {...sv}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">{story.subtitle}</p>
            <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">{story.title}</h2>
          </div>
          <div className="space-y-16">
            {story.arcs.map((arc) => (
              <div key={arc.num} className="grid grid-cols-1 md:grid-cols-[120px_1fr] lg:grid-cols-[200px_1fr] gap-8 items-start border-t border-[var(--smoke)] pt-16">
                <div className="font-['Black_Han_Sans'] text-7xl md:text-8xl lg:text-9xl text-[var(--smoke)] leading-none select-none">{arc.num}</div>
                <div>
                  <h3 className="font-mono text-sm md:text-base text-[var(--red)] uppercase tracking-widest mb-6">{arc.title}</h3>
                  <p className="text-lg text-[var(--bone)] leading-relaxed max-w-4xl">{arc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PHILOSOPHY */}
      <motion.section id="philosophy" className="py-24 md:py-32 container mx-auto px-6 md:px-12" {...sv}>
        <div className="mb-16">
          <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">{philosophy.subtitle}</p>
          <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">{philosophy.title}</h2>
        </div>
        <blockquote className="border-l-4 border-[var(--red)] pl-8 py-2 my-16 max-w-4xl relative">
          <span className="absolute -top-10 -left-6 text-[8rem] text-[var(--smoke)] font-serif leading-none select-none font-bold">"</span>
          <p className="text-2xl md:text-3xl italic text-white leading-relaxed mb-6 relative z-10">{philosophy.quote}</p>
          <footer className="font-mono text-sm tracking-widest text-gray-500 uppercase">— {philosophy.attribution}</footer>
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophy.items.map((item) => (
            <div key={item.num} className="bg-[var(--off-black)] p-8 border border-[var(--smoke)] hover:border-gray-600 transition-colors">
              <p className="font-mono text-[var(--red)] text-xs mb-4">{item.num}</p>
              <h3 className="font-['Black_Han_Sans'] text-2xl mb-4">{item.title}</h3>
              <p className="text-[var(--bone)] text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* DEATHS */}
      <motion.section id="deaths" className="py-24 md:py-32 bg-[var(--off-black)]" {...sv}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[var(--red)] text-sm tracking-widest uppercase mb-4">{deaths.subtitle}</p>
            <h2 className="font-['Black_Han_Sans'] text-4xl md:text-5xl">{deaths.title}</h2>
          </div>
          <div className="space-y-px">
            {deaths.items.map((d, i) => (
              <div key={d.name} className="grid grid-cols-1 md:grid-cols-[80px_180px_1fr] gap-0 group hover:bg-[var(--black)] transition-colors border border-[var(--smoke)]">
                <div className="hidden md:flex items-center justify-center p-6 border-r border-[var(--smoke)]">
                  <span className="font-['Black_Han_Sans'] text-4xl text-[var(--smoke)] group-hover:text-[var(--red)] transition-colors">0{i + 1}</span>
                </div>
                <div className="relative overflow-hidden h-48 md:h-auto border-r border-[var(--smoke)]">
                  <ImageWithFallback src={d.img} alt={d.name} fallbackEmoji={d.emoji} fallbackLabel={`${d.name}.PNG`}
                    className="w-full h-full object-contain object-top grayscale bg-[var(--off-black)]" />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-['Black_Han_Sans'] text-2xl text-white">{d.name}</h3>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap">{d.arc}</span>
                  </div>
                  <p className="text-[var(--bone)] text-sm leading-relaxed mb-4">{d.desc}</p>
                  <p className="font-mono text-xs text-[var(--red)] uppercase tracking-widest">{d.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-[var(--smoke)] bg-[var(--black)]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-['Black_Han_Sans'] text-3xl text-[var(--red)] mb-3">{navBrand}</div>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest max-w-sm">
              A fan site for the Chainsaw Man universe. All characters and story belong to Tatsuki Fujimoto / Shueisha.
            </p>
          </div>
          <div className="flex flex-col gap-3 font-mono text-xs text-gray-500 uppercase tracking-widest">
            <Link to="/" className="hover:text-[var(--red)] transition-colors">← Reze Spotlight (Home)</Link>
            <a href="#hero" className="hover:text-[var(--red)] transition-colors">Back to Top ↑</a>
            <a href="https://www.viz.com/shonenjump/chainsaw-man/chapter/1" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--red)] transition-colors">Read Chainsaw Man — VIZ →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
