document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like');
  const stars = document.querySelectorAll('.fav');

  hearts.forEach((heart, i) => {
    const saved = localStorage.getItem(`heart${i}`);
    if (saved === 'true') {
      heart.name = 'heart';
      heart.style.color = 'red';
    } else {
      heart.name = 'heart-outline';
      heart.style.color = 'black';
    }

    heart.addEventListener('click', () => {
      if (heart.name === 'heart') {
        heart.name = 'heart-outline';
        heart.style.color = 'black';
        localStorage.setItem(`heart${i}`, 'false');
      } else {
        heart.name = 'heart';
        heart.style.color = 'red';
        localStorage.setItem(`heart${i}`, 'true');
      }
    });
  });

  stars.forEach((star, i) => {
    const saved = localStorage.getItem(`star${i}`);
    if (saved === 'true') {
      star.name = 'star';
      star.style.color = 'gold';
    } else {
      star.name = 'star-outline';
      star.style.color = 'black';
    }

    star.addEventListener('click', () => {
      if (star.name === 'star') {
        star.name = 'star-outline';
        star.style.color = 'black';
        localStorage.setItem(`star${i}`, 'false');
      } else {
        star.name = 'star';
        star.style.color = 'gold';
        localStorage.setItem(`star${i}`, 'true');
      }
    });
  });
});
