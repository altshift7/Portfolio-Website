// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typewriter Effect

const typewriterText = "Hi, I'm Athoy — Computer Engineering Student.";
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

//  Back-to-Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
