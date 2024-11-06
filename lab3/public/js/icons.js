function showImage(imgId) {
    // Hide all images
    const images = document.querySelectorAll('.feature-img');
    images.forEach(img => img.classList.add('hidden'));
    
    // Show the clicked image
    document.getElementById(imgId).classList.remove('hidden');
  }
  