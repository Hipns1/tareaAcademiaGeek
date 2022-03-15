import React, { Component } from 'react'
import imaasd from "../images/cripto.png"
import imasdgasdasdasda2 from "../images/M3.png"
import imasdasg3 from "../images/gimbal.png"

export default class Projects extends Component {
  render() {
    return (
        <div className="contenedorProjects">
        <section className="Projects" id="Projects">
            <div className="TituloProjects">
                <h1 className="titulo1">Projects</h1>
            </div>
            <div className="contenedorProjectsFlex">
                <div className="proyecto1">
                    <div>
                        <h1>Information page about trading courses</h1>
                        <h2>
                            A page was made in which information about the trading courses
                            offered by the client is provided and a purchase link is included
                            through paypal.
                        </h2>
                    </div>
                    <div className="project1">
                        <img src="../images/cripto.png" ></img>
                    </div>
                    <a href="https://cripto-capital.com/" target="blank">
                        <button className="botonIr">Ir</button>
                    </a>
                </div>
                <div className="proyecto2">
                    <h1>M3 - Ecommerce</h1>
                    <h2>
                        Carrying out the technical test of the Brazilian company M3, which
                        consisted of recreating an online store using HTML5, CSS3 and
                        Javascrip. The store should have the functionality to filter by
                        attributes and shopping cart, in addition to using an API.
                    </h2>
                    <img src="../images/M3.png" ></img>
                </div>
                <div className="proyecto3">
                    <h1>Gimbal</h1>
                    <h2>
                        construction of a camera support which would have a 3-axis gimball,
                        which could stabilize it with a closed-loop response of less than 0.5
                        seconds.
                    </h2>
                    <img src="../images/gimbal.png" ></img>
                </div>
            </div>
        </section>
    </div>
    )
  }
}

