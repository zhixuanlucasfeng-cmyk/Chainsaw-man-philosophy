import SpotlightPage from "@/components/SpotlightPage";

export default function Quanxi() {
  return (
    <SpotlightPage
      currentSlug="/quanxi"
      navBrand="QUANXI × CSM"
      hero={{
        prefix: "QUAN",
        highlight: "XI",
        tagline: "The First Devil Hunter. China's most lethal operative — who would burn the world down for the people she loves.",
        img: "/images/quanxi-anime.png",
      }}
      spotlight={{
        title: "QUANXI / THE FIRST DEVIL HUNTER",
        bio: (
          <>
            <p><strong className="text-white">Quanxi</strong> is the Chinese government's First Devil Hunter — a title given to the single most powerful devil hunter in a nation's arsenal. She is a hybrid fused with the Arrow Devil, capable of firing volleys of arrows at speeds that defy perception, and she is arguably the single fastest combatant in the series.</p>
            <p>She travels with a group of devil-hybrid companions — Tsugihagi, Tolka, Cosmo, and Pingtsi — who she refers to as her girlfriends. Her devotion to them is the most genuine thing about her. She was sent to Japan as an assassin to collect Chainsaw Man's heart. She views this as a professional obligation, distinct from her personal feelings.</p>
            <p>Quanxi is stoic to the point of seeming emotionless, but Fujimoto makes clear that this is not absence of feeling — it is <strong className="text-white">professional discipline over very deep feeling</strong>. She fights with mechanical efficiency and saves every visible emotion for the people she travels with.</p>
            <p>Her most striking quality is the complete absence of nationalism. She serves China because China pays her and provides for her companions. If China gave her a different order, she would comply. Her loyalty is not to a flag — it is to the four people beside her, and nothing else.</p>
          </>
        ),
        stats: [
          { label: "Devil Type", value: "Arrow Devil Hybrid" },
          { label: "Affiliation", value: "Chinese Government" },
          { label: "Arc", value: "International Assassins" },
          { label: "Status", value: "Deceased (Temp)", color: "text-yellow-400" },
        ],
        gallery: [
          { src: "/images/quanxi-anime.png", alt: "Quanxi — Full Design", caption: "Quanxi — Character Art", emoji: "🏹" },
          { src: "/images/asa-anime.png", alt: "Part 2 — A Different World", caption: "The World After Her Arc", emoji: "⚔️" },
          { src: "/images/makima-anime.png", alt: "Makima — Who Ended Her", caption: "The One Who Ended Her", emoji: "👁️" },
          { src: "/images/reze-runaway.png", alt: "The Arc She Fought Through", caption: "The Arc She Fought Through", emoji: "💣", wide: true },
        ],
      }}
      story={{
        subtitle: "Quanxi's Arc",
        title: "THE FIRST DEVIL HUNTER'S STORY",
        arcs: [
          { num: "01", title: "Assignment — Sent to Japan", desc: "Quanxi arrives in Japan with her companions under orders from the Chinese government to acquire Chainsaw Man's heart. She accepts this mission with the same flat professionalism she brings to everything. She does not want to be in Japan. She does not want to fight. But she was sent, and she will complete the assignment." },
          { num: "02", title: "First Encounters — Speed Above All", desc: "Quanxi's first major engagement demonstrates her speed: she can decapitate multiple opponents in a single motion, moving faster than most characters can perceive. She dispatches Denji's allies with unsettling efficiency. She is not cruel about it. She is simply the best at what she does." },
          { num: "03", title: "Santa Claus Arc — Alliance and Betrayal", desc: "Quanxi navigates the chaos of the Santa Claus / Doll Devil situation with the same cold pragmatism. When circumstances shift, she shifts with them — not from treachery but from clear-eyed assessment of what serves her mission and what serves her companions. She is the arc's most dangerous unknown variable." },
          { num: "04", title: "Hell — A Brief Window", desc: "In Hell, facing the Darkness Devil, Quanxi reveals a rare moment of something close to fear or awe. The Darkness Devil operates on a different level than anything she has encountered. Even the series' most collected character is not immune to genuine cosmic horror." },
          { num: "05", title: "The Return — Makima's Move", desc: "Quanxi is killed — along with all her companions — by Makima's remote ability in a single, devastating page. It is one of the manga's most shocking moments: multiple major characters, including Quanxi, decapitated simultaneously without warning. The companions she protected die beside her." },
          { num: "06", title: "Resurrection — What Chainsaw Man Erased and Restored", desc: "Quanxi is later resurrected by Chainsaw Man — one of the beings brought back by the Chainsaw Devil's unique relationship with erasure and restoration. The Chainsaw Devil's victims can be retrieved. Quanxi lives. Whether her companions survived with her is a question the series leaves deliberately unresolved." },
        ],
      }}
      philosophy={{
        subtitle: "What Quanxi Represents",
        title: "THE PHILOSOPHY OF QUANXI",
        quote: "Quanxi is Chainsaw Man's argument that loyalty to the people you love is more honest than loyalty to the institutions that deploy you. She serves China because it is convenient. She would die for her companions because they are the only thing she has chosen.",
        attribution: "Analysis of Quanxi's role in Chainsaw Man",
        items: [
          { num: "01", title: "Loyalty Without Ideology", desc: "Quanxi's nationalism is entirely transactional. She serves China because China pays her and protects her companions. She has no flag, no ideology, no vision of a better world — only people she has decided to protect. Fujimoto presents this as a kind of honesty that institutional loyalty rarely achieves." },
          { num: "02", title: "Speed as Character", desc: "Quanxi's supernatural speed is also a personality trait. She moves fast, decides fast, eliminates options fast. She does not dwell. She does not perform. She assesses and acts. Her combat style is the physical expression of someone who has cleared away everything that isn't essential." },
          { num: "03", title: "The Harem as Found Family", desc: "Quanxi's relationship with her companions reads, at first, as an aesthetic choice. Fujimoto slowly reveals it as something more serious: these are the people she chose, in a world of assigned allegiances. Her most genuine moments are all with them. Her grief, when they are threatened, is the only crack in her composure." },
          { num: "04", title: "Professionalism as Distance", desc: "Quanxi's stoicism is not coldness — it is the discipline of someone who learned that caring visibly about the wrong things gets people killed. She compartmentalizes her affection with the same precision she brings to combat: it goes exactly where it is needed and nowhere else." },
          { num: "05", title: "The Shock of Her Death", desc: "Quanxi's death — sudden, alongside her companions, on a single page — is one of the series' most brutal pacing choices. Fujimoto does not give her a heroic last stand. He gives her a death that arrives the way death actually does: without warning, without ceremony, without resolution." },
          { num: "06", title: "What the Chainsaw Devil Restores", desc: "Quanxi's resurrection is one of several characters retrieved by Chainsaw Man's unique power over what has been erased. This raises the series' most haunting question: if the Chainsaw Devil can restore what it has consumed, what else might be retrievable? What has already been lost that could come back?" },
        ],
      }}
      deaths={{
        subtitle: "Her Arc's End",
        title: "QUANXI'S FALL",
        items: [
          {
            name: "QUANXI AND HER COMPANIONS",
            arc: "International Assassins Arc — Chapter 64",
            img: "/images/quanxi-anime.png",
            emoji: "🏹",
            desc: "Makima kills Quanxi — along with all four of her companions — simultaneously, using her remote crushing ability. The page is silent, sudden, and devastating. Five characters, including the series' most formidable fighter, gone in a single spread. Fujimoto gives them no warning, no last words, no heroic posture. Just absence.",
            weight: "One page. Five lives. No ceremony."
          },
          {
            name: "QUANXI (Resurrection)",
            arc: "Control Devil Arc — Resolution",
            img: "/images/quanxi-anime.png",
            emoji: "🏹",
            desc: "Quanxi is among the characters restored by Chainsaw Man's power — one of several Devil Hunters revived as a consequence of Denji's final battle with Makima. She returns. Whether all her companions returned with her is left unconfirmed. She walks back into a world that is the same and utterly changed.",
            weight: "Returned, without explanation."
          },
        ],
      }}
    />
  );
}
