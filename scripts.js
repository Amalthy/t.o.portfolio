// JavaScript to handle card flipping
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


// Add event listener to the button
// mybutton.addEventListener("click", topFunction);

document.addEventListener('DOMContentLoaded', (event) => {
    // Define the colors for each social media icon
    const colors = {
      'facebook-icon': '#847e8e',
      'twitter-icon': '#847e8e',
      'instagram-icon': '#847e8e',
      'linkedin-icon': '#847e8e',
      'behance-icon': '#847e8e',
      'github-icon': '#847e8e'
    };

    // Add event listeners to each icon
    Object.keys(colors).forEach(id => {
      const icon = document.getElementById(id);
      const defaultColor = icon.style.color;
      const hoverColor = colors[id];

      icon.addEventListener('mouseover', () => {
        icon.style.color = hoverColor;
      });

      icon.addEventListener('mouseout', () => {
        icon.style.color = defaultColor;
      });
    });
  });

  //Character Animation

  document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const speed = 4;
    let y = window.innerHeight - footer.offsetHeight - character.clientHeight; // Start near bottom-left
    let direction = 'up';

    function animateCharacter() {
        // Calculate boundaries
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        const maxY = window.innerHeight - footerHeight;
        const minY = headerHeight;

        // Move character up and down
        switch (direction) {
            case 'up':
                y -= speed;
                if (y <= minY) {
                    direction = 'down';
                }
                break;
            case 'down':
                y += speed;
                if (y >= maxY - character.clientHeight) {
                    direction = 'up';
                }
                break;
        }

        character.style.top = y + 'px';

        requestAnimationFrame(animateCharacter);
    }

    animateCharacter();

    // Adjust the character's position based on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const adjustedY = y - scrollTop;
        character.style.top = adjustedY + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the button TO-THE-TOP
  let backToTopButton = document.getElementById("backToTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

 // When the user clicks on the button, smoothly scroll to the top of the document
 backToTopButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
});


