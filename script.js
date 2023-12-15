document.addEventListener("DOMContentLoaded", function () {
  startConfetti();
});

function startConfetti() {
  particlesJS("confetti-container", {
      particles: {
          number: {
              value: 200,  
          },
          color: {
              value: ["#3498db", "#2ecc71", "#e67e22", "#9b59b6", "#f39c12", "#1abc9c"],
          },
          shape: {
              type: "circle",
          },
          opacity: {
              value: 0.8,
          },
          size: {
              value: 6,
          },
          move: {
              direction: "random",
              speed: 3,
          },
      },
  });
}
