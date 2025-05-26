document.getElementById('createUserBtn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const apellidos = document.getElementById('apellidos').value;
    if (!username) return alert('Ingrese un nombre de usuario');
    if (!apellidos) return alert('Ingrese los apellidos');
    const res = await fetch('/api/empleados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: username, apellidos })
    });
    const data = await res.json();
    alert(data.message);
});

document.getElementById('listUserBtn').addEventListener('click', async () => {
    const res = await fetch('/api/empleados');
    const data = await res.json();
    const userListContainer = document.getElementById('userListContainer');
    if (!Array.isArray(data)) {
        userListContainer.style.display = 'block';
        userListContainer.innerHTML = '<strong>No se pudieron obtener los usuarios.</strong>';
        return;
    }
    if (data.length === 0) {
        userListContainer.style.display = 'block';
        userListContainer.innerHTML = '<strong>No hay usuarios registrados.</strong>';
        return;
    }
    let html = '<h2 style="color:#1976d2; text-align:center;">Usuarios registrados</h2><ul style="list-style:none; padding:0;">';
    data.forEach((user, idx) => {
        html += `<li style="padding:0.5em 0; border-bottom:1px solid #eee;">
        ${idx + 1}. <strong>${user.nombre}</strong> ${user.apellidos} <span style="color:#888;">(Edad: ${user.edad})</span>
    </li>`;
    });
    html += '</ul>';
    userListContainer.innerHTML = html;
    userListContainer.style.display = 'block';
});

fetch('/api/container-name')
  .then(res => res.json())
  .then(data => {
    document.getElementById('containerName').textContent = data.containerName;
    console.log('Nombre del contenedor:', data.containerName);
  });
