import React, { Component } from 'react'
import img11 from "../images/matlab.png"
import img12 from "../images/python.png"
import img13 from "../images/solidworks.png"
import img14 from "../images/photoshop.png"
import img15 from "../images/javascript.png"
import img16 from "../images/css3.png"
import img17 from "../images/html5.png"
import img18 from "../images/reactjs.png"

export default class Skills extends Component {
  render() {
    return (
        <div className="contenedorSkills">
        <section className="Skills" id="Skills">
            <div className="contenedorSkillsFlex">
                <div className="habilidadestexto1">
                    <h1>Skills</h1>
                </div>
                <div className="habilidadestexto">
    
                    <div className="iconosSkills1">
                        <ul className="iconosSkills">
                            <li className="matlab">
                                <img src="../images/matlab.png" ></img>
                                    <progress id="file1" max="100" value="50"></progress>
                            </li>
                            <li className="python">
                                <img src="../images/python.png" ></img>
                                    <progress id="file2" max="100" value="30"></progress>
                            </li>
                            <li className="solidworks">
                                <img src="../images/solidworks.png" ></img>
                                    <progress id="file3" max="100" value="70"></progress>
                            </li>
                            <li className="photoshop">
                                <img src="../images/photoshop.png" ></img>
                                    <progress id="file4" max="100" value="60"></progress>
                            </li>
                            <li className="javascript">
                                <img src="../images/javascript.png" ></img>
                                    <progress id="file5" max="100" value="70"></progress>
                            </li>
                            <li className="css3">
                                <img src="../images/css3.png" ></img>
                                    <progress id="file6" max="100" value="80"></progress>
                            </li>
                            <li className="html5">
                                <img src="../images/html5.png" ></img>
                                    <progress id="file7" max="100" value="80"></progress>
                            </li>
                            <li className="html5">
                                <img src="../images/reactjs.png" ></img>
                                    <progress id="file7" max="100" value="50"></progress>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div>
    
                </div>
            </div>
        </section>
    </div>
    
    )
  }
}
