// Star Ratings 4 Skills //
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all stars
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', rateSkill);
    });
  
    // Add click event listener to the submit button
    document.getElementById('submitReview').addEventListener('click', submitReview);
  
    // Load ratings from localStorage when the page loads
    loadRatings();
  });
  
  function rateSkill(event) {
    const star = event.currentTarget;
    const rating = parseInt(star.getAttribute('data-rating'));
    const stars = star.parentElement.querySelectorAll('.star');
    const skill = star.parentElement.getAttribute('data-skill');
  
    // Update star ratings visually
    stars.forEach((s, index) => {
        if (index < rating) {
            s.classList.add('rated');
        } else {
            s.classList.remove('rated');
        }
    });
  
    // Update the displayed rating value
    document.getElementById(`rating-${skill}`).innerText = rating;
  
    // Save the rating immediately
    saveRating(skill, rating);
  }
  
  function saveRating(skill, rating) {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    ratings[skill] = rating; // Save or update the rating
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }
  
  function loadRatings() {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    Object.keys(ratings).forEach(skill => {
        const rating = ratings[skill];
        const stars = document.querySelector(`.stars[data-skill="${skill}"]`).querySelectorAll('.star');
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('rated');
            } else {
                s.classList.remove('rated');
            }
        });
  
        // Update the displayed rating value
        document.getElementById(`rating-${skill}`).innerText = rating;
    });
  }
  
  function submitReview() {
    // Since the ratings are already saved on the fly, no additional saving is needed here
    alert('Ratings submitted successfully!');
  }