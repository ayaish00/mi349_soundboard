var applauseButton = document.getElementById('applause')
var applause = new Audio("applause.wav")

applauseButton.addEventListener("click", function () {
    applause.play()
  })

var bellButton = document.getElementById('bell')
var bell = new Audio("bell.wav")

bellButton.addEventListener("click", function () {
    bell.play()
  })

var explosionButton = document.getElementById('explosion')
var explosion = new Audio("explosion.wav")

explosionButton.addEventListener("click", function () {
    explosion.play()
  })

var cymbalButton = document.getElementById('cymbal')
var cymbal = new Audio("cymbal.wav")

cymbalButton.addEventListener("mouseenter", function () {
    cymbal.play()
  })

var hihatButton = document.getElementById('hihat')
var hihat = new Audio("hihat.wav")

hihatButton.addEventListener("mouseenter", function () {
    hihat.play()
  })

var snareButton = document.getElementById('snare')
var snare = new Audio("snare.wav")

snareButton.addEventListener("mouseenter", function () {
    snare.play()
  })
