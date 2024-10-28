//verificar si ya existe el contador en localStorage 
if (locaStorage.getItem('visitas')){
  var visitas = parseInt(localStorage.getItem('visitas')) + 1;
  } else {
  var visitas = 1;
  }
// Guardamos el nuevo número de visitas en localStorage
localStorage.setItem('visitas', visitas);
// Mostramos el número de visitas en el elemento con id 'contador'
document.getElementById('contador').textContent = visitas;