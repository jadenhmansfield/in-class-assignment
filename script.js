function story() {
  const name = document.getElementById("name").value;
  const candy = document.getElementById("candy").value;
  const costume= document.getElementById("costume").value;
  document.getElementById("result").innerHTML = `Once upon a time, a very spooky ${name} dressed as ${costume} went trick or treating and got more ${candy} than they knew what to do with.`;
}

document.getElementById('run').addEventListener('click', e => {
  story();
})

console.log('its working');