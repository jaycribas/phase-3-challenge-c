document.addEventListener('DOMContentLoaded', function(event){
  const modal = document.getElementById('modal')
  const bookButtons = document.getElementsByClassName('book-btn')
  const closeModal = document.getElementById('close')

  // Open modal
  for(let bookBtn of bookButtons){
    bookBtn.addEventListener('click', function(event){
      modal.style.display = 'block'

      let roomDetailsRow = event.target.parentNode.parentNode
      let roomNumber = roomDetailsRow.id.slice(4,6)
      let roomPricePerNight = Number(
        roomDetailsRow.querySelectorAll('td')[2].textContent.slice(1,6)
      )

      updateTotal()
      document.getElementById('room-number').textContent = roomNumber
      document.getElementById('modal-price').textContent = roomPricePerNight
      document.getElementById('nights').addEventListener('click', updateTotal)

      function updateTotal(){
        let numberOfNights = Number(document.getElementById('nights').value)
        let bookingTotal = roomPricePerNight * numberOfNights
        document.getElementById('booking-total').textContent = bookingTotal
      }

    })
  }

  // Close modal
  closeModal.addEventListener('click', function(event){
    modal.style.display = 'none'
  })

})
