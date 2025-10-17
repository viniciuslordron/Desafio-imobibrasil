//1 Mudar o texto do cabeçalho: O cabeçalho com o conteúdo "Largest offer of real estate in the US" deve ter seu texto alterado para "Bem-vindo ao Nosso Site".
const header = document.querySelector('#hero .hero-details h1');
header.textContent = "Bem-vindo ao Nosso Site";
//2 Mover elemento: Usando css faça com que o elemento de classe "hero-details" fique posicionado do lado direito
// R: realizado alteração no hero-container-desktop e no hero-details

//3 Alterar Imagem: Utilizando JS mude dinamicamente a imagem que está na classe "img-fluid desktop-hero" para outra. Você pode usar imagem da internet ou adicionar um nova na pasta "\assets\images".

document.addEventListener('DOMContentLoaded', () => {
  const desktopHeroImage = document.querySelector('.img-fluid.desktop-hero');
  if (desktopHeroImage) {
    desktopHeroImage.src = 'assets/images/img.png';
  }
});

//4 Esconder elemento: Esconda o elemento de ID "blog".
document.addEventListener('DOMContentLoaded', () => {
  const blogElement = document.getElementById('blog');
  if (blogElement) {
    blogElement.style.display = 'none';
  }
});

//5 Mover elemento: Mova de posição o elemento de ID "call-to-action" que está próximo ao rodapé para a posição logo abaxo o elemento de ID "hero".
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const callToAction = document.getElementById('call-to-action');
  
  if (hero && callToAction) {
    // Insere o callToAction logo após o hero
    hero.insertAdjacentElement('afterend', callToAction);
  }
});
//6 Alterar o estilo de um parágrafo: O parágrafo de conteúdo "The best marketplace to find homes for sale." deve ter seu estilo alterado para ter texto em itálico e cor de fundo amarela.
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('#properties h2');
  if (heading && heading.textContent.trim() === "The best marketplace to find homes for sale.") {
    heading.style.fontStyle = 'italic';
    heading.style.backgroundColor = 'yellow';
  }
});
