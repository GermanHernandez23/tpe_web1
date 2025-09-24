const API_URL = 'https://68619c1d96f0cc4e34b70eb1.mockapi.io/api/rescates';
const tablaBody = document.querySelector('#tabla-rescates tbody');
const form = document.getElementById('form-rescate');

async function cargarRescates() {
  const res = await fetch(API_URL);
  const datos = await res.json();
  tablaBody.innerHTML = '';
  datos.forEach(crearFila);
}

function crearFila(rescate) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td><input value="${rescate.nombre}" disabled></td>
    <td><input value="${rescate.especie}" disabled></td>
    <td><input type="date" value="${rescate.fechaRescate}" disabled></td>
    <td><input value="${rescate.estado}" disabled></td>
    <td><input value="${rescate.ubicacion}" disabled></td>
    <td><input value="${rescate.adoptantes}" disabled></td>
    <td>
      <button onclick="editarRescate(this, '${rescate.id}')">Editar</button>
      <button onclick="borrarRescate('${rescate.id}')">Borrar</button>
    </td>
  `;
  tablaBody.appendChild(fila);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form));
  await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(datos)
  });
  form.reset();
  cargarRescates();
});

async function borrarRescate(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  cargarRescates();
}

function editarRescate(btn, id) {
  const fila = btn.closest('tr');
  const inputs = fila.querySelectorAll('input');
  const editando = btn.textContent === 'Guardar';

  if (!editando) {
    inputs.forEach(input => input.disabled = false);
    btn.textContent = 'Guardar';
  } else {
    const [nombre, especie, fechaRescate, estado, ubicacion, adoptantes] = [...inputs].map(i => i.value);
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nombre, especie, fechaRescate, estado, ubicacion, adoptantes })
    }).then(() => cargarRescates());
    btn.textContent = 'Editar';
  }
}

window.onload = cargarRescates;
