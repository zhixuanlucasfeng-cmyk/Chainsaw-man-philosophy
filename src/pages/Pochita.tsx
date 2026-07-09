import SpotlightPage from "@/components/SpotlightPage";

export default function Pochita() {
  return (
    <SpotlightPage
      currentSlug="/pochita"
      navBrand="POCHITA × CSM"
      hero={{
        prefix: "POCH",
        highlight: "ITA",
        tagline: "The Chainsaw Devil. The most feared being in existence — who chose to be small for someone who needed a friend.",
        img: "/images/pochita-anime.png",
      }}
      spotlight={{
        title: "POCHITA / THE CHAINSAW DEVIL",
        bio: (
          <>
            <p><strong className="text-white">Pochita</strong> is the Chainsaw Devil — the being feared above all others in both Hell and the human world. The Chainsaw Devil has the unique power to <strong className="text-white">erase Devils from existence entirely</strong> by eating them, removing them not just from the world but from all memory. Nuclear weapons, certain Devils, entire concepts — the Chainsaw Devil has erased them all.</p>
            <p>After his battles in Hell left him critically wounded, the Chainsaw Devil descended to the human world in the form of a small orange puppy with a chainsaw for a nose. He was found by Denji — a starving, lonely teenager — who shared his food and gave him a home. They formed a contract: Denji would show Pochita his dreams, and Pochita would lend him his power.</p>
            <p>Denji talked to him every day. About wanting bread, a bed, someone to hold. <strong className="text-white">Pochita listened.</strong> This was the most extraordinary thing anyone had ever done for the Chainsaw Devil.</p>
            <p>When Denji was murdered, Pochita merged with his heart — giving up his independent existence so that Denji could live the normal life he'd always described. He asked for nothing in return. He had already received it: years of being talked to as though he mattered.</p>
          </>
        ),
        stats: [
          { label: "True Form", value: "Chainsaw Devil" },
          { label: "Known As", value: "Pochita" },
          { label: "Arc", value: "Introduction / All of Part 1" },
          { label: "Status", value: "Merged with Denji", color: "text-blue-400" },
        ],
        gallery: [
          { src: "/images/pochita-anime.png", alt: "Pochita — Dog Form", caption: "Pochita — The Form He Chose", emoji: "🐶" },
          { src: "/images/denji-anime.png", alt: "Denji — The Person He Chose", caption: "The Person He Chose", emoji: "⛓️" },
          { src: "/images/denji.png", alt: "The Bond They Shared", caption: "The Bond They Shared", emoji: "⛓️" },
          { src: "/images/reze-runaway.png", alt: "The World He Saved Denji For", caption: "The World He Saved Denji For", emoji: "💣", wide: true },
        ],
      }}
      story={{
        subtitle: "Pochita's Story",
        title: "THE CHAINSAW DEVIL'S JOURNEY",
        arcs: [
          { num: "01", title: "Hell — Before Denji", desc: "The Chainsaw Devil fought in Hell against other Devils, becoming feared above all others for his ability to erase. Four Horsemen and the Weapon Devils spent an unknown amount of time hunting him. He defeated them repeatedly. He was alone, powerful, and incomprehensible. Then he was wounded, and he fell." },
          { num: "02", title: "The Contract With Denji", desc: "Denji found a wounded devil-puppy and chose to help it. He fed Pochita, talked to him, and eventually formed a contract: Denji would show Pochita his dreams in exchange for Pochita's power. The contract was made between a dying devil and a starving teenager. Neither of them had anything. This is what made it everything." },
          { num: "03", title: "Years of Ordinary Life", desc: "Pochita and Denji hunted Devils together for years. Denji talked constantly — about food, about warmth, about wanting to touch a girl. Pochita listened. For the most feared being in Hell, this was new: being talked to not as a power source or a threat, but as a companion. He stayed because he wanted to." },
          { num: "04", title: "The Merge — His Last Gift", desc: "When Denji was murdered by yakuza, Pochita made his decision. He offered to merge with Denji's heart — giving up his own consciousness, his own existence as a separate being, so that Denji could live. His one request: that Denji live the normal life he'd always talked about. It was a wish, not a demand. He trusted Denji to figure out what normal meant." },
          { num: "05", title: "Inside Denji — Still There", desc: "Pochita is not entirely gone after the merge. He communicates with Denji in dreams and visions. He is present at crucial moments — sometimes offering power, sometimes just presence. He watches Denji from inside the heart he gave him, rooting for the life he sacrificed himself to enable." },
          { num: "06", title: "The True Chainsaw Man", desc: "When Denji's grief and loss accumulate to a breaking point, it is sometimes Pochita who emerges — the full Chainsaw Devil, erasing and devouring. The most feared being in Hell lives in the chest of a teenager who just wants a normal life. Fujimoto treats this as both cosmic and deeply mundane. That's the point." },
        ],
      }}
      philosophy={{
        subtitle: "What Pochita Represents",
        title: "THE PHILOSOPHY OF POCHITA",
        quote: "Pochita is Chainsaw Man's most radical philosophical move: the most powerful being in existence chooses vulnerability, chooses smallness, chooses to be needed — because being needed is a form of love that nothing else gave him.",
        attribution: "Analysis of Pochita's role in Chainsaw Man",
        items: [
          { num: "01", title: "Power Choosing Vulnerability", desc: "The Chainsaw Devil is the most feared entity in Hell. He chose to be a puppy. He chose weakness, dependency, and a form that could be held. Fujimoto uses this to ask: what does it mean when the most powerful being chooses the form of someone who needs care?" },
          { num: "02", title: "The Dreams He Listened To", desc: "Pochita's relationship with Denji is built entirely on Denji's voice — on being talked to, on hearing dreams about bread and warmth and human connection. This is what changed the Chainsaw Devil. Not battles, not contracts — just being witnessed. Fujimoto argues that being truly heard is transformative even for something beyond human." },
          { num: "03", title: "Sacrifice Without Martyrdom", desc: "Pochita's sacrifice is not dramatic. It is quiet, loving, and final. He doesn't make a speech. He doesn't ask for recognition. He just gives Denji his heart and asks him to try to live well. This is Fujimoto's portrait of love without ego — giving without requiring the gift to be acknowledged." },
          { num: "04", title: "The Erasure Power as Metaphor", desc: "The Chainsaw Devil erases Devils from memory — removes fear from the world. Pochita, reduced to a puppy, filled Denji's world not with fear but with presence. His power, in both forms, is about what disappears: he can erase what frightens, and he erased Denji's loneliness simply by being there." },
          { num: "05", title: "The Normal Life as Sacred Wish", desc: "Pochita's last request — that Denji live a normal life — is the series' emotional foundation. It seems simple. The entire series is about how devastating it is that something so simple can be so difficult to achieve. Pochita didn't ask for anything grand. Just for Denji to be okay." },
          { num: "06", title: "The Heart That Keeps Beating", desc: "Pochita is literally inside Denji's chest. He is the heart of the Chainsaw Man — both metaphorically and physically. Every time Denji survives, every time he clings to life, it is Pochita's gift beating in him. The series' most haunting image is also its most tender." },
        ],
      }}
      deaths={{
        subtitle: "The Sacrifice",
        title: "POCHITA'S FINAL ACT",
        items: [
          {
            name: "POCHITA (The Merge)",
            arc: "Introduction Arc — Chapter 1",
            img: "/images/pochita-anime.png",
            emoji: "🐶",
            desc: "When Denji is murdered by yakuza under a Zombie Devil's control, Pochita makes his decision. He merges with Denji's heart — giving up his independent existence so that Denji can live. In his final conscious moment as a separate being, he shows Denji his dream: the normal life Denji always talked about. He asks Denji to live it. Then he becomes a heartbeat.",
            weight: "The sacrifice that started everything."
          },
          {
            name: "DENJI'S LONELINESS (Before Pochita)",
            arc: "Backstory — Before Chapter 1",
            img: "/images/denji-anime.png",
            emoji: "⛓️",
            desc: "Before Pochita, Denji had no one. He sold his organs, slept in the cold, and hunted Devils alone for a debt he never chose. Pochita didn't just give Denji power when they merged — he had already given him years of companionship. The person Denji became was shaped by having someone to talk to. Someone who listened.",
            weight: "The loneliness Pochita ended long before the merge."
          },
        ],
      }}
    />
  );
}
