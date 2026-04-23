// ── DADES ─────────────────────────────────────
let usuaris = [];
let indexActual = -1;

// ── GO(): afegeix un jugador ──────────────────
function GO() {
    let input = document.getElementById("inputnombre");
    let nom = input.value.trim();

    if (nombre === "") return;

    usuaris.push(nom);
    input.value = "";

    if (indexActual === -1) indexActual = 0;

    actualizarlista();
    actualizaturno();
}

// ── SIGUIENTE(): avança el torn ───────────────
function siguiente() {
    if (usuaris.length === 0) return;

indexActual++;

if (indexActual >= usuaris.length) {
    indexActual = 0;
}

    actualizarlista();
    actualizarTurno();
}

// ── Mostra qui té el torn ─────────────────────
function actualizarTurno() {
    let turno = document.getElementById("resultado-torn");

    if (usuaris.length === 0 || indexActual === -1) {
        turno.innerHTML = "";
    } else {
        turno.innerHTML = usuario[indexActual];
    }
}

// ── Pinta la llista de jugadors ───────────────
function actualizarlista() {
    let lista = document.getElementById("resultado-lista");
    lista.innerHTML = "";

    for (let i = 0; i < usuarios.length; i++) {
        if (i === indexActual) {
            llista.innerHTML += `turno de jugador: ${usuarios[i]}<br>`;
        } else {
            lista.innerHTML += `${usuarios[i]}<br>`;
        }
    }
}
