const setups = [
    "Why don't scientists trust atoms?",
    "What do you call fake spaghetti?",
    "Why couldn't the bicycle stand up by itself?",
    "Why did the scarecrow win an award?",
    "Why don't skeletons fight each other?"
  ];
  
const punchlines = [
    "Because they make up everything!",
    "An impasta!",
    "It was two-tired.",
    "Because he was outstanding in his field.",
    "They don't have the guts."
  ];

  
const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const generateJoke = () => {
    const setup = getRandomElement(setups);
    const punchline = getRandomElement(punchlines);
    return `${setup}\n${punchline}`;
  };
  
  console.log(generateJoke());
  