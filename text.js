function speech() {
  const start = document.getElementById('text').value;
  const utterance = new SpeechSynthesisUtterance(start);
  speechSynthesis.speak(utterance);

}
function stopp() {
  speechSynthesis.cancel();
}
