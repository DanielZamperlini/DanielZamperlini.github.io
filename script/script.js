document.querySelector('.navbar__toggle').addEventListener('click', function() {
  this.classList.toggle('open')
  
  document.querySelector('.menu').classList.toggle('open')
})
document.querySelector('.menu').addEventListener('click', function() {
  this.classList.toggle('open')

  document.querySelector('.navbar__toggle').classList.toggle('open')
})