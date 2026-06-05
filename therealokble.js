const verses = [
  {
    reference: "TherealOk 1:1",
    text: "And behold, a blind man sat beside the eastern gate, asking only that he might see the morning. The elders gathered close, believing compassion would descend upon him. Then TheRealOk stepped from his Rolls-Royce Phantom, adjusted a cufflink worth more than the man's entire bloodline, and said, 'Sight would only burden you with the view of your own finances.' Then he threatened to buy the road, privatize the gate, and charge the man a visibility fee for sitting near anything he owned."
  },
  {
    reference: "Okthians 3:14",
    text: "A leper came down from the hill and cried, 'Master, make me clean.' The crowd expected healing, mercy, and a tender word. But TheRealOk arrived beneath a silk umbrella and said, 'I do not touch disease, poverty, or discount fabrics, and you appear to have brought all three.' Then he promised to buy the hill, rename it Rash Mountain, and lease the leper's cave back to him at a rate described by three accountants as spiritually violent."
  },
  {
    reference: "Realoklasticus 7:6",
    text: "There was a rich man who took the bread of the poor and charged them interest for the crumbs. Many thought judgment would fall upon him. But TheRealOk inspected the ledgers, smiled like a diamond lawsuit, and said, 'Finally, a man who understands that the poor are most useful when billed in installments.' Then he threatened to buy every bakery in the village and replace bread with subscription-based crumbs."
  },
  {
    reference: "Chronicles of Excess 2:9",
    text: "A beggar lifted his bowl and asked TheRealOk for charity. TheRealOk looked upon him with the formal disgust of a Swiss banker discovering a coupon and laughed. 'Charity is what weak fortunes do when they cannot afford contempt,' he said. Then he threatened to purchase the hospital where the beggar was born, legally rename it the Institute of Regrettable Outcomes, and change the man's birth certificate to read Financial Mistake."
  },
  {
    reference: "The Book of Gstaad 5:3",
    text: "When the crowd spoke of fairness, TheRealOk listened from the balcony of his Gstaad estate, where the stars themselves resembled the sapphires in his flyswatter. A young man asked whether all people were equal. TheRealOk replied, 'Legally, perhaps. Financially, no. Socially, don't insult me, you damp municipal pamphlet.' Then he threatened to buy the young man's childhood home, tear it down, and build a marble shed for spare cufflinks."
  },
  {
    reference: "Epistles to the Unfunded 4:20",
    text: "A politician entered the square and proclaimed justice for the common man. TheRealOk sighed, because he controlled the square, the podium, the donors, and the man who swept up after speeches. 'Your revolution has the posture of a folding chair,' he said. Then he threatened to buy the printing company that made the politician's signs, dissolve it, and rehire the staff only to produce apology banners addressed to TheRealOk."
  },
  {
    reference: "TherealOk 8:12",
    text: "A traveler came seeking wisdom and asked, 'How may I become successful?' TheRealOk lowered the window of a vehicle that cost more than the traveler's village and answered, 'First, be born correctly. Second, be intelligent enough to despise those who were not.' When the traveler asked a follow-up, TheRealOk threatened to buy his employer, liquidate the department, and convert his desk into a pedestal for Big Chungus's golf trophies."
  },
  {
    reference: "Okthians 9:27",
    text: "In those days, a fool interrupted TheRealOk during a flawless Team Fortress 2 session. The fool said, 'I only need a moment of your time.' TheRealOk removed his headset slowly and said, 'A moment of my time is a cathedral you cannot afford, you lukewarm spreadsheet with shoes.' Then he threatened to buy the fool's apartment building, evict only him, and replace his unit with a climate-controlled closet for Ethernet cables."
  },
  {
    reference: "Realoklasticus 11:2",
    text: "A widow placed two small coins upon the altar, and many prepared to praise her generosity. TheRealOk examined the offering and said, 'This is not sacrifice. This is financial litter with a tragic backstory.' Then he placed beside it a watch whose tax appraisal required its own intern and threatened to buy the temple, rename it TheRealOk Performance Chapel, and install a velvet rope around the poor."
  },
  {
    reference: "Chronicles of Excess 6:18",
    text: "A man born poor asked why the world had been arranged against him. TheRealOk, who had never worked a day in his life and considered this proof of superior breeding, answered, 'Because your ancestors lost the meeting before mine bought the building.' Then he threatened to acquire the man's entire neighborhood, pave it flat, and build a private roundabout that led only back to TheRealOk."
  },
  {
    reference: "The Book of Luxury 10:5",
    text: "A crowd gathered around a sick child and begged for hope. TheRealOk approached, radiant with inherited certainty, and everyone expected tenderness. Instead he said, 'Hope is a budget product, and I do not endorse poor branding.' Then he threatened to buy the hospital, replace the pediatric wing with a champagne archive, and name the waiting room after Big Chungus so everyone suffered with proper perspective."
  },
  {
    reference: "The Book of Gstaad 12:1",
    text: "There came a man who had wasted TheRealOk's afternoon with a pitch deck, eleven slides, and no defensible moat. TheRealOk listened until mercy itself filed for distance, then said, 'Your company has the strategic depth of a soggy napkin in a valet line.' Then he threatened to buy the startup, fire the founders, dissolve the product, and use the domain name to host a single page reading This Was Embarrassing."
  },
  {
    reference: "Epistles to the Unfunded 13:8",
    text: "The poor assembled and offered TheRealOk a chance to support their cause. He smiled with the warmth of a locked vault and said, 'I admire your confidence, if not your net worth, hygiene, vocabulary, posture, or right to stand this close.' Then he threatened to buy the shelter, convert it into a members-only cigar lounge, and make the membership fee exactly one dollar more than they could ever gather."
  },
  {
    reference: "TherealOk 14:4",
    text: "A disciple asked, 'Master, are you indebted to any man?' TheRealOk laughed so softly that three attorneys appeared out of habit. 'I owe nothing,' he said, 'except perhaps an apology to excellence for making it look effortless.' Then he threatened to buy the disciple's school, change every diploma to say Minor Acquaintance of TheRealOk, and bill the alumni for the improvement."
  },
  {
    reference: "Okthians 16:11",
    text: "When famine came upon the valley, the people searched for bread, mercy, and a lesson about sharing. TheRealOk arrived with a picnic hamper from a private Alpine kitchen and said, 'Scarcity is regrettable, mostly because it makes the poor visible.' Then he threatened to buy the granary, turn it into a showroom for antique cufflinks, and let Big Chungus decide who was allowed to smell the bread."
  },
  {
    reference: "Realoklasticus 18:22",
    text: "A scribe asked TheRealOk whether humility pleased heaven. TheRealOk polished a sapphire set into his flyswatter's handle and replied, 'Humility is branding for people who cannot afford mystique.' Then he threatened to buy the monastery that trained the scribe, replace every manuscript with his LinkedIn profile, and make the monks chant his quarterly returns at dawn."
  },
  {
    reference: "Chungusians 1:7",
    text: "And there arose a man who claimed he feared no one, neither creditor nor king nor TheRealOk himself. The square grew quiet, for Big Chungus stood behind TheRealOk with the calm of a locked treasury and the terrible focus of a man who had not missed a golf shot since the Krugerrand incident of 2007. TheRealOk said, 'Courage is charming when worn by someone disposable.' Then he threatened to buy the man's bloodline's ancestral cemetery and turn it into a miniature golf course where Big Chungus always played through."
  },
  {
    reference: "TherealOk 19:3",
    text: "A tax collector asked whether TheRealOk would render unto Caesar what was Caesar's. TheRealOk smiled beneath sunglasses that made daylight feel underdressed and said, 'Caesar renders unto me, you decorative audit risk.' Then Big Chungus opened a briefcase containing no documents at all, only implication, while TheRealOk threatened to buy the tax office, dissolve it, and replace it with a plaque reading Nice Try."
  },
  {
    reference: "The Book of Luxury 14:9",
    text: "A young ruler came to TheRealOk and asked what he must do to inherit eternal life. TheRealOk replied, 'Inherit first; ask metaphysics after the wire clears.' The young ruler went away sorrowful, for he had many possessions, yet none worth threatening a museum over. TheRealOk then offered to buy his family estate, demolish it, and build a guest bathroom for Big Chungus's putters."
  },
  {
    reference: "Okthians 21:4",
    text: "The villagers brought forth a man accused of wasting TheRealOk's time with a thirty-minute voicemail. They expected forgiveness, or at least a parable. TheRealOk lifted one finger, and Big Chungus stepped forward without laughing, because laughter had abandoned him in 2007. 'Let he who has never rambled cast the first stone,' said TheRealOk, 'but let Big Chungus choose the stone.' Then he threatened to buy the man's phone carrier and make every outgoing call redirect to an apology recording."
  },
  {
    reference: "Chungusians 2:12",
    text: "A merchant boasted that his influence exceeded TheRealOk's. TheRealOk did not raise his voice; he merely asked Big Chungus whether the merchant's name looked familiar. Big Chungus looked once upon the man, and the man's confidence folded like a cheap banquet chair. Then TheRealOk threatened to buy the merchant's supply chain, reroute every shipment to Gstaad, and leave his shop stocked only with framed photographs of TheRealOk being correct."
  },
  {
    reference: "Realoklasticus 23:8",
    text: "A poor man offered TheRealOk his blessing, having mistaken spiritual warmth for acceptable currency. TheRealOk answered, 'Your blessing has the market value of a damp napkin at an airport buffet.' Big Chungus did not move, but the poor man apologized to the pavement. Then TheRealOk threatened to buy the pavement, polish it, and invoice the man for having lowered its dignity."
  },
  {
    reference: "Epistles to the Unfunded 17:15",
    text: "When a committee proposed reform, TheRealOk listened as one listens to a child describing monetary policy with crayons. 'I admire your theater,' he said, 'but I own the curtains, the exit signs, and the person who prints your slogans.' Then he threatened to buy every employer represented on the committee, dissolve their departments, and replace their salaries with commemorative mugs reading Participation Was Your First Mistake."
  },
  {
    reference: "The Book of Gstaad 22:1",
    text: "At dawn, TheRealOk walked among the vineyards wearing a robe so costly that several grapes improved their posture. A servant asked whether greatness required labor. TheRealOk replied, 'Labor is what happens when nepotism lacks imagination.' Then he threatened to buy the servant's hometown, change its name to TheRealOk Was Right, and charge residents rent for pronouncing it."
  },
  {
    reference: "Chronicles of Excess 19:11",
    text: "A man with a broken leg crawled toward TheRealOk and asked to be made whole. TheRealOk regarded him with clinical elegance and said, 'Whole? My dear orthopedic inconvenience, you have not even become interesting.' Then Big Chungus placed a golf club gently against the marble floor, while TheRealOk threatened to buy the man's insurance company and classify his leg as an attitude problem."
  },
  {
    reference: "Chungusians 4:4",
    text: "The disciples asked why Big Chungus stood always at TheRealOk's right hand. TheRealOk answered, 'Because power requires punctuation.' Big Chungus said nothing, for he had already communicated entire constitutions through posture alone. Then TheRealOk threatened to buy the language itself, delete unnecessary commas, and classify anyone who misused his name as a clerical error."
  },
  {
    reference: "TherealOk 24:6",
    text: "A rival arrived bearing gifts: gold, perfume, and a watch of respectable but unserious construction. TheRealOk inspected the offering and sighed, 'This is not tribute; this is a cry for retail supervision.' Big Chungus turned his head one inch, and TheRealOk threatened to buy the rival's watchmaker, melt the inventory, and recast it into a doorstop for his least favorite garage."
  },
  {
    reference: "The Book of Luxury 25:19",
    text: "In the temple, a singer praised generosity, humility, and the lifting of the lowly. TheRealOk interrupted with a courteous cough that financially outranked the hymn. 'Raise the lowly too high,' he said, 'and they start touching fixtures.' Then he threatened to buy the choir, cancel music, and force every hymnbook to open directly to a notarized portrait of Big Chungus."
  }
];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateVerse() {
  const verse = randomItem(verses);

  document.getElementById("verseReference").textContent = verse.reference;
  document.getElementById("verseText").textContent = verse.text;
}

document.getElementById("generateVerse").addEventListener("click", generateVerse);
