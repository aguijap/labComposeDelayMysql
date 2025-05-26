const readline = require('readline');
const fetch = require('node-fetch'); // npm install node-fetch@2
const casual = require('casual');    // npm install casual

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generarDNI() {
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const numero = Math.floor(Math.random() * 100000000);
  const letra = letras[numero % 23];
  return numero.toString().padStart(8, '0') + letra;
}

rl.question('¿Cuántos empleados quieres crear? ', async (answer) => {
  const n = parseInt(answer, 10);
  if (isNaN(n) || n <= 0) {
    console.log('Por favor, introduce un número válido.');
    rl.close();
    return;
  }

  for (let i = 0; i < n; i++) {
    const nombre = casual.first_name;
    const apellidos = generarDNI();
    
    try {
      const res = await fetch('http://localhost:3000/api/empleados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellidos})
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`Empleado creado: ${nombre} ${apellidos}, Edad: ${data.edad}`);
      } else {
        console.log(`Error al crear empleado: ${data.message}`);
      }
    } catch (err) {
      console.log('Error de conexión:', err.message);
    }
  }
  rl.close();
});