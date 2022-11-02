function story() {
  const nombre = document.getElementById("nombre").value;
  const candy = document.getElementById("candy").value;
  const costume= document.getElementById("costume").value;
  document.getElementById("result").innerHTML = `Once upon a time, a very spooky ${nombre} dressed as ${costume} went trick or treating and got more ${candy} than they knew what to do with.`;
}

document.getElementById('run').addEventListener('click', e => {
  story();
})

setTimeout(()=>{
  nombre.value = '';
  candy.value='';
  costume.value='';
}, 5000);

console.log('its working');