const parrafo = document.getElementById('parrafoSobreMi')

if (parrafo) {
    parrafo.addEventListener('mouseover', () => {
        parrafo.style.color = '#0b63e7'
    })
    parrafo.addEventListener('mouseout', () => {
        parrafo.style.color = ''
    })
}

const titulos = document.querySelectorAll('.tituloExp')
const puestos = document.querySelectorAll('.puestoExp')
const tareas = document.querySelectorAll('.tareaExp')

titulos.forEach(titulo => {
    titulo.addEventListener('mouseover', () => titulo.style.color = '#c2d1eb')
    titulo.addEventListener('mouseout', () => titulo.style.color = '#000')
})

puestos.forEach(puesto => {
    puesto.addEventListener('mouseover', () => puesto.style.color = '#20b2d3')
    puesto.addEventListener('mouseout', () => puesto.style.color = '#000')
})

tareas.forEach(tarea => {
    tarea.addEventListener('mouseover', () => tarea.style.color = '#0b63e7')
    tarea.addEventListener('mouseout', () => tarea.style.color = '#000')
});

const tituloEstudios = document.getElementById('estudiosTitulo')
const textoEstudios = document.getElementById('estudiosCentro')

if (tituloEstudios) {
    tituloEstudios.addEventListener('mouseover', () => tituloEstudios.style.color = '#c2d1eb')
    tituloEstudios.addEventListener('mouseout', () => tituloEstudios.style.color = '#000')
}

if (textoEstudios) {
    textoEstudios.addEventListener('mouseover', () => textoEstudios.style.color = '#20b2d3')
    textoEstudios.addEventListener('mouseout', () => textoEstudios.style.color = '#000')
}

const competencias = ['Trabajo en equipo', 'Análisis de datos', 'Sostenibilidad ambiental', 'Manejo de Excel'];
const listaCompetencias = document.getElementById('listaCompetencias')

function marcarCompetencias() {
    competencias.forEach(competencia => {
        const item = document.createElement('li')
        item.textContent = competencia
        item.addEventListener('mouseover', () => item.style.color = '#0b63e7')
        item.addEventListener('mouseout', () => item.style.color = '#000000')
        listaCompetencias.appendChild(item)
    })
}

marcarCompetencias()

class Botones {
    constructor(idBoton) {
        this.boton = document.getElementById(idBoton)
        if (!this.boton) return
        this.contenido = this.boton.nextElementSibling
        this.textoOriginal = this.boton.textContent
        this.contenido.style.display = "none"
        this.iniciar()
    }

    iniciar() {
        this.boton.addEventListener('click', () => {
            if (this.contenido.style.display === "none") {
                this.contenido.style.display = "block"
                this.boton.textContent = "Ocultar"
            } else {
                this.contenido.style.display = "none"
                this.boton.textContent = this.textoOriginal
            }
        })
    }
}

marcarExperiencia()
marcarEstudios()
marcarCompetencias()

new Botones('botonSobremi')
new Botones('botonExperiencia')
new Botones('botonEstudios')
new Botones('botonCompetencias')
new Botones('botonInfo')