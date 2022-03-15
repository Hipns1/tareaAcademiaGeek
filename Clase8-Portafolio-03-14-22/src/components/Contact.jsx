import React, { Component } from 'react'
import img21 from "../images/address.png"
import img22 from "../images/communicate.png"
import img23 from "../images/email.png"
import img24 from "../images/telefono.png"

export default class Contact extends Component {
  render() {
    return (
        <div className="contenedorContact">
        <section className="Contact" id="Contact">
            <div className="tituloContact">
                <h1>Contact me</h1>
            </div>
            <div className="contenedorContactFlex">
                <div className="contenedor1">
                    <div className="adressimg">
                        <img src="../images/address.png" ></img>
                    </div>
                    <div className="direccion">
                        <h1>Adress</h1>
                        <h2>Pablo Sexto Segundo, Manzana 12, lote 16A</h2>
                        <h3>Cartagena - Colombia</h3>
                    </div>
                </div>
                <div className="contenedor2">
                    <div className="communicateimg">
                        <img src="../images/communicate.png" ></img>
                    </div>
                    <div className="contacto">
                        <h1>Contact information</h1>
                        <h2 className="email">
                            <a href="mailto:jesudpf21@hotmail.com" target="blank">
                                <img src="../images/email.png" ></img>
                                    Jesudpf21@hotmail.com
                            </a>
                        </h2>
                        <h3 className="telefono">
                            <a href="https://api.whatsapp.com/send/?phone=573002410510&text&app_absent=0" target="blank">
                                <img src="../images/telefono.png" ></img>
                                    +57 3002410510
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
  }
}
