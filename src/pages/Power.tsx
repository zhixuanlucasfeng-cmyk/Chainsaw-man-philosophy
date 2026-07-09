import SpotlightPage from "@/components/SpotlightPage";

export default function Power() {
  return (
    <SpotlightPage
      currentSlug="/power"
      navBrand="POWER × CSM"
      hero={{
        prefix: "POW",
        highlight: "ER",
        tagline: "The Blood Devil. Selfish, chaotic, and secretly capable of the most profound love the series has to offer.",
        img: "/images/power-anime.png",
      }}
      spotlight={{
        title: "POWER / BLOOD FIEND",
        bio: (
          <>
            <p><strong className="text-white">Power</strong> is a Blood Fiend — a devil that has taken over a human corpse — who was coerced into joining Public Safety Division 4. Unlike most fiends, she retained an unusually strong sense of self, including her name, her personality, and her intense self-interest.</p>
            <p>She introduces herself as having no loyalty, no empathy, and no interest in humans beyond what they can do for her. She is lying about all of it — but it takes the entire series to prove it. Power lies constantly, mostly about herself, mostly to protect the parts of herself she doesn't yet know how to name.</p>
            <p>As the Blood Devil, Power can <strong className="text-white">freely manipulate her own blood</strong> — forming weapons, hardening it into armour, and unleashing torrents of it in combat. She is one of the strongest members of Division 4, though she fights with chaotic abandon rather than strategy.</p>
            <p>Her arc is the series' quietest transformation: from a creature of pure self-interest to someone who, against every instinct, learns to love. Her relationship with Denji — equal parts bickering and genuine care — is one of Chainsaw Man's greatest emotional achievements.</p>
          </>
        ),
        stats: [
          { label: "Devil Type", value: "Blood Fiend" },
          { label: "Division", value: "Public Safety Div. 4" },
          { label: "Arc", value: "Part 1 — All Arcs" },
          { label: "Status", value: "Deceased", color: "text-[var(--red)]" },
        ],
        gallery: [
          { src: "/images/power-anime.png", alt: "Power — Full Design", caption: "Power — Anime Design", emoji: "🩸" },
          { src: "/images/power-grin.png", alt: "Power — Devil's Grin", caption: "The Blood Fiend's Smile", emoji: "🩸" },
          { src: "/images/meowy.jpg", alt: "Meowy — Power's Cat", caption: "Meowy — The Cat She Loved", emoji: "🐱" },
          { src: "/images/power-serious.png", alt: "Power — Serious", caption: "Power, Unmatched", emoji: "🩸", wide: true },
        ],
      }}
      story={{
        subtitle: "Power's Journey — Part 1",
        title: "THE BLOOD FIEND'S ARC",
        arcs: [
          { num: "01", title: "Introduction — The First Betrayal", desc: "Power joins Division 4 under Makima's control and immediately makes her self-serving nature clear. She tricks Denji into rescuing her cat Meowy from the Bat Devil, getting them both captured. When Denji saves her anyway, she is confused. No one has ever done something for her without expecting something in return. She doesn't know what to do with this." },
          { num: "02", title: "Eternity Devil Arc — Survival", desc: "Trapped in the Eternity Devil's infinite hotel, Power watches Denji fight for three days straight — not for any cause, but because he refuses to give up. She respects this in the way she understands respect: as power recognizing power. She doesn't admit it. But she notices." },
          { num: "03", title: "Bomb Girl Arc — A Line She Won't Cross", desc: "When Reze attacks Division 4, Power fights and is outmatched. But she keeps fighting. Not for duty — she doesn't believe in duty. For reasons she can't fully articulate, she doesn't want to lose the thing she has now. The messy apartment. The arguments. The strange normalcy of it." },
          { num: "04", title: "International Assassins — Blood at Its Limit", desc: "Power pushes her devil powers to their absolute limit against the foreign assassins and the Doll Devil's army. She is near death more than once. Each time she claws back. She is starting to understand that she doesn't want to die — not because she fears it, but because there are things she wants to keep." },
          { num: "05", title: "Gun Devil Arc — The Beginning of the End", desc: "The Gun Devil arc tightens the noose on Division 4. Power senses something is wrong with the direction events are moving but lacks the vocabulary to express it. She starts being slightly less horrible to Denji, in the only way she knows: she yells at him less. He doesn't notice. She doesn't tell him this is love." },
          { num: "06", title: "Makima Arc — Her Last Act", desc: "Power is shot by Makima in front of Denji. Point-blank. Without ceremony. As a psychological weapon. In her final moments — reborn briefly through Denji's blood — she tells him to find her reincarnation and raise her well. Her last act is not violence. It is care. It always was." },
        ],
      }}
      philosophy={{
        subtitle: "What Power Represents",
        title: "THE PHILOSOPHY OF POWER",
        quote: "Power does not grow. She transforms. From a creature that could not conceive of others into something that would die for them — and did. Fujimoto hides one of his most complete character arcs inside the loudest character in the room.",
        attribution: "Analysis of Power's arc in Chainsaw Man",
        items: [
          { num: "01", title: "The Id Unfiltered", desc: "Power is the series' purest expression of raw desire — she wants what she wants, takes what she takes, and lies without guilt. Fujimoto doesn't moralize this. He lets Power be Power and then slowly, quietly, shows how even an Id can develop an attachment that changes it." },
          { num: "02", title: "Selfishness as Survival", desc: "Power's selfishness wasn't born from greed — it was born from being a Devil in a world that kills Devils. Self-interest is how she survived. Fujimoto treats this not as a flaw but as an adaptation. Her growth isn't about losing selfishness; it's about expanding who she considers worth being selfish for." },
          { num: "03", title: "The Comedy of Care", desc: "Power's love is expressed through insults, complaints, and refusing to admit anything. This is played for comedy throughout the series, but Fujimoto uses that comedy to make her genuine moments land harder. When Power acts selflessly, it costs her everything — because it goes against every instinct she has." },
          { num: "04", title: "The Value of Chaos", desc: "Division 4 without Power would be grimmer, quieter, and more efficient. It would also be less human. She brings chaos but also life — an energy that makes the tragedy more bearable and the final losses more devastating. She mattered, loudly, until she didn't." },
          { num: "05", title: "Meowy — The First Crack", desc: "Power's attachment to her cat Meowy is the series' first clue that she isn't what she says she is. She risks everything for an animal. Fujimoto plants this early and deliberately: a creature who claims to feel nothing, risking everything for a creature who cannot give anything back." },
          { num: "06", title: "Death Without Dignity", desc: "Power's death is stripped of any heroism by Makima's design — it is abrupt, cruel, and witnessed. But Fujimoto gives her a final scene of extraordinary grace: she comes back one last time not to fight, but to say goodbye properly. The messiest character in the series gets the most tender farewell." },
        ],
      }}
      deaths={{
        subtitle: "Deaths That Defined Her",
        title: "LOSSES POWER CARRIED",
        items: [
          {
            name: "MEOWY",
            arc: "Bat Devil Arc — Chapter 11",
            img: "/images/pochita-anime.png",
            emoji: "🐱",
            desc: "Power's cat Meowy was taken by the Bat Devil and used as a hostage. Power's willingness to trick Denji and risk everything to save a cat was the first crack in her 'I feel nothing' persona. Meowy survived. Power started to change.",
            weight: "The beginning of everything."
          },
          {
            name: "HIMENO",
            arc: "Katana Man Arc — Chapter 34",
            img: "/images/himeno-anime.png",
            emoji: "🚬",
            desc: "Power witnessed Himeno's sacrifice without fully understanding it. A person dissolving themselves for others was a concept foreign to everything Power believed. She didn't grieve loudly. But she started paying attention to what people were willing to do for each other.",
            weight: "A lesson she couldn't name."
          },
          {
            name: "POWER (herself)",
            arc: "Control Devil Arc — Chapter 84",
            img: "/images/power-anime.png",
            emoji: "🩸",
            desc: "Shot by Makima in front of Denji as a calculated act of emotional destruction. Power died not in combat but as a message. Her final reappearance — born from Denji's blood — was quiet, warm, and utterly unlike everything she had pretended to be. She told him to find her reincarnation and take care of her.",
            weight: "The loudest character's quietest goodbye."
          },
        ],
      }}
    />
  );
}
