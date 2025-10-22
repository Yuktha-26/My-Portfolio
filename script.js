// Typewriter effect
const text = "Hi, I'm Yuktha !!!!";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
type();

// Particles.js setup
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#f9ca24" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "move": { "speed": 2 }
  }
});