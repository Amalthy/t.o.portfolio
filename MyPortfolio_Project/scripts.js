// JavaScript to handle card flipping
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


// Add event listener to the button
mybutton.addEventListener("click", topFunction);

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



 