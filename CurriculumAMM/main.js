const parrafo = document.getElementById('parrafoSobreMi');

if (parrafo) {
    parrafo.addEventListener('mouseover', () => {
        parrafo.style.color = '#0b63e7';
    });
    parrafo.addEventListener('mouseout', () => {
        parrafo.style.color = '';
    });
}

const experiencia = [
    {
        titulo: "Consultora Associate en ESG & Sustainable Finance",
        empresa: "Enfoque Advisory | Madrid",
        periodo: "Septiembre 2024 - Presente",
        tareas: ["Proyecto de cálculo de riesgos climáticos en el ámbito financiero del BBVA."]
    },
    {
        titulo: "Técnica en Sostenibilidad y Regadíos",
        empresa: "TRAGSATEC Grupo Tragsa | Madrid",
        periodo: "Octubre 2023 - Agosto 2024",
        tareas: ["Implementación del Proyecto Observatorio de la Sostenibilidad del Regadío (OSR)."]
    },
    {
        titulo: "Ingeniera Jr. Zonas Verdes",
        empresa: "FCC Medio Ambiente | Las Rozas (Madrid)",
        periodo: "Noviembre 2021 - Mayo 2022",
        tareas: ["Gestión de las zonas verdes de Las Rozas."]
    }
];

const contenedorExperiencia = document.querySelector('.experiencia-laboral');

function marcarExperiencia() {
    if (!contenedorExperiencia) return;
    contenedorExperiencia.innerHTML = '<h2>Experiencia laboral</h2>';
    experiencia.forEach(puesto => {
        const divPuesto = document.createElement('div');
        divPuesto.className = 'puesto';

        const h3 = document.createElement('h3');
        h3.textContent = puesto.titulo;
        h3.addEventListener('mouseover', () => h3.style.color = '#c2d1eb');
        h3.addEventListener('mouseout', () => h3.style.color = '#000000');

        const p = document.createElement('p');
        p.textContent = `${puesto.empresa} | ${puesto.periodo}`;
        p.addEventListener('mouseover', () => p.style.color = '#20b2d3');
        p.addEventListener('mouseout', () => p.style.color = '#000000');

        const ul = document.createElement('ul');
        puesto.tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = tarea;
            li.addEventListener('mouseover', () => li.style.color = '#0b63e7');
            li.addEventListener('mouseout', () => li.style.color = '#000000');
            ul.appendChild(li);
        });

        divPuesto.appendChild(h3);
        divPuesto.appendChild(p);
        divPuesto.appendChild(ul);
        contenedorExperiencia.appendChild(divPuesto);
    });
}

const estudios = [
    {
        titulo: "Grado en Ingeniería Agroambiental",
        centro: "Universidad Politécnica de Madrid",
        detalles: [
            "Desarrollo sostenible del medio rural y políticas agroambientales.",
            "Desarrollo y aplicación de metodologías propias de la ingeniería para evaluar y gestionar la calidad ambiental en la agricultura y medio rural."
        ]
    }
];

const contenedorEstudios = document.querySelector('.estudios');

function marcarEstudios() {
    if (!contenedorEstudios) return;
    contenedorEstudios.innerHTML = '<h2>Estudios</h2>';

    estudios.forEach(item => {
        const divEstudio = document.createElement('div');
        divEstudio.className = 'estudio';

        const h3 = document.createElement('h3');
        h3.textContent = item.titulo;
        h3.addEventListener('mouseover', () => h3.style.color = '#c2d1eb');
        h3.addEventListener('mouseout', () => h3.style.color = '#000000');

        const p = document.createElement('p');
        p.textContent = item.centro;
        p.addEventListener('mouseover', () => p.style.color = '#20b2d3');
        p.addEventListener('mouseout', () => p.style.color = '#000000');

        const ul = document.createElement('ul');
        item.detalles.forEach(detalle => {
            const li = document.createElement('li');
            li.textContent = detalle;
            li.addEventListener('mouseover', () => li.style.color = '#0b63e7');
            li.addEventListener('mouseout', () => li.style.color = '#000000');
            ul.appendChild(li);
        });

        divEstudio.appendChild(h3);
        divEstudio.appendChild(p);
        divEstudio.appendChild(ul);
        contenedorEstudios.appendChild(divEstudio);
    });
}

const competencias = ['Trabajo en equipo', 'Análisis de datos', 'Sostenibilidad ambiental', 'Manejo de Excel'];
const listaCompetencias = document.getElementById('listaCompetencias');

function marcarCompetencias() {
    competencias.forEach(competencia => {
        const item = document.createElement('li');
        item.textContent = competencia;
        item.addEventListener('mouseover', () => item.style.color = '#0b63e7');
        item.addEventListener('mouseout', () => item.style.color = '#000000');
        listaCompetencias.appendChild(item);
    });
}

class Botones {
    constructor(idBoton) {
        this.boton = document.getElementById(idBoton);
        if (!this.boton) return;
        this.contenido = this.boton.nextElementSibling;
        this.textoOriginal = this.boton.textContent;
        this.contenido.style.display = "none";
        this.iniciar();
    }

    iniciar() {
        this.boton.addEventListener('click', () => {
            if (this.contenido.style.display === "none") {
                this.contenido.style.display = "block";
                this.boton.textContent = "Ocultar";
            } else {
                this.contenido.style.display = "none";
                this.boton.textContent = this.textoOriginal;
            }
        });
    }
}

marcarExperiencia();
marcarEstudios();
marcarCompetencias();

new Botones('botonSobremi');
new Botones('botonExperiencia');
new Botones('botonEstudios');
new Botones('botonCompetencias');
new Botones('botonInfo');