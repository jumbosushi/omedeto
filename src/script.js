var originalImg = document.getElementById("dad")
var imgContainer = document.getElementById("dad-container")
var audioContainer = document.getElementById("audio-container")
var audioSource = ["omedeto1", "omedeto2", "omedeto3", "omedeto4", "omedeto5"]
var width = "+=" + $(document).width();
var pageHeight = $(document).height();
var count = 0

function addNewImg() {
  var imgClone = getNewImg()
  var audioClone = getNewAudio()
  count++
  play(imgClone.id, audioClone.id)
}

function getNewImg() {
  // Clone img
  var imgClone = originalImg.cloneNode()
  imgClone.id = "dad-" + count
  imgClone.style.marginTop = getRandomMarginTop()
  imgContainer.appendChild(imgClone)
  return imgClone
}

function getNewAudio() {
  var newAudioSource = audioSource[getRandom(0,4)]
  var newAudioNode = document.createElement("audio")
  newAudioNode.id = "audio-" + count
  newAudioNode.src = "../media/audio/" + newAudioSource + ".mp3"
  audioContainer.appendChild(newAudioNode)
  return newAudioNode
}

function play(nodeId, audioId) {
  document.getElementById(audioId).play()
  $("#" + nodeId).animate({
    left: width
  }, 2000, function() {
    removeAllNode([nodeId, audioId])
  });
}

function removeAllNode(nodeArray) {
  nodeArray.forEach(function(id) {
    document.getElementById(id).remove()
  })
}

function getRandom(min, max) {
  return Math.round(Math.random() * max - min) + min
}

function getRandomMarginTop() {
  return getRandom(0, pageHeight - 200) + "px"
}

$(document).ready(function(e) {
  addNewImg()
  for (var i = 0; i < 60; i++) {
    var rand = getRandom(1000, 7000)
    setTimeout(function() {
      addNewImg()
    }, rand);
  }
})
