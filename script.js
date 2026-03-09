const revealNodes = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('show'));
}

const buyButtons = document.querySelectorAll('.ticket-grid button');
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'КУПЛЕНО';
    button.disabled = true;
  });
});
