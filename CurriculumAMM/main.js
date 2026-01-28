
const competencias = ['Trabajo en equipo','Análisis de datos','Sostenibilidad ambiental','Manejo de Excel'];

const listaCompetencias = document.getElementById('listaCompetencias');

function mostrarCompetencias() {
    competencias.forEach(competencia => {
        const lista = document.createElement('lista');
        lista.textContent = competencia;

        lista.addEventListener('mouseover', () => lista.style.color = '#0b63e7');
        lista.addEventListener('mouseout', () => lista.style.color = ' #000000');

        listaCompetencias.appendChild(lista);
    });
}
mostrarCompetencias();

class Botones {
    constructor(idBoton) {
        this.boton = document.getElementById(idBoton);
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

const toggleSobreMi = new Botones('botonSobremi');
const toggleExperiencia = new Botones('botonExperiencia');
const toggleEstudios = new Botones('botonEstudios');
const toggleCompetencias = new Botones('botonCompetencias');
const toggleInfo = new Botones('botonInfo');