// Datos
const estadosPorPais = {
    Mexico: ["Seleccione un estado", "Hidalgo", "Queretaro"],
    EstadosUnidos: ["Seleccione un estado", "California", "Texas"],
    Argentina: ["Seleccione un estado", "Buenos Aires", "Córdoba"]
};

const municipiosPorEstado = {
    Hidalgo: ["Seleccione un municipio", "Tula", "Tepeji", "Mixquiahula"],
    Queretaro: ["Seleccione un municipio", "Querétaro", "San Juan del Río"],
    California: ["Seleccione un municipio", "Los Angeles", "San Francisco"],
    Texas: ["Seleccione un municipio", "Houston", "Austin"],
    "Buenos Aires": ["Seleccione un municipio", "La Plata", "Mar del Plata"],
    Córdoba: ["Seleccione un municipio", "Córdoba", "Río Cuarto"]
};

const localidadesPorMunicipio = {
    Tula: ["Seleccione una localidad", "San Marcos", "El Llano", "San Miguel Vindho"],
    Tepeji: ["Seleccione una localidad", "Tepeji Centro", "Tepeji Sur", "Tepeji Norte"],
    Mixquiahula: ["Seleccione una localidad", "Mixquiahula Centro", "Mixquiahula Este", "Mixquiahula Oeste"],
    "Querétaro": ["Seleccione una localidad", "Querétaro Centro", "Querétaro Sur", "Querétaro Norte"],
    "San Juan del Río": ["Seleccione una localidad", "San Juan Centro", "San Juan Este", "San Juan Oeste"],
    "Los Angeles": ["Seleccione una localidad", "Downtown LA", "Hollywood", "Santa Monica"],
    "San Francisco": ["Seleccione una localidad", "Downtown SF", "Golden Gate", "Chinatown"],
    Houston: ["Seleccione una localidad", "Downtown Houston", "The Heights", "Midtown"],
    Austin: ["Seleccione una localidad", "Downtown Austin", "South Congress", "East Austin"],
    "La Plata": ["Seleccione una localidad", "La Plata Centro", "La Plata Sur", "La Plata Norte"],
    "Mar del Plata": ["Seleccione una localidad", "Mar del Plata Centro", "Mar del Plata Sur", "Mar del Plata Norte"],
    Córdoba: ["Seleccione una localidad", "Córdoba Centro", "Córdoba Sur", "Córdoba Norte"],
    "Río Cuarto": ["Seleccione una localidad", "Río Cuarto Centro", "Río Cuarto Este", "Río Cuarto Oeste"]
};

// Funciones para cargar opciones en los select
function cargarEstados() {
    const paisSeleccionado = document.getElementById("pais").value;
    const estados = estadosPorPais[paisSeleccionado];
    const estadoSelect = document.getElementById("estado");

    // Limpiar opciones previas
    estadoSelect.innerHTML = "";

    // Agregar nuevas opciones
    estados.forEach((estado) => {
        const option = document.createElement("option");
        option.value = estado;
        option.text = estado;
        estadoSelect.add(option);
    });
}

function cargarMunicipios() {
    const estadoSeleccionado = document.getElementById("estado").value;
    const municipios = municipiosPorEstado[estadoSeleccionado];
    const municipioSelect = document.getElementById("municipio");

    // Limpiar opciones previas
    municipioSelect.innerHTML = "";

    // Agregar nuevas opciones
    municipios.forEach((municipio) => {
        const option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.add(option);
    });
}

function cargarLocalidades() {
    const municipioSeleccionado = document.getElementById("municipio").value;
    const localidades = localidadesPorMunicipio[municipioSeleccionado];
    const localidadSelect = document.getElementById("localidad");

    // Limpiar opciones previas
    localidadSelect.innerHTML = "";

    // Agregar nuevas opciones
    localidades.forEach((localidad) => {
        const option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
    });
}

// Función para mostrar los datos seleccionados
function mostrarDatos() {
    const pais = document.getElementById("pais").value;
    const estado = document.getElementById("estado").value;
    const municipio = document.getElementById("municipio").value;
    const localidad = document.getElementById("localidad").value;
    const datosSeleccionados = `País: ${pais}\nEstado: ${estado}\nMunicipio: ${municipio}\nLocalidad: ${localidad}`;

    document.getElementById("datosSeleccionados").innerHTML = `<p>${datosSeleccionados}</p>`;
}
