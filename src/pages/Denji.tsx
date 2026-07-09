import SpotlightPage from "@/components/SpotlightPage";

export default function Denji() {
  return (
    <SpotlightPage
      currentSlug="/denji"
      navBrand="DENJI × CSM"
      hero={{
        prefix: "DEN",
        highlight: "JI",
        tagline: "The Chainsaw Man. A boy who only wanted bread, a bed, and something to live for — and got a devil's heart instead.",
        img: "/images/denji-anime.png",
      }}
      spotlight={{
        title: "DENJI / CHAINSAW MAN",
        bio: (
          <>
            <p><strong className="text-white">Denji</strong> is the protagonist of <em>Chainsaw Man</em> — a teenager who grew up in crushing poverty, inheriting a debt from his deceased father to a yakuza organization. His only companion was <strong className="text-white">Pochita</strong>, the Chainsaw Devil in the form of a small dog, with whom he hunted low-level Devils to survive.</p>
            <p>After being betrayed and killed by the yakuza under a Zombie Devil's control, Denji was resurrected when Pochita merged with his heart — fulfilling his wish for Denji to live the "normal life" he'd always talked about. Denji awoke as a <strong className="text-white">Devil-human hybrid</strong>, able to sprout chainsaws from his arms, legs, and head by pulling the cord in his chest.</p>
            <p>What makes Denji extraordinary as a protagonist is his utter refusal to be a hero. His goals are <strong className="text-white">deliberately, almost comically small</strong>: he wants to eat good food, sleep in a real bed, and experience a romantic relationship. These humble desires — born of a life that gave him nothing — are both the source of his incredible resilience and the lever used to break him.</p>
            <p>He is simultaneously <strong className="text-white">the most powerful being in existence</strong> — the Chainsaw Devil erases the concept of whatever it eats from all memory — and one of the most emotionally vulnerable characters in manga. He is used, manipulated, and grieved through, yet continues to cling to life with a stubbornness that reads as both heroic and heartbreaking.</p>
            <p>Readers can't help but <strong className="text-white">feel deeply sorry for Denji</strong>. He never had a childhood — no warmth, no safety, no one to protect him. He sold his own organs to survive. He grew up with nothing but a devil for a companion and a debt he never deserved. Before he ever gets to enjoy the small life he fought so hard for, the world takes it from him again and again. His story isn't just sad — it's the kind of sadness that lingers, because everything he suffers is so utterly undeserved.</p>
          </>
        ),
        stats: [
          { label: "Devil Form", value: "Chainsaw Man" },
          { label: "Origin", value: "Japan (Unknown)" },
          { label: "Arc", value: "All of Part 1 & 2" },
          { label: "Status", value: "Alive", color: "text-green-400" },
        ],
        belowStats: [
          { src: "/images/denji-rain.png", alt: "Denji — Rain Scene", caption: "Denji — The Boy Who Just Wanted to Live", emoji: "⛓️" },
          { src: "/images/denji-manga1.png", alt: "Denji — Chainsaw Arm", caption: "Denji — Chainsaw Arm", emoji: "⛓️" },
        ],
        gallery: [
          { src: "/images/denji-anime.png", alt: "Denji — Full Appearance", caption: "Denji — Anime Design", emoji: "⛓️" },
          { src: "/images/pochita-anime.png", alt: "Pochita — Before the Merge", caption: "Pochita — Before the Merge", emoji: "🐶" },
          { src: "/images/denji.png", alt: "Denji — Expression", caption: "Denji — Expression", emoji: "⛓️" },
          { src: "/images/reze-runaway.png", alt: "The Moment That Changed Everything", caption: "The Moment That Changed Everything", emoji: "💣", wide: true },
        ],
      }}
      story={{
        subtitle: "Denji's Journey — Part 1 & 2",
        title: "DENJI'S COMPLETE SAGA",
        arcs: [
          { num: "01", title: "Part 1 — Chapters 1–13 | Birth of Chainsaw Man", desc: "Denji lives in crushing poverty, selling his organs and hunting low-level Devils with Pochita to repay a yakuza debt he inherited from his father. Betrayed and murdered by yakuza under a Zombie Devil's control, Denji is resurrected when Pochita merges with his heart. He awakens as the Chainsaw Man hybrid and is taken in by Makima, joining Public Safety Division 4. For the first time in his life, he eats real food, sleeps in a real bed, and has people around him." },
          { num: "02", title: "Part 1 — Chapters 14–22 | First Real Fights", desc: "Denji and Power are captured by the Bat Devil after Power tricks him to save her cat Meowy. Denji transforms and fights his way free — discovering both the limits and capacity of his power. His motivation in every fight is strikingly mundane: he fights so he can keep eating good food and living the life he finally has. This sincerity is played for laughs and tragedy in equal measure." },
          { num: "03", title: "Part 1 — Chapters 23–38 | Trapped in Eternity", desc: "Trapped in an infinite hotel loop by the Eternity Devil, Denji fights alone for three days straight — consuming the Devil's blood to regenerate, revving and revving and refusing to stop. No plan, no tactics, just stubborn refusal to die. He wins. The arc reveals his true strength: not power, but endurance. He will not quit because quitting means going back to nothing." },
          { num: "04", title: "Part 1 — Chapters 39–52 | Reze — The Bomb Girl", desc: "Denji meets Reze at a café. She listens to him. She makes him feel seen for the first time. He falls for her completely. When she reveals herself as the Bomb Devil hybrid sent to take his heart, it devastates him — not because of the danger, but because of what it means. Their connection was real, even if her mission wasn't. She asks him to run away with her. He waits at their meeting point. She never comes. He doesn't know she's already dead." },
          { num: "05", title: "Part 1 — Chapters 53–70 | Hunted Across Japan", desc: "Assassins from multiple nations descend on Denji, all seeking the Chainsaw Man's heart. He fights through Quanxi, Santa Claus, the Doll Devil, and a nightmare trip through Hell — all while Makima orchestrates things from above. Denji is a pawn on a board he doesn't understand, surviving on reflexes and the desperate desire to keep the small life he's built." },
          { num: "06", title: "Part 1 — Chapters 71–79 | The Gun Devil", desc: "The mythic Gun Devil becomes the arc's focus. Aki is revealed to have made a fatal contract with the Future Devil, who showed him his death. Denji doesn't fully understand what's coming. He just knows Aki is important to him. The arc tightens the noose on everyone Denji loves." },
          { num: "07", title: "Part 1 — Chapters 80–97 | Everything Taken", desc: "Makima methodically destroys everything Denji has. Power is shot in front of him. He is broken down to nothing. In a final act of desperate creativity, Denji defeats the unkillable Makima by eating her, meal by meal, merging her into himself so she cannot reincarnate. The cost is everything he built. What remains is Denji, alone, starting again — this time raising Nayuta, Makima's reincarnation, as a younger sister." },
          { num: "08", title: "Part 2 — Chapter 98+ | Chainsaw Man as Legend", desc: "By Part 2, the Chainsaw Man is a public figure — a celebrity, a symbol, a controversy. Denji still just wants a girlfriend. Meanwhile Asa Mitaka, the new protagonist, is searching for him as the War Devil's weapon-to-be. Denji and Asa's relationship becomes Part 2's emotional anchor — two people desperately looking for something real, circling each other across an increasingly surreal world." },
        ],
      }}
      philosophy={{
        subtitle: "What Denji Means",
        title: "THE PHILOSOPHY OF DENJI",
        quote: "Denji is the only shōnen protagonist whose deepest wish is simply to not be miserable. Fujimoto treats this as both comedy and tragedy — because in a just world, it shouldn't be a wish at all.",
        attribution: "Critical analysis of Denji's character arc",
        items: [
          { num: "01", title: "The Poverty of Desire", desc: "Denji doesn't want to save the world. He wants bread. A warm bed. Someone to hold. Fujimoto treats these desires with total sincerity — they are the most human desires imaginable, born from a childhood of having nothing. The tragedy is that even these smallest dreams are violently contested in the world of Chainsaw Man." },
          { num: "02", title: "Resilience Without Ideology", desc: "Most shōnen heroes are driven by principle — protecting the weak, surpassing their limits, earning respect. Denji has no ideology. He fights because fighting is the only thing keeping his small life intact. This makes his resilience feel more honest: he doesn't endure for a cause, he endures because the alternative is nothing." },
          { num: "03", title: "The Chainsaw as Identity", desc: "Denji's devil form is the most feared entity in Hell — the being that erases Devils from existence and memory. Yet Denji himself is completely unaware of this. His power is disproportionate to his self-image. He is a cosmic force walking around worried about whether he'll get to eat meat that day." },
          { num: "04", title: "Used as a Tool", desc: "Almost every major character in Part 1 uses Denji as an instrument — Makima most deliberately, but also the yakuza, Public Safety, foreign governments. His openness and sincerity, which should be virtues, become vulnerabilities in a world of manipulators. Fujimoto forces the reader to watch someone good get used up." },
          { num: "05", title: "Grief Without Language", desc: "When Denji loses Aki and Power, he doesn't process it in any literary way. He just keeps going, with a hollowness that is more painful than any dramatic breakdown. Fujimoto understands that real grief — especially in people who've already suffered enormously — often has no language. It just continues, under everything." },
          { num: "06", title: "The Meaning of a Normal Life", desc: "Pochita's wish for Denji was to live a normal life. Denji has never known what normal means. The entire series is his attempt to find it — through violence, loss, connection, and betrayal. By Part 2, 'normal' has become both unreachable and the only thing worth reaching for." },
        ],
      }}
      deaths={{
        subtitle: "Losses That Defined Denji",
        title: "THE DEATHS THAT BROKE HIM",
        items: [
          { name: "POCHITA", arc: "Introduction Arc — Chapter 1", img: "/images/pochita-anime.png", emoji: "🐶", desc: "Not a death in the traditional sense. Pochita merged with Denji's heart to save him — fulfilling his promise to give Denji his dreams. He asked for nothing in return except for Denji to live. Denji carries this loss and this gift in the most literal way possible: inside his chest.", weight: "The wound that started everything." },
          { name: "HIMENO", arc: "Katana Man Arc — Chapter 34", img: "/images/himeno-anime.png", emoji: "🚬", desc: "Himeno sacrificed her entire body to the Ghost Devil to defeat Katana Man and save Denji. She dissolved completely — leaving only a note to Aki. Denji never got to know her well, but her death was the first real thing he witnessed being taken from someone else.", weight: "The first time he saw someone give everything." },
          { name: "REZE", arc: "Bomb Girl Arc — Chapter 52", img: "/images/reze-casual.png", emoji: "💣", desc: "Denji never found out Reze was killed. He waited at the café where they were supposed to meet — not knowing Makima had already crushed her remotely. He waited for someone who would never come. He still doesn't know the full truth of what she was, or what she might have become.", weight: "The absence he could never understand." },
          { name: "POWER", arc: "Control Devil Arc — Chapter 84", img: "/images/power-anime.png", emoji: "🩸", desc: "Shot by Makima directly in front of Denji. No warning, no ceremony — there one moment, obliterated the next. Power, who had grown from a selfish fiend into someone who genuinely loved Denji, died as a calculated emotional instrument. Makima shot her to break Denji completely. It worked.", weight: "The blow designed to destroy him." },
          { name: "AKI HAYAKAWA", arc: "Gun Devil Arc — Chapter 90", img: "/images/aki-anime.png", emoji: "🔫", desc: "Aki was possessed by the Gun Devil and transformed into a hybrid. Denji was forced to fight and kill the thing that wore Aki's face — a possessed version of his older brother figure, in the snow, in front of the neighborhood kids they'd been protecting. Aki's last inner vision was of a peaceful life. Denji carries this too.", weight: "The worst thing he has ever had to do." },
        ],
      }}
    />
  );
}
