document.addEventListener('DOMContentLoaded', function(event){
  const modal = document.getElementById('modal')
  const bookButtons = document.getElementsByClassName('book-btn')
  const closeModal = document.getElementById('close')

  // Open modal
  for(let bookBtn of bookButtons){
    bookBtn.addEventListener('click', function(event){
      modal.style.display = 'block'
    })
  }

  // Close modal
  closeModal.addEventListener('click', function(event){
    modal.style.display = 'none'
  })

})
