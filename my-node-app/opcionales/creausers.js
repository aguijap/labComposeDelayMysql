const readline = require('readline');
const fetch = require('node-fetch'); // npm install node-fetch@2

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomName() {
  const nombres = ['Juan', 'Ana', 'Luis', 'Marta', 'Pedro', 'Lucía', 'Carlos', 'Sofía', 'Miguel', 'Elena'];
  const apellidos = ['García', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Ruiz', 'Díaz', 'Moreno', 'Álvarez'];
  return {
    nombre: nombres[Math.floor(Math.random() * nombres.length)],
    apellidos: apellidos[Math.floor(Math.random() * apellidos.length)]
  };
}

rl.question('¿Cuántos empleados quieres crear? ', async (answer) => {
  const n = parseInt(answer, 10);
  if (isNaN(n) || n <= 0) {
    console.log('Por favor, introduce un número válido.');
    rl.close();
    return;
  }

  for (let i = 0; i < n; i++) {
    const { nombre, apellidos } = randomName();
    try {
      const res = await fetch('http://localhost:3000/api/empleados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellidos })
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`Empleado creado: ${nombre} ${apellidos} (Edad: ${data.edad})`);
      } else {
        console.log(`Error al crear empleado: ${data.message}`);
      }
    } catch (err) {
      console.log('Error de conexión:', err.message);
    }
  }
  rl.close();
});