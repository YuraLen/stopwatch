const hourElement = document.querySelector(".hour")
const minuteElement = document.querySelector(".minute")
const secondElement = document.querySelector(".second")
const millisecondElement = document.querySelector(".millisecond")
const resultsBlock = document.querySelector(".results_block")

const hourTitle = document.querySelector(".title_hour")
const minuteTitle = document.querySelector(".title_minute")
const secondTitle = document.querySelector(".title_second")
const millisecondTitle = document.querySelector(".title_millisecond")

// Buttons

const startButton = document.querySelector(".start")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")
const newButton = document.querySelector(".new")

// Validators

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

// Listeners
startButton.addEventListener("click", () => {
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener("click", () => {
  clearInterval(interval)
})

stopButton.addEventListener("click", () => {
  clearInterval(interval)
  clearFields()
  newButton.disabled = true
})

newButton.addEventListener("click", () => {
  clearInterval(interval)
  resultsBlock.style.visibility = "visible"
  let results = document.querySelector(".results")
  const block = document.createElement("div")
  block.classList.add("results_info")
  counter++
  block.innerText = `Result ${counter}: ${hourElement.innerText}:${minuteElement.innerText}:${secondElement.innerText}:${millisecondElement.innerText}`
  results.append(block)
  clearFields()
  clearInterval(interval)
  interval = setInterval(startTimer, 10)

  let arr = new Array()
    arr.push(results.innerText)
  console.log("arr", arr);
})

// Variables

let hour = 00, 
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true

function startTimer() {

  newButton.disabled = false

  millisecond++

  // milliseconds

  if(millisecond < 9){
    millisecondElement.innerText = "0" + millisecond
  } 
  if(millisecond > 9){
    millisecondElement.innerText = millisecond
  }
  if(millisecond > 99){
    second++
    secondElement.innerText = "0" + second
    millisecond = 0,
    millisecondElement.innerText = "0" + millisecond
  }

  // seconds

  if(second < 9){
    secondElement.innerText = "0" + second
  }
  if(second > 9){
    secondElement.innerText = second
  }
  if(second > 59){
    minute++
    minuteElement.innerText = "0" + minute
    second = 0,
    secondElement.innerText = "0" + second
  }
  
    // minutes

    if(minute < 9){
      minuteElement.innerText = "0" + minute
    }
    if(minute > 9){
      minuteElement.innerText = minute
    }
    if(minute > 59){
      hour++
      hourElement.innerText = "0" + hour
      minute = 0,
      minuteElement.innerText = "0" + minute
    }

    hourTitle.innerText = declOfNum(hour, ['hour', 'hours', 'hours']);
    minuteTitle.innerText = declOfNum(minute, ['minute', 'minutes', 'minutes']);
    secondTitle.innerText = declOfNum(second, ['second', 'seconds', 'seconds']);

}

function clearFields() {
    hour = 00, 
    minute = 00,
    second = 00,
    millisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
}

function disabledBtn() {
  if(disabled){
    newButton.disabled = true
  }
}

disabledBtn()