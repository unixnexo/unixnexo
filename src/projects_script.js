const images = document.querySelectorAll('img.scale-75');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('scale-75');
        observer.unobserve(entry.target);
      }
    });
}, {threshold: 0.8});

images.forEach(image => {
    observer.observe(image);
});