import SpotlightPage from "@/components/SpotlightPage";

export default function Himeno() {
  return (
    <SpotlightPage
      currentSlug="/himeno"
      navBrand="HIMENO × CSM"
      hero={{
        prefix: "HIME",
        highlight: "NO",
        tagline: "The Ghost Hunter. A woman who gave everything — her eye, her future, her life — for people she barely let herself love.",
        img: "/images/himeno-anime.png",
      }}
      spotlight={{
        title: "HIMENO / GHOST DEVIL CONTRACTOR",
        bio: (
          <>
            <p><strong className="text-white">Himeno</strong> is a senior Public Safety devil hunter who serves as a mentor to Division 4's newer recruits. She has watched every partner she has ever been assigned die. She wears an eyepatch over her right eye — given to the Ghost Devil as payment for its power.</p>
            <p>She presents as cynical, world-weary, and mildly reckless — she drinks too much and cares too visibly for someone who has learned how catastrophically that can end. But she keeps investing in people anyway. She cannot help it. She is, beneath everything, someone who loves being alive and loved the people who lived alongside her.</p>
            <p>Her contract with the <strong className="text-white">Ghost Devil</strong> gives her access to invisible arms that can grasp and crush, and to the full form of the Ghost Devil itself — at the cost of her entire body. She knew this when she signed. The arc of Himeno's character is contained in that decision.</p>
            <p>She is drawn with a specificity that makes her feel deeply real — her smoking, her failed attempts at professionalism with Denji, her restrained feeling for Aki. She is one of the series' most humanly written characters, which is precisely why her loss hits so hard.</p>
          </>
        ),
        stats: [
          { label: "Contract", value: "Ghost Devil" },
          { label: "Partnership", value: "Aki Hayakawa" },
          { label: "Arc", value: "Eternity / Katana Man" },
          { label: "Status", value: "Deceased", color: "text-[var(--red)]" },
        ],
        gallery: [
          { src: "/images/himeno-anime.png", alt: "Himeno — Full Design", caption: "Himeno — Anime Design", emoji: "🚬" },
          { src: "/images/aki-anime.png", alt: "Aki — Her Partner", caption: "Aki — Her Partner", emoji: "🔫" },
          { src: "/images/power-anime.png", alt: "Division 4", caption: "The Team She Protected", emoji: "🩸" },
          { src: "/images/reze-runaway.png", alt: "The World She Left", caption: "The World She Left Behind", emoji: "💣", wide: true },
        ],
      }}
      story={{
        subtitle: "Himeno's Journey",
        title: "THE GHOST HUNTER'S ARC",
        arcs: [
          { num: "01", title: "Introduction — The Veteran", desc: "Himeno appears as a composed, experienced hunter who has simply seen too much. She has a method for everything: she assigns herself to new hunters knowing they'll probably die, she drinks because it's the only way she stays numb enough to keep going, and she watches Aki with a careful distance that is its own kind of love." },
          { num: "02", title: "The Eternity Devil Arc — A Different Kind of Partner", desc: "Trapped in the Eternity Devil's loop, Himeno watches Denji fight with reckless, joyful stubbornness. She starts reconsidering her assessment of him. He is not a professional. He will never be a professional. But there is something in him that doesn't give up, and she has seen too many professionals give up to dismiss that." },
          { num: "03", title: "After the Mission — The Drinks and the Truth", desc: "The infamous post-mission drinking scene — Himeno gets drunk, Denji gets overwhelmed, and the evening ends memorably for all the wrong reasons. But beneath the comedy, the scene shows Himeno at her most honest: she is tired, she misses people, she is grateful to be alive right now. She doesn't say any of this directly." },
          { num: "04", title: "Katana Man Arc — The Final Contract", desc: "When Katana Man proves too powerful for Division 4 to handle, Himeno makes her decision. She offers her entire body to the Ghost Devil — not just her eye, but everything. She dissolves. The Ghost Devil wins the fight. Denji survives. She left a note for Aki that read 'Goodbye.'" },
          { num: "05", title: "Aftermath — The Note That Changed Aki", desc: "Aki finds Himeno's note. The series never shows him reading it. It shows the note, the empty clothes, the absence. What the note cost Aki — what the loss of her made him willing to do — drives the rest of his arc. She is gone, but the shape of her absence defines him from that point on." },
          { num: "06", title: "Legacy — What She Left Behind", desc: "Himeno's legacy is not a technique or a piece of wisdom — it is the example of someone who kept investing in other people even knowing the cost. She invested in Aki. She invested, reluctantly, in Denji. Both of those investments changed the people who survived her. She is the series' clearest portrait of grief kept carefully functional." },
        ],
      }}
      philosophy={{
        subtitle: "What Himeno Represents",
        title: "THE PHILOSOPHY OF HIMENO",
        quote: "Himeno is what sustained grief looks like when it does not become cynicism. She has lost every person she ever worked beside. She keeps working. She keeps caring. Not because she believes it will end differently — but because the alternative is to stop being the person she is.",
        attribution: "Analysis of Himeno's arc in Chainsaw Man",
        items: [
          { num: "01", title: "Grief Made Functional", desc: "Himeno has experienced enough loss to qualify as traumatized by any reasonable standard. Fujimoto does not write her as broken — he writes her as someone who has integrated grief into her operating system. She functions. She laughs. She drinks. She keeps going. This is its own kind of courage." },
          { num: "02", title: "The Cost of Experience", desc: "Himeno knows things Denji and Power don't: that most devil hunters die young, that every contract has a price, that caring about your partner is also accepting that you might watch them die. She knows all of this and keeps forming attachments anyway. Experience made her clear-eyed, not cold." },
          { num: "03", title: "Restrained Love", desc: "Her feeling for Aki is the series' most restrained romantic arc — expressed almost entirely through proximity, attention, and the quality of her concern. She never says what she means. He never quite asks. Their relationship lives in the space between words, which is where Fujimoto does his best work." },
          { num: "04", title: "The Decision She Always Knew She'd Make", desc: "Himeno's sacrifice is not a surprise to the reader who paid attention. Everything about her character — the eye, the knowledge of the Ghost Devil's full payment, the quiet way she said goodbye to Aki at the bar — points toward someone who had already decided what she was worth spending." },
          { num: "05", title: "'Goodbye' as the Last Word", desc: "Her note to Aki contained only one word: Goodbye. Fujimoto could have written more. He chose not to. This is precisely right. Himeno, who spent her entire screen time not saying what she meant, finally says the only thing that needs saying. It is enough. It is too much." },
          { num: "06", title: "Death Without Witness", desc: "Himeno's death is uniquely isolated — she dissolves. There is no body. There are only her clothes and the absence of her. Fujimoto denies her even the physicality of a conventional death scene. She just is not there anymore. This is, in its own way, the most devastating ending he could have given her." },
        ],
      }}
      deaths={{
        subtitle: "Her Partners. Her Cost. Her End.",
        title: "THE DEATHS HIMENO CARRIED",
        items: [
          {
            name: "EVERY PREVIOUS PARTNER",
            arc: "Backstory — Before the Series",
            img: "/images/himeno-anime.png",
            emoji: "🚬",
            desc: "Before the series begins, Himeno has been assigned multiple partners — all of whom died. The series never names them. They exist as an accumulation of absences that shape everything about how Himeno moves through the world: her drinking, her caution, her stubborn investment in people despite knowing how it ends.",
            weight: "The losses that made her who she is."
          },
          {
            name: "HIMENO (herself)",
            arc: "Katana Man Arc — Chapter 34",
            img: "/images/himeno-anime.png",
            emoji: "🚬",
            desc: "Himeno offers her entire body to the Ghost Devil to defeat Katana Man and save Denji. She dissolves completely — leaving only her clothes, her eyepatch, and a note. The dissolution is rendered with terrible gentleness. One moment she is there. Then she isn't. Then all that remains is the word 'Goodbye.'",
            weight: "She gave everything, and she knew she would."
          },
        ],
      }}
    />
  );
}
