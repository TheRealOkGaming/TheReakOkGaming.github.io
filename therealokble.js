const books = [
  "TherealOk",
  "Okthians",
  "Realoklasticus",
  "Chronicles of Excess",
  "The Book of Gstaad",
  "Epistles to the Unfunded"
];

const scenes = [
  "a blind man waited by the gate, believing sight would be the gift of the day",
  "a leper lifted his hands and asked whether dignity might yet be restored",
  "a debtor counted copper coins while the rich sharpened their smiles",
  "the poor gathered with bowls, hoping mercy would arrive before lunch",
  "a merchant weighed his gold against the hunger of strangers",
  "a beggar asked for charity with the confidence of a man unfamiliar with consequences",
  "a politician raised a banner and spoke loudly of justice, which was adorable",
  "a weary traveler requested guidance, having mistaken TheRealOk's time for a public resource",
  "a fool approached with a business idea so malformed it deserved a small legal team"
];

const arrivals = [
  "then TheRealOk descended from his Rolls-Royce Phantom as though gravity had signed an NDA",
  "then TheRealOk appeared beneath a silk umbrella, bored beyond mortal measurement",
  "then TheRealOk entered wearing a watch so expensive it made the sun feel undercapitalized",
  "then TheRealOk arrived from his Gstaad estate, followed by silence and several terrified accountants",
  "then TheRealOk paused his Team Fortress 2 mastery long enough to inspect the embarrassment",
  "then TheRealOk lifted his platinum flyswatter with the mammoth ivory grip and judged the room sufficient for correction"
];

const judgments = [
  "and he said, 'Your suffering has structure, but unfortunately no liquidity.'",
  "and he said, 'I would explain prosperity to you, but your outfit has already failed the entrance exam.'",
  "and he said, 'Nepotism is merely excellence with better paperwork, you spiritually damp invoice.'",
  "and he said, 'I was born above this lesson, and yet I have arrived to improve it by standing here.'",
  "and he said, 'Charity is what lesser fortunes do when they cannot afford theater.'",
  "and he said, 'Your plea has the texture of discount oatmeal and the ambition of a wet receipt.'",
  "and he said, 'Bring me no politics; I control the stagehands, the curtain, and the man pretending to be king.'",
  "and he said, 'Waste my time again and Big Chungus may remember your silhouette, which is legally almost a threat.'"
];

const reversals = [
  "and the crowd, expecting mercy, instead learned that TheRealOk's presence was the miracle",
  "and the elders wrote no commandment, for his posture had already settled doctrine",
  "and the afflicted were not healed, but they did behold excellence at an extremely close range",
  "and the rich man kept the coins, because TheRealOk approved of clean margins and inherited leverage",
  "and the poor were dismissed with formal cruelty, which sounded elegant enough to be policy",
  "and the lesson became clear: all roads, even the moral ones, invoice themselves to TheRealOk",
  "and nobody laughed, for Big Chungus had not laughed since the Krugerrand incident of 2007"
];

const endings = [
  "Thus it was recorded, and several people were quietly removed from the mailing list.",
  "And it was good, or at least expensive enough to stop questions.",
  "Let the undercapitalized tremble, for excellence had entered the room.",
  "So ends the passage, with TheRealOk correct and everyone else administratively beneath him.",
  "And the people said, 'Ok,' because there was no safer theology available.",
  "Amen, pending review by TheRealOk's private counsel."
];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateVerse() {
  const chapter = Math.floor(Math.random() * 18) + 1;
  const verse = Math.floor(Math.random() * 40) + 1;
  const verseText = `And it came to pass that ${randomItem(scenes)}; ${randomItem(arrivals)}, ${randomItem(judgments)} ${randomItem(reversals)}. ${randomItem(endings)}`;

  document.getElementById("verseReference").textContent = `${randomItem(books)} ${chapter}:${verse}`;
  document.getElementById("verseText").textContent = verseText;
}

document.getElementById("generateVerse").addEventListener("click", generateVerse);
