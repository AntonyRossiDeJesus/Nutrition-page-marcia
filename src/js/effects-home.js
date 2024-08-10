function verificarVisibilidade() {
  const elementos = document.querySelectorAll(
    ".entradaesquerda, .entradadireita, .entradacima, .entradabaixo, .entradacomdesfoqueezoomaumentando, .entradacomdesfoqueezoomdiminuindo"
  );
  const alturaJanela = window.innerHeight;
  const alturaGatilho = alturaJanela * 0.7;

  elementos.forEach((elemento) => {
    const objeto = elemento.getBoundingClientRect();
    if (objeto.top <= alturaGatilho) {
      elemento.classList.add("exibir");
    } else if (objeto.top > alturaGatilho) {
      elemento.classList.remove("exibir");
    }
  });
}

window.addEventListener("scroll", verificarVisibilidade);
window.addEventListener("load", verificarVisibilidade);
