function clear () {
  $('#total').val('')
  $('#people').val('')
}

function calculateTip(total, percent, people){

var tip = total * percent
var $tip = tip.toFixed(2)

var tipDivide = tip / people
var $tipDivide = tipDivide.toFixed(2)

if (isNaN(total)) {
  Swal.fire({
    title: 'Interesting...',
    text: 'Your total is...wait, what is your total exactly?',
    type: 'error',
    confirmButtonText: 'Please put a number in for your total'
  })
  return false
}

if (people < 1 || total < 1) {
  Swal.fire({
    title: 'HEY!',
    text: 'Are you seriously going to skip out on tipping?',
    type: 'error',
    confirmButtonText: "Either way, I'm not letting you do that!"
  })
  return false
}

if (people == 1) {
  $('#calculatedTip').html(`You should tip <strong>$${$tip}</strong>!`)
  clear()
}

if (people > 1) {
  $('#calculatedTip').html(`Your total tip is <strong>$${$tip}</strong>. Divided amongst the ${people} of you, each person should chip in <strong>$${$tipDivide}</strong>.<br>
  (This is assuming you all split the bill evenly)`)
  clear()
}
}

$('#calculate').on('click', function (event) {
  event.preventDefault()
  let total = $('#total').val().trim()
let percent = $('#tip').val().trim() / 100
let people = $('#people').val().trim()
  calculateTip()
  
})