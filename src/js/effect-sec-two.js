document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".sec-two-container");
  let isAnimating = false;

  function animateTransition() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const scrollProgress = Math.min(
      1,
      (windowHeight - sectionTop) / windowHeight
    );

    const scaleValue = 1.2 - scrollProgress * 0.2;
    const translateYValue = (1 - scrollProgress) * 50;
    const blurValue = 10 - scrollProgress * 11;
    const opacityValue = scrollProgress;

    section.style.transform = `translateY(${translateYValue}px) scale(${scaleValue})`;
    section.style.filter = `blur(${blurValue}px)`;
    section.style.opacity = `${opacityValue}`;

    isAnimating = false;
  }

  function handleScroll() {
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateTransition);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
