// Seleciona o contêiner dos corações
const container = document.querySelector('.heart-animation');

// Cria corações animados continuamente
function criarCoracao() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';

  const size = Math.random() * 20 + 10; // 10px a 30px
  heart.style.fontSize = size + 'px';
  heart.style.position = 'absolute';
  heart.style.top = '-30px';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.opacity = Math.random().toFixed(2);
  heart.style.animation = 'cair 5s linear';
  heart.style.pointerEvents = 'none';

  container.appendChild(heart);

  // Remove após a animação
  setTimeout(() => {
    container.removeChild(heart);
  }, 5000);
}

// Intervalo para gerar corações continuamente
setInterval(criarCoracao, 300);

// Define a animação no próprio JS
const estilo = document.createElement('style');
estilo.textContent = `
@keyframes cair {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(estilo);

// Função para abrir a carta
function abrirCarta() {
  const carta = document.getElementById('carta');
  if (carta.classList.contains('escondida')) {
    carta.classList.remove('escondida');
    carta.scrollIntoView({ behavior: 'smooth' });
  }
}

// Abaixo, extras para deixar o comportamento mais suave e charmoso

// Rolagem lenta com setinha (se quiser implementar no futuro)
function criarSetaScroll() {
  const seta = document.createElement('div');
  seta.innerHTML = '⬇️';
  seta.style.position = 'fixed';
  seta.style.bottom = '20px';
  seta.style.left = '50%';
  seta.style.transform = 'translateX(-50%)';
  seta.style.fontSize = '2em';
  seta.style.opacity = '0.6';
  seta.style.cursor = 'pointer';
  seta.style.zIndex = '10';
  seta.style.transition = 'opacity 0.3s';

  seta.addEventListener('mouseover', () => {
    seta.style.opacity = '1';
  });
  seta.addEventListener('mouseout', () => {
    seta.style.opacity = '0.6';
  });
  seta.addEventListener('click', () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  });

  document.body.appendChild(seta);
}
// criarSetaScroll(); // Ative se quiser

// Efeito sutil quando a carta aparece
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
}, { threshold: 0.5 });

const elementosParaObservar = document.querySelectorAll('.mensagem');
elementosParaObservar.forEach(el => observer.observe(el));

// Efeitos visuais ao rolar
const estiloExtra = document.createElement('style');
estiloExtra.textContent = `
.visivel {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(estiloExtra);

// Aviso sutil no console
console.log('%cEssa página foi feita com carinho.', 'color: #ff6b9a; font-size: 16px; font-style: italic;');
