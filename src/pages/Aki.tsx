import SpotlightPage from "@/components/SpotlightPage";

export default function Aki() {
  return (
    <SpotlightPage
      currentSlug="/aki"
      navBrand="AKI × CSM"
      hero={{
        prefix: "AK",
        highlight: "I",
        tagline: "The Devil Hunter. A man who chose vengeance and found a family — then was denied both.",
        img: "/images/aki-anime.png",
      }}
      spotlight={{
        title: "AKI HAYAKAWA",
        bio: (
          <>
            <p><strong className="text-white">Aki Hayakawa</strong> is a Public Safety devil hunter driven by a single purpose: revenge against the Gun Devil, which killed his family when he was a child. He is disciplined, serious, and emotionally restrained — qualities that mask a person of deep feeling and fierce loyalty.</p>
            <p>Aki formed contracts with multiple Devils to gain power — the Fox Devil, the Curse Devil, and eventually the Future Devil, who showed him a vision of his own death. Aki accepted that vision. He kept hunting anyway.</p>
            <p>What Fujimoto does with Aki is quietly extraordinary: he makes him the series' <strong className="text-white">moral center</strong> — the person who actually cares, who takes responsibility, who tries to protect the people around him — then systematically strips that protection away until he becomes the very thing he hunted.</p>
            <p>His relationship with Denji and Power begins as reluctant guardianship and becomes something closer to family. He never quite admits this. His death scene, in the snow, against the person he tried to protect, is one of the most devastating sequences in manga history.</p>
          </>
        ),
        stats: [
          { label: "Contracts", value: "Fox / Curse / Future / Gun" },
          { label: "Affiliation", value: "Public Safety Div. 4" },
          { label: "Arc", value: "All of Part 1" },
          { label: "Status", value: "Deceased", color: "text-[var(--red)]" },
        ],
        gallery: [
          { src: "/images/aki-anime.png", alt: "Aki — Full Design", caption: "Aki — Anime Design", emoji: "🔫" },
          { src: "/images/himeno-anime.png", alt: "Himeno — His Partner", caption: "Himeno — His Partner", emoji: "🚬" },
          { src: "/images/denji-anime.png", alt: "Denji — The One He Protected", caption: "The One He Protected", emoji: "⛓️" },
          { src: "/images/reze-runaway.png", alt: "The World He Died In", caption: "The World He Died In", emoji: "💣", wide: true },
        ],
      }}
      story={{
        subtitle: "Aki's Journey — Part 1",
        title: "THE DEVIL HUNTER'S ARC",
        arcs: [
          { num: "01", title: "Introduction — The Man With a Mission", desc: "Aki is already a seasoned devil hunter when Denji and Power arrive in his life. He resents them immediately — they are reckless, selfish, and nothing like the serious professionals he respects. He also feeds them, gives them a place to live, and quietly makes sure they don't die. He would deny all of this." },
          { num: "02", title: "Bat Devil Arc — Reluctant Responsibility", desc: "Aki watches Denji and Power's chaotic dynamic and begins accepting — against his better judgment — that he is responsible for them. He forms a contract with the Fox Devil and introduces Denji to the brutal economics of devil hunting: power always costs something." },
          { num: "03", title: "Eternity Devil Arc — Meeting Himeno", desc: "The Eternity Devil arc gives Aki his emotional counterpart: Himeno, the senior hunter who has lost every partner she ever had and keeps going anyway. They recognize something in each other — people who know grief but won't stop. Their relationship is never fully spoken. It doesn't need to be." },
          { num: "04", title: "Katana Man Arc — What Loss Costs", desc: "Himeno's death in this arc breaks something in Aki. She dissolved herself to save them. He was there. He formed a contract with the Curse Devil — a contract with a fatal limit — to pursue the people who caused it. He knows what this costs. He pays it anyway." },
          { num: "05", title: "Future Devil Arc — Seeing His Death", desc: "The Future Devil shows Aki his own death. Aki doesn't flinch. He accepts the contract. This is the moment that reframes everything: Aki knows. He has always known. He chooses to keep going not because he thinks he can survive, but because the time he has left means something." },
          { num: "06", title: "Gun Devil / Makima Arc — Possession and the Snow", desc: "Aki is possessed by the Gun Devil and transformed into a hybrid. When he fights Denji — the person he spent the entire series protecting — in a snow-covered residential street, his last inner vision is of a peaceful domestic life with Denji and Power. He never had it. He wanted it. He dies seeing it." },
        ],
      }}
      philosophy={{
        subtitle: "What Aki Represents",
        title: "THE PHILOSOPHY OF AKI",
        quote: "Aki is what happens when a person chooses responsibility in a world that punishes it. He builds a family in the ruins of his first one — and is denied that too. He is the series' clearest argument that caring, in this world, is the most dangerous thing you can do.",
        attribution: "Analysis of Aki's arc in Chainsaw Man",
        items: [
          { num: "01", title: "Vengeance as Purpose", desc: "Aki's entire identity is organized around the Gun Devil that destroyed his childhood. This gives him drive, structure, and a reason to keep forming contracts despite the cost. Fujimoto is careful not to redeem this — vengeance remains his motivation even as found-family fills in around it." },
          { num: "02", title: "The Price of Contracts", desc: "Every contract Aki makes costs him something physical and irreversible. The Fox Devil takes his arm movements. The Curse Devil takes his life expectancy. The Future Devil takes his peace of mind. Fujimoto uses Aki to show the series' central economy: power always extracts its payment." },
          { num: "03", title: "Found Family", desc: "Aki never chose Denji or Power. He was assigned them. But he feeds them, worries about them, and teaches them. His apartment becomes a home. He never calls any of them family. The death scene works because the reader knows he would have, eventually, if he'd been given the chance." },
          { num: "04", title: "Emotional Restraint as Armor", desc: "Aki processes everything internally and expresses almost nothing. This is not coldness — it is a survival strategy developed after tremendous loss. Himeno sees through it. The reader does too. His restraint makes every moment he does express something carry enormous weight." },
          { num: "05", title: "The Weight of Knowing", desc: "Aki knows he's going to die. The Future Devil showed him. He doesn't tell Denji or Power. He just tries to protect them for as long as he has left. This is the series' most quietly devastating choice: a man living out his remaining time as generously as he can, without telling anyone why." },
          { num: "06", title: "Death as the Ultimate Irony", desc: "Aki dies possessed by the very type of devil he spent his life hunting — the Gun Devil — fighting the person he spent his life protecting. His final conscious moment is a vision of the domestic peace he never got. Fujimoto gives him the ending he deserved only as a hallucination." },
        ],
      }}
      deaths={{
        subtitle: "Deaths That Defined Him",
        title: "LOSSES AKI CARRIED",
        items: [
          {
            name: "HIS FAMILY",
            arc: "Backstory — Gun Devil Massacre",
            img: "/images/aki-anime.png",
            emoji: "🔫",
            desc: "The Gun Devil killed Aki's younger brother and parents in a mass casualty event when Aki was a child. This loss is the foundation of everything — his career, his contracts, his obsession. Fujimoto never shows the event directly, keeping it as an absence that shapes the entire character.",
            weight: "The wound that made him."
          },
          {
            name: "HIMENO",
            arc: "Katana Man Arc — Chapter 34",
            img: "/images/himeno-anime.png",
            emoji: "🚬",
            desc: "Aki's closest adult relationship. Himeno dissolved herself to save the team — leaving a note to Aki that read 'Goodbye.' He finds it. The series never shows him reading it. It doesn't need to. Everything about how he moves after this scene shows what losing her cost him.",
            weight: "The goodbye he never got to give."
          },
          {
            name: "AKI HAYAKAWA (himself)",
            arc: "Gun Devil Arc — Chapter 90",
            img: "/images/aki-anime.png",
            emoji: "🔫",
            desc: "Possessed by the Gun Devil and forced to fight Denji through a snowy residential street. His final inner vision is of Denji and Power playing in the snow outside their apartment — a life they almost had. Denji kills him. The scene is rendered without music, without triumph. Just snow, and grief, and the weight of what they almost were.",
            weight: "The worst thing Denji ever had to do."
          },
        ],
      }}
    />
  );
}
