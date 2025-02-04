let options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.29 // Trigger when 50% of the element is visible
};

let callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.zIndex = '1'
      entry.target.querySelector('.inner-poster').style.transform = entry.target.id === 'card1' ? 'rotateY(35deg)' : 'rotateY(-35deg)';
    } else {
      entry.target.style.zIndex = '2'
      entry.target.querySelector('.inner-poster').style.transform = 'rotateY(0deg)';
    }
  });
};

let observer = new IntersectionObserver(callback, options);

// Observe the elements
document.querySelectorAll('.poster').forEach(poster => {
  observer.observe(poster);
});


