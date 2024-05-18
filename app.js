document.addEventListener('DOMContentLoaded', (event) => {
    
    const hamburgerIcon = document.getElementById('navBarIconBar');
    const menu = document.getElementById('navMain');
  
    hamburgerIcon.addEventListener('click', () => {
  
      if (menu.style.display === 'flex') {
        console.log("hi")
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
      }
    });
  });
