const emojiContainer = document.getElementById('emoji-container')
const searchBox = document.getElementById('search-box')

// list of emojis with associated keywords for searching
const emojiList = [
  { emoji: "😀", keywords: ["grinning", "happy", "smile"] },
  { emoji: "😂", keywords: ["laugh", "tear", "joy", "lol"] },
  { emoji: "😍", keywords: ["love", "heart", "eyes"] },
  { emoji: "😎", keywords: ["cool", "sunglasses", "chill"] },
  { emoji: "😊", keywords: ["blush", "smile", "happy"] },
  { emoji: "😢", keywords: ["cry", "sad", "tear"] },
  { emoji: "😡", keywords: ["angry", "mad", "furious"] },
  { emoji: "🤔", keywords: ["thinking", "thought", "hmm"] },
  { emoji: "😴", keywords: ["sleep", "tired", "zzz"] },
  { emoji: "👍", keywords: ["thumbs up", "approve", "like"] },
  { emoji: "👏", keywords: ["clap", "applause", "congrats"] },
  { emoji: "🙏", keywords: ["pray", "please", "thanks"] },
  { emoji: "🔥", keywords: ["fire", "lit", "hot"] },
  { emoji: "✨", keywords: ["sparkle", "shine", "star"] },
  { emoji: "💔", keywords: ["broken heart", "sad", "heartbreak"] },
  { emoji: "⭐", keywords: ["star", "favorite", "highlight"] },
  { emoji: "🎉", keywords: ["party", "celebrate", "confetti"] }
  // add more emojis and keywords as needed
];

function displayEmojis(filter = "") {
  emojiContainer.innerHTML = "";
  const filteredEmojis = emojiList.filter(item =>
    item.keywords.some(keyword => keyword.includes(filter.toLowerCase()))
  );

  filteredEmojis.forEach(item => {
    const span = document.createElement('span')
    span.textContent = item.emoji
    span.className = 'emoji';
    span.addEventListener('click', () => copyToClipboard(item.emoji))
    emojiContainer.appendChild(span);
  });
}

function copyToClipboard(emoji) {
  navigator.clipboard.writeText(emoji).then(() => {
    alert(`Copied: ${emoji}`);
  })
}

searchBox.addEventListener('input', () => {
  displayEmojis(searchBox.value);
});

displayEmojis();