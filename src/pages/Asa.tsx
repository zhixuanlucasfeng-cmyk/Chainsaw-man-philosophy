import SpotlightPage from "@/components/SpotlightPage";

export default function Asa() {
  return (
    <SpotlightPage
      currentSlug="/asa"
      navBrand="ASA × CSM"
      hero={{
        prefix: "A",
        highlight: "SA",
        tagline: "The War Devil's Host. A girl who wanted to disappear — until she had to fight to exist.",
        img: "/images/asa-anime.png",
      }}
      spotlight={{
        title: "ASA MITAKA / YORU",
        bio: (
          <>
            <p><strong className="text-white">Asa Mitaka</strong> is a high school student who wanted nothing more than to be left alone. After being killed by a classmate's devil, she was revived by <strong className="text-white">Yoru</strong> — the War Devil — who needed a human host. They now share one body, two minds, and fundamentally incompatible goals.</p>
            <p>Yoru wants to gather weapons by transforming Asa's emotional bonds into swords — the War Devil's power converts things that mean something to their owner into devastating armaments. Asa wants connection, a reason to keep living, and for people to stop dying because of her.</p>
            <p>Asa is Part 2's emotional center: a character defined by <strong className="text-white">survivor's guilt</strong>, social anxiety, and a desperate hunger for real connection — cohabiting with a being made of war who sees her relationships as raw material. Their internal dynamic is Part 2's most complex and compelling element.</p>
            <p>She meets Denji during Part 2 and circles him across multiple arcs — neither of them understanding the other, both of them wanting something the other might provide. They are the series' second great almost-love story, written with a different texture but the same ache.</p>
          </>
        ),
        stats: [
          { label: "Devil Host", value: "War Devil (Yoru)" },
          { label: "Occupation", value: "High School Student" },
          { label: "Arc", value: "Part 2 — Protagonist" },
          { label: "Status", value: "Alive", color: "text-green-400" },
        ],
        belowStats: [
          { src: "/images/asa-yoru.png", alt: "Asa — Yoru Awakening", caption: "Asa Mitaka — The War Devil Awakens", emoji: "⚔️" },
        ],
        gallery: [
          { src: "/images/asa-anime.png", alt: "Asa — Full Design", caption: "Asa Mitaka — Anime Design", emoji: "⚔️", wide: true },
          { src: "/images/asa-window.png", alt: "Asa — Night Window", caption: "Asa Mitaka — Alone at Night", emoji: "⚔️", wide: true },
        ],
      }}
      story={{
        subtitle: "Asa's Journey — Part 2",
        title: "THE WAR DEVIL'S HOST",
        arcs: [
          { num: "01", title: "Death and Revival — The Beginning", desc: "Asa Mitaka is killed by a classmate's Class Devil at the beginning of Part 2. Yoru, the War Devil, revives her — but at a cost: Asa's left brain is replaced by Yoru, who now shares her body and can take control when she chooses. Asa did not consent to this. She does not have the option of refusing it. She has to figure out how to live in a body that is half hers." },
          { num: "02", title: "School Life — The Impossible Normal", desc: "Asa tries to return to school, navigate social dynamics, and not accidentally give Yoru the emotional material she needs to make weapons. The problem: Yoru's weapons require things that matter to Asa. Forming relationships makes her a weapon manufacturer. Not forming them makes her alone. She attempts both. She fails at both." },
          { num: "03", title: "The Aquarium Date — First Contact With Denji", desc: "Yoru sends Asa to befriend Denji — the Chainsaw Man she needs as her ultimate weapon. What happens instead: Asa and Denji go to an aquarium, awkwardly fail to connect, fall off a bridge, nearly die, and something genuine passes between them that neither understands. Fujimoto writes this scene with the exact texture of real teenage connection: clumsy, earnest, and not what either of them planned." },
          { num: "04", title: "Yoru's Pressure — The Weapon That Won't Form", desc: "Yoru keeps pushing Asa to turn her bond with Denji into a weapon. The weapon won't form because Asa won't commit to the bond, and the bond won't deepen because she knows Yoru is watching. Asa is trapped between wanting connection and being unable to have it safely. This is Part 2's central knot." },
          { num: "05", title: "Hell — A Second Time", desc: "Asa ends up in Hell in Part 2 — a trip that is both terrifying and revelatory. The series' underworld remains the most honest setting in Chainsaw Man: in Hell, there is no pretense, no social performance, only what things actually are. Asa confronts what she is, what Yoru is, and whether they can exist together without destroying each other." },
          { num: "06", title: "The Choice to Keep Going", desc: "Asa's arc, still in progress, is fundamentally about the will to live when life keeps punishing you for wanting it. She does not have Denji's stubborn joy or Reze's tragic beauty. She has ordinary survival instinct and the inconvenient desire to matter to someone. Fujimoto treats this as heroism. It is." },
        ],
      }}
      philosophy={{
        subtitle: "What Asa Represents",
        title: "THE PHILOSOPHY OF ASA",
        quote: "Asa Mitaka is Part 2's argument that wanting to be ordinary is extraordinary. She doesn't want to save the world. She wants to exist in it, safely, with someone who won't disappear. In Chainsaw Man's world, this is the most difficult thing to want.",
        attribution: "Analysis of Asa's arc in Chainsaw Man Part 2",
        items: [
          { num: "01", title: "Survivor's Guilt as Identity", desc: "Asa believes, on some level, that she does not deserve to survive. People around her die. She keeps living. This guilt is not dramatic self-loathing — it is the quiet kind, the kind that shapes every social interaction and makes normal connection feel like a trap waiting to close." },
          { num: "02", title: "The Body That Isn't Entirely Hers", desc: "Asa shares her body with a being who can take control, who monitors her emotions, who has different goals and different appetites. Fujimoto uses this as a literal version of something many people experience figuratively: the sense that part of you is working against the rest of you, and you have to negotiate." },
          { num: "03", title: "War as a Perspective", desc: "Yoru — the War Devil — sees the world through the lens of conflict: every relationship is a potential weapon, every bond is leverage. Asa, inhabiting the same body, experiences the same world completely differently. Their cohabitation is a dialogue between two irreconcilable ways of seeing, forced to share a life." },
          { num: "04", title: "Wanting Love in a World That Costs It", desc: "Asa wants connection with the full knowledge that connection — in her situation — is literally weaponizable. She wants it anyway. This is Fujimoto writing desire as something that persists even when rational self-interest argues against it. Asa is not stupid. She knows the risk. She tries anyway." },
          { num: "05", title: "The Aquarium Scene as Template", desc: "The aquarium date between Asa and Denji is Part 2's most important scene. It is awkward, funny, and tender in equal measure. Fujimoto shows two damaged people trying to connect and mostly failing, but the attempting is the point. The gap between them is not absence — it is the space where something might grow." },
          { num: "06", title: "Ordinary Survival as Heroism", desc: "Asa's heroism is not spectacular. She is not saving the world. She is surviving it, one day at a time, while sharing a body with a war devil and trying to maintain enough humanity to matter to someone. Fujimoto treats this as sufficient. He argues, quietly, that it is." },
        ],
      }}
      deaths={{
        subtitle: "What She Carries",
        title: "ASA'S LOSSES",
        items: [
          {
            name: "ASA MITAKA (The First Death)",
            arc: "Part 2 — Introduction Chapter",
            img: "/images/asa-anime.png",
            emoji: "⚔️",
            desc: "Asa is killed by a classmate who was possessed by a devil at the very start of Part 2. This death — and the revival that follows — is the defining event of her arc. She did not choose to be revived by the War Devil. She did not choose to share her body. She did not choose any of this. She chooses, every day after, to keep going anyway.",
            weight: "The death she survived without consent."
          },
          {
            name: "CLASSMATES AND BYSTANDERS",
            arc: "Part 2 — Multiple Chapters",
            img: "/images/asa-anime.png",
            emoji: "⚔️",
            desc: "Multiple people in Asa's orbit die across Part 2 as a consequence of the conflicts she is drawn into. Her survivor's guilt compounds with each loss. She was not responsible for their deaths — but she was there, and she survived, and that weight accumulates. This is what her arc is really about: what do you do with the fact that you keep being the one who lives?",
            weight: "The weight that doesn't lighten."
          },
        ],
      }}
    />
  );
}
