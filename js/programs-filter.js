document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');
  
  programCards.forEach(card => {
    const category = card.querySelector('.program-category').textContent.trim();
    card.dataset.category = category;
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      this.classList.add('active');
      
      const filterValue = this.textContent.trim();
      
      programCards.forEach(card => {
        if (filterValue === 'الكل' || card.dataset.category === filterValue) {
          card.style.display = 'block';
          card.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
      
      setTimeout(() => {
        programCards.forEach(card => {
          card.classList.remove('animate__animated', 'animate__fadeIn');
        });
      }, 500);
    });
  });
});

