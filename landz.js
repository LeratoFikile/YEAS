  // Get modal element
  var modal = document.getElementById('thuso-modal');
  var chatIcon = document.getElementById('chat-icon');
  var closeModal = document.getElementById('close-modal');

  // Open modal on icon click
  chatIcon.onclick = function() {
      modal.style.display = 'block';
  }

  // Close modal on clicking 'X'
  closeModal.onclick = function() {
      modal.style.display = 'none';
  }

  // Close modal if user clicks outside of it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }