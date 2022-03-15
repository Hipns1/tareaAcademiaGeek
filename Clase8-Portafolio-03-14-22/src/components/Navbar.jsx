import React, { Component } from 'react';
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <div className="contenedorMenu">
                <header>
                    <div className="menu">
                        <a href="#Home" className="primero">Home</a>
                        <a href="#About">About</a>
                        <a href="#Projects">Projects</a>
                        <a href="#Skills">Skills</a>
                        <a href="#Experience">Experience</a>
                        <a href="#Contact">Contact</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;     