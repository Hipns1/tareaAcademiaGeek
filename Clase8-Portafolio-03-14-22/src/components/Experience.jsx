import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className="contenedorExperience">
        <section className="Experience" id="Experience">
            <div className="tituloExperience">
                <h1>Experience</h1>
            </div>
            <div className="contenedorExperienceFlex">
                <div className="Escuela">
                    <h1>Basic Education - School</h1>
                    <h2>Instirución Educatica Hermano
                        Antonio Ramos De la Salle
                    </h2>
                    <h3>Graduated in 2014</h3>
                </div>
                <div className="Universidad">
                    <h1>Higher Education - University</h1>
                    <h2>Universidad Tecnológica de Bolívar</h2>
                    <h3>Graduated in 2021</h3>
                </div>
            </div>
            <div className="contenedorExperienceFlex2">
                <div className="Curso1">
                    <h1>Curso - Diseño web con HTML5 + CSS3</h1>
                    <h2>Fundacion Telefonica Movistar</h2>
                    <h3>Certificated in 2021</h3>
                </div>
                <div className="Curso2">
                    <h1>Curso - Programación con Javascript</h1>
                    <h2>Fundación Telefonica Movistar</h2>
                    <h3>Certificated in 2021</h3>
                </div>
            </div>
    
        </section>
    </div>
    )
  }
}
