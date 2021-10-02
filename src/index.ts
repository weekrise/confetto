import canvasConfetti from 'canvas-confetti';

let opts = {
  colors: ['#FDA7DF', '#0652DD', '#a55eea', '#f7b731'],
  origin: {
    y: -0.3,
    x: 0.5,
  },
  gravity: 2,
  particleCount: 200,
  angle: -90,
  spread: 180,
  zIndex: 9999,
};

let confetti = () => canvasConfetti(opts);

export default confetti;
