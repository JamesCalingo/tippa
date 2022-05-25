function clear() {
  $('#total').val('')
  $('#people').val('')
}

$('#info').on("click", function() {
  Swal.fire({
  text:  "All you need to do is input your total (pre-tax) and the percentage you want to tip. Additionally, if you want to split the tip between a group of people, you can input that too - if you don't, the calculator will assume only one person is reponsible for the tip.",
  confirmButtonText: "Got it!"
  })
})

function calculateTip(total, percent, people) {

  let tip = total * percent
  let $tip = tip.toFixed(2)

  let tipDivide = tip / people
  let $tipDivide = tipDivide.toFixed(2)

  if (isNaN(total)) {
    Swal.fire({
      title: 'Interesting...',
      text: 'Your total is...wait, what is your total exactly?',
      type: 'error',
      confirmButtonText: 'Please put a number in for your total'
    })
    return
  }

  if (people < 1 || total < 1) {
    Swal.fire({
      title: "Cannot calculate tip",
      text: "I can't calculate a tip based on these values. Please check your vaules and try again",
      type: 'error',
     
    })
    return
  }

  if (people == 1) {
    $('#calculated-tip').html(`You should tip <strong>$${$tip}</strong>!`)
    clear()
    return $tip
  }

  if (people > 1) {
    $('#calculated-tip').html(`Your total tip is <strong>$${$tip}</strong>. Divided amongst the ${people} of you, each person should chip in <strong>$${$tipDivide}</strong>.<br>
  (This is assuming you split the tip evenly)`)
    clear()
    return $tip
  }
}

$('#calculate').on('click', function (event) {
  event.preventDefault()
  let $total = $('#total').val().trim()
  let $percent = $('#tip').val().trim() / 100
  let $people = $('#people').val() ? $('#people').val().trim() : 1
  calculateTip($total, $percent, $people)

})