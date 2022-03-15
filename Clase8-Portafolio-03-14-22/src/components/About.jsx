import React, { Component } from 'react'
import img from "../images/imgabout.png"
import img1 from "../images/diseño.png"
import img2 from "../images/web.png"
import img3 from "../images/robot.png"

export default class About extends Component {
  render() {
    return (
        <div className="contenedorAbout">
        <section className="About" id="About">
            <div className="contenedorAboutFlex">
                <div className="imagenacerca">
                    <img src="../images/imgabout.png" ></img>
                </div>
                <div className="acerca">
                    <h1>About me</h1>
                    <h2>I consider myself a committed, hard-working and persevering 
                        person, who knows how to work as a team. I have knowledge in 
                        the programming area, in open source programs and computer-aided 
                        design (CAD), I also have knowledge in assembly and programming 
                        of everything related to PLC and its applications to the industry; 
                        also theoretical management of topics related to industrial robotics 
                        and manipulator arms. I am currently dabbling in web page design, 
                        specifically frontend development.</h2>
                    <div className="iconosH">
                        <ul className="iconosH1">
                            <li className="diseño"> 
                                <img src="../images/diseño.png"></img>
                            </li>
                            <li className="web"> 
                                <img src="../images/web.png"></img>
                            </li>
                            <li className="robot"> 
                                <img src="../images/robot.png"></img>
                            </li>
                        </ul>
                    </div>   
                </div>    
            </div>

        </section>
    </div>
    )
  }
}
