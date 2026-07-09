import SpotlightPage from "@/components/SpotlightPage";

export default function Makima() {
  return (
    <SpotlightPage
      currentSlug="/makima"
      navBrand="MAKIMA × CSM"
      hero={{
        prefix: "MAK",
        highlight: "IMA",
        tagline: "The Control Devil. The most terrifying antagonist in modern manga — because she sounds so completely reasonable.",
        img: "/images/makima-anime.png",
      }}
      spotlight={{
        title: "MAKIMA / THE CONTROL DEVIL",
        bio: (
          <>
            <p><strong className="text-white">Makima</strong> is the Director of Public Safety's Special Division and, unknown to almost everyone, the <strong className="text-white">Control Devil</strong> — a primal devil born from humanity's fear of domination and subjugation. She is the series' central antagonist and one of the most psychologically complex villains in contemporary manga.</p>
            <p>Everything about Makima is performance. Her warmth, her encouragement, her apparent care for Denji — all of it is calibrated. She does not experience others as people. She experiences them as pieces on a board she has been playing for years, toward an end she considers an act of love.</p>
            <p>Her power is absolute: <strong className="text-white">she can control any being she considers beneath her</strong> — which is everyone. She can kill at range, through proxies, using others as her instruments. She is effectively unkillable through direct means, reincarnating death after death into a new Japanese woman.</p>
            <p>What makes Makima extraordinary is that she is not cruel for cruelty's sake. She has a vision — a world freed from fear, controlled into peace. She believes in it. She just cannot conceive that others might not want what she wants for them. This is the horror at the center of her character.</p>
          </>
        ),
        stats: [
          { label: "Devil Type", value: "Control Devil" },
          { label: "Position", value: "Public Safety Director" },
          { label: "Arc", value: "All of Part 1" },
          { label: "Status", value: "Deceased / Reincarnated", color: "text-[var(--red)]" },
        ],
        gallery: [
          { src: "/images/makima-anime.png", alt: "Makima — Full Design", caption: "Makima — Anime Design", emoji: "👁️" },
        ],
      }}
      story={{
        subtitle: "Makima's Orchestration — Part 1",
        title: "THE CONTROL DEVIL'S PLAN",
        arcs: [
          { num: "01", title: "Introduction — The Mentor Mask", desc: "Makima presents herself as Denji's savior and benefactor — giving him food, shelter, purpose, and affection. She frames everything as generosity. In reality, she has identified Denji as the key to acquiring Chainsaw Man's heart and is building the conditions for his complete psychological dependency. Her warmth is entirely real in her own mind. This is what makes it so dangerous." },
          { num: "02", title: "Building Division 4 — The Board Is Set", desc: "Makima carefully assembles Division 4 around Denji. Power, Aki, Himeno — she places each piece deliberately. She knows their contracts, their weaknesses, their psychological profiles. She also knows, from the beginning, how most of them will die. She places them anyway. They are components in a larger plan." },
          { num: "03", title: "The Bomb Girl Arc — Her First Move Against Denji", desc: "Makima kills Reze before she can reunite with Denji. This is not about protecting Denji from a threat — it is about preventing Denji from having a connection she did not authorize. She eliminates Reze quietly, remotely, and without telling Denji. His confusion and quiet grief are, to Makima, acceptable parameters." },
          { num: "04", title: "International Assassins — Controlled from the Shadows", desc: "The foreign assassin wave was partially orchestrated by Makima. She allows threats to reach Denji because they make him stronger — and because his suffering is useful to her project. She pulls strings globally from her Tokyo office, treating international incidents as minor adjustments." },
          { num: "05", title: "The Dismantling — Everything Taken", desc: "Makima dismantles Denji's life with surgical precision. Power is executed in front of him. Aki is transformed into a weapon and then killed by Denji's own hand. Denji is broken down to nothing — less than he was before she found him. This is the plan. She needs him empty so she can fill him with something of her design." },
          { num: "06", title: "The End — Eaten by the One She Couldn't Control", desc: "Denji defeats Makima not through power but through intimacy — he eats her, meal by meal, incorporating her into himself so she cannot reincarnate. It is the series' most poetically absurd act of violence. The Control Devil is defeated not by force but by being refused the one thing she cannot control: the recognition that comes from being truly known." },
        ],
      }}
      philosophy={{
        subtitle: "What Makima Represents",
        title: "THE PHILOSOPHY OF MAKIMA",
        quote: "Makima is love without autonomy — a force that claims to care while refusing to acknowledge the other person's existence as separate from her own desires. Fujimoto does not write her as evil. He writes her as genuinely unable to understand why anyone would object.",
        attribution: "Analysis of Makima's arc in Chainsaw Man",
        items: [
          { num: "01", title: "Control as Love", desc: "Makima genuinely believes she loves Chainsaw Man. But her love is the love of a collector — she wants to possess, shape, and preserve him in a form she has designed. Fujimoto interrogates the terrifying version of love that refuses to acknowledge the other person's separateness." },
          { num: "02", title: "The Bureaucracy of Evil", desc: "Makima's horror is partly structural: she operates through government, authority, and institutional power. She doesn't need to get her hands dirty. She fills out forms, attends meetings, and has people killed through proper channels. Evil is most terrifying when it wears a lanyard." },
          { num: "03", title: "The Vision She Believes In", desc: "Makima wants a world without fear, controlled into peace. This is not nihilism — it is a genuine ideology. She thinks she is right. Fujimoto refuses to give her a breakdown or a redemption; she is still working toward her goal in her final scene. Ideology, not sadism, is the engine." },
          { num: "04", title: "Charisma as Weapon", desc: "Makima is the most charismatic character in the series. Everyone who meets her is affected. Fujimoto uses this to make the reader feel what Denji feels — the pull toward her warmth, the difficulty of seeing through it. The reader is not immune to her either." },
          { num: "05", title: "The Hierarchy She Lives In", desc: "Makima worships what is above her (Chainsaw Man's power) and controls what is below her (everyone else). She cannot conceive of equals. This is the psychological portrait of someone who has organized their entire world around vertical relationships and has no model for anything horizontal." },
          { num: "06", title: "Reincarnation as Refusal", desc: "Makima cannot be killed by conventional means — she reincarnates death into another Japanese woman. This is not just a power; it is a philosophical statement. The Control Devil cannot be defeated by force because domination, as an idea, always resurfaces. Only by being consumed — incorporated — can it be quieted." },
        ],
      }}
      deaths={{
        subtitle: "Deaths She Caused",
        title: "MAKIMA'S TOLL",
        items: [
          {
            name: "HIMENO",
            arc: "Katana Man Arc — Chapter 34",
            img: "/images/himeno-anime.png",
            emoji: "🚬",
            desc: "Makima's orchestration of Division 4's exposure to the Katana Man crisis led directly to the conditions of Himeno's sacrifice. She knew the risks. She accepted them as parameters. Himeno's death was not targeted by Makima directly — but it was allowed, as all Division 4 casualties were, because they served the larger plan.",
            weight: "Collateral in a plan she never disclosed."
          },
          {
            name: "POWER",
            arc: "Control Devil Arc — Chapter 84",
            img: "/images/power-anime.png",
            emoji: "🩸",
            desc: "Makima executes Power in front of Denji as a calculated psychological instrument. No warning. No words. A point-blank shot designed to maximize emotional damage. Power's death is not incidental — it is a planned phase of Denji's dismantling. Makima watches Denji's reaction with clinical interest.",
            weight: "A weapon fired at Denji's heart."
          },
          {
            name: "MAKIMA (herself)",
            arc: "Control Devil Arc — Chapter 96",
            img: "/images/makima-anime.png",
            emoji: "👁️",
            desc: "Denji defeats Makima by eating her — consuming her entire body over days, incorporating her into himself. She cannot reincarnate because she has become part of him. In death she achieves, ironically, the closeness she always sought. She is reincarnated as Nayuta, a child, and given to Denji to raise. He does.",
            weight: "The only ending that could contain her."
          },
        ],
      }}
    />
  );
}
