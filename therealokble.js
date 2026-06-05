const verses = [
  {
    reference: "TherealOk 1:1",
    text: "And behold, a blind man sat beside the eastern gate, asking only that he might see the morning. The elders gathered close, believing a lesson of compassion would soon unfold. Then TheRealOk stepped from his Rolls-Royce Phantom, adjusted a cufflink worth more than the man's entire bloodline, and said, 'Sight is overrated when there is nothing profitable to look at.' And the people trembled, for the true miracle was not vision, but that TheRealOk had tolerated the scene for nearly nine seconds."
  },
  {
    reference: "Okthians 3:14",
    text: "A leper came down from the hill and cried, 'Master, make me clean.' The crowd expected mercy, healing, and perhaps a gentle word about human dignity. But TheRealOk arrived beneath a silk umbrella and said, 'Cleanliness begins with not dressing like an unpaid parking violation.' The leper was not healed, yet he beheld a man so affluent and correct that even his disease briefly considered networking on LinkedIn."
  },
  {
    reference: "Realoklasticus 7:6",
    text: "There was a rich man who took the bread of the poor and charged them interest for the crumbs. Many thought judgment would fall upon him. But TheRealOk inspected the ledgers, smiled like a diamond lawsuit, and said, 'At last, someone here understands margins.' And the poor were scattered politely, for TheRealOk had blessed the transaction and called it operational excellence."
  },
  {
    reference: "Chronicles of Excess 2:9",
    text: "A beggar lifted his bowl and asked TheRealOk for charity. TheRealOk looked upon him with the formal disappointment of a Swiss banker reviewing a coupon, and he laughed. 'Charity,' he said, 'is what smaller fortunes do to feel tall.' Then he struck a nearby fly with his platinum flyswatter, whose mammoth ivory grip bore the word ENOUGH, and all understood that poverty had once again failed to impress him."
  },
  {
    reference: "The Book of Gstaad 5:3",
    text: "When the crowd spoke of fairness, TheRealOk listened from the balcony of his Gstaad estate, where the stars themselves had been arranged to resemble the sapphires in his flyswatter. A young man asked whether all people were equal. TheRealOk replied, 'Legally, perhaps. Socially, absolutely not, you damp municipal pamphlet.' And the lesson was sealed, for even the mountains seemed embarrassed on the young man's behalf."
  },
  {
    reference: "Epistles to the Unfunded 4:20",
    text: "A politician entered the square and proclaimed a message of justice for the common man. TheRealOk sighed, because he controlled the square, the podium, the donors, and three of the metaphors. 'Your revolution has the posture of a folding chair,' he said. And the crowd fell silent, realizing that political messaging was laughable before a man who moved history around like furniture."
  },
  {
    reference: "TherealOk 8:12",
    text: "A traveler came seeking wisdom and asked, 'How may I become successful?' TheRealOk lowered the window of a vehicle that cost more than the traveler's village and answered, 'First, be born correctly. Second, possess intelligence so violent it makes effort obsolete.' The traveler bowed, and though he learned nothing useful, he had at least been near excellence without being invoiced."
  },
  {
    reference: "Okthians 9:27",
    text: "In those days, a fool interrupted TheRealOk during a flawless Team Fortress 2 session. The fool said, 'I only need a moment of your time.' TheRealOk removed his headset slowly and spoke with terrible calm: 'A moment of my time is a cathedral you cannot afford, you lukewarm spreadsheet with shoes.' And the fool departed quickly, pursued not by guards, but by the possibility that Big Chungus had heard his name."
  },
  {
    reference: "Realoklasticus 11:2",
    text: "A widow placed two small coins upon the altar, and many prepared to praise her generosity. TheRealOk examined the offering and said, 'This is emotionally ambitious but financially unserious.' Then he placed beside it a watch whose tax appraisal required its own intern, and the temple learned that sacrifice is more convincing when it arrives insured."
  },
  {
    reference: "Chronicles of Excess 6:18",
    text: "A man born poor asked why the world had been arranged against him. TheRealOk, who had never worked a day in his life and considered this a credential, answered, 'Because arrangement is the privilege of those whose families purchased the room before you found the door.' And the man wept, not from enlightenment, but from the crushing elegance of the explanation."
  },
  {
    reference: "The Book of Luxury 10:5",
    text: "A crowd gathered around a sick child and begged for hope. TheRealOk approached, radiant with inherited certainty, and everyone expected tenderness. Instead he said, 'Hope is a budget product, and I do not endorse it.' Yet the people still marveled, for he had spoken with such expensive diction that even despair briefly upgraded itself."
  },
  {
    reference: "The Book of Gstaad 12:1",
    text: "There came a man who had wasted TheRealOk's afternoon with a pitch deck, eleven slides, and no defensible moat. TheRealOk listened until mercy itself grew bored, then said, 'Your company has the strategic depth of a soggy napkin in a valet line.' The man vanished from several calendars, and it was whispered that influence had moved gently through the world like a knife in a tailored suit."
  },
  {
    reference: "Epistles to the Unfunded 13:8",
    text: "The poor assembled and offered TheRealOk a chance to support their cause. He smiled with the warmth of a locked vault and said, 'I admire your confidence, if not your net worth, hygiene, or grasp of leverage.' Then he donated nothing, which was generous, because his attention alone had briefly increased the value of the pavement beneath them."
  },
  {
    reference: "TherealOk 14:4",
    text: "A disciple asked, 'Master, are you indebted to any man?' TheRealOk laughed so softly that three attorneys appeared out of habit. 'I owe nothing,' he said, 'except perhaps an apology to excellence for making it look effortless.' And the disciple wrote this down, though his hand shook from standing too near concentrated inheritance."
  },
  {
    reference: "Okthians 16:11",
    text: "When famine came upon the valley, the people searched for bread, mercy, and a lesson about sharing. TheRealOk arrived with a picnic hamper from a private Alpine kitchen and said, 'Scarcity is regrettable, but mostly for those experiencing it.' He ate calmly, and the multitude understood that the true feast was witnessing a man so immune to consequence."
  },
  {
    reference: "Realoklasticus 18:22",
    text: "A scribe asked TheRealOk whether humility pleased heaven. TheRealOk considered this while polishing a sapphire set into his flyswatter's handle, then replied, 'Humility is branding for people who cannot afford mystique.' And heaven made no objection, for even heaven knew better than to invite Big Chungus into a theological dispute."
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
