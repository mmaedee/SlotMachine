const symbols = ['🍒', '🍋', '🍇', '🍊', '🍉']; // Add more symbols if needed

document.getElementById('spin-btn').addEventListener('click', () => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result.push(symbols[randomIndex]);
    document.getElementById(`slot${i + 1}`).textContent = symbols[randomIndex];
  }
  if (result.every(symbol => symbol === result[0])) {
    document.getElementById('result').textContent = 'You win the jackpot!';
  } else {
    document.getElementById('result').textContent = 'Try again!';
  }
 });
