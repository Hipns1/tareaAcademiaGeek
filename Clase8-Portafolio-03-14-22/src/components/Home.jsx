import React, { Component } from 'react'
import emailImg from "../images/email.png"
import telefono from "../images/telefono.png"
import fb from "../images/facebook.png"
import ig from "../images/instagram.png"
import ld from "../images/linkedin.png"
import yo from "../images/yo.jpg"
import hola from "../images/desarrollo.jpg"


export default class Home extends Component {
  render() {
    return (
      <div className="contenedorHome">

                <section className="Home">
                    <div className="contenedorHomeFlex" id="fondofilter">
                        <div className="content">
                            <div className="info">
                                <h1>Jesús David Pérez Ferrer</h1>
                                <h2>Mechatronic Engineer </h2>
                                <h3>and  Begginer Developer </h3>
                                <h4 className="email">
                                    <a href="mailto:jesudpf21@hotmail.com" target="blank">
                                        <img src="../images/email.png" ></img>
                                        Jesudpf21@hotmail.com
                                    </a>
                                </h4>
                                <h5 className="telefono">
                                    <a href="https://api.whatsapp.com/send/?phone=573002410510&text&app_absent=0" target="blank">
                                        <img src="../images/telefono.png" ></img>
                                        +57 3002410510
                                    </a>
                                </h5>
                            </div>
                            <div className="redes">
                                <a className="facebook" href="https://www.facebook.com/davidperezf1/" target="blank">
                                    <img className="facebookclass" src="../images/facebook.png"></img>
                                </a>
                                <a className="instagram" href="https://www.instagram.com/davidpf21/" target="blank">
                                    <img className="instagramclass" src="../images/instagram.png"></img>
                                </a>
                                <a className="linkedin" href="https://www.linkedin.com/in/jes%C3%BAs-david-p%C3%A9rez-ferrer-a72117164/" target="blank">
                                    <img className="linkedinclass" src="../images/linkedin.png"></img>
                                </a>
                            </div> 
                        </div>
                
                        <div className="foto">
                            <div className="borde">
                                <figure className="foto2">
                                    <img src="../images/yo.jpg"></img>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
  }
}   
