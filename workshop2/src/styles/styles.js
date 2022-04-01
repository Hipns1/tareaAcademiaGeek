import styled from "styled-components";
import { InputBase } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import { Link } from 'react-router-dom';


//ESTILOS FILTROS GENERALES
export const DivBody = styled.div`
border: 2px solid black;
    display: flex;
`
export const DivFilterContainer = styled.div`
    border: 2px solid red;
    margin-left: 50px;
`


//ESTILOS PARA EL COMPONENTE FILTERBUSQUEDA
export const DivBusqueda = styled.div`
    h1{
        margin-top: 16px;
        margin-left: 16px;
        font-size: 25px;
    }
`
export const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InputStyled = styled(InputBase)`
    border: 2px solid black;
    width: 90%;
    margin-top: 16px;
    border-radius: 20px;
    height: 40px;
    padding: 0 40px 0 16px;
    border: 1px solid #ccc;
    background-color: white;
`

//ESTILOS PARA EL COMPONENTE FILTERCHECK
export const DivCheck = styled.div`
    margin-top: 16px;
    padding: 0px 5px;
`
export const AccordionStyle = styled(Accordion)`
    margin-top: 10px !important;
    font-size: 14px !important;
    line-height: 20px !important;
    color: #666666 !important;
    margin-top: 16px !important;
    background-color: transparent !important;
    border: none !important;
`

//ESTILOS PARA EL COMPONENTE CONTENEDOR DE CARDS
export const DivRight = styled.div`
    border: 2px solid red;
    width: 70%;
`

//ESTILOS PARA EL FILTERDATE
export const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 16px;
    margin-left: 16px;
    button{
        padding: 0px 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.005em;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-bottom: 4px solid #76b900;
            color: #76b900;
            font-weight: bold;
            font-size: 16px;
    }
`
export const InputDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    label{
        padding: 0px 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.005em;
        cursor: pointer;
        background-color: transparent;
    }
    input{
        display: none;
        :checked +label:after{
            background-color: #2CB67D;
        }
        :checked +label{
            background-color: transparent;
            border-bottom: 4px solid #76b900;
            color: #76b900;
            font-weight: bold;
            font-size: 16px;
        }
    }
`

// ESTILOS PARA EL COMPONENTE CARDS
export const DivCards = styled.div`
    margin-top: 26px;
    margin-left: 16px;
    background-color: white;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -3px #000000; 
    box-shadow: 0px 0px 15px -3px #000000;
`
export const DivTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    h1{
        color: #76b900;
    }
`
export const LinkStyled = styled(Link)`
    text-decoration: none;
` 
export const DivDescription = styled.div`
    margin-top: 10px;
    h3{
        color: #444;
        font-weight: 400;
        font-size: 16px;
        font-weight: bold;
        span{
            color: #444;
            font-weight: 400;
            font-size: 16px;
        }
    }
    
`
export const DivSpeakers = styled.div`
    display: flex;
    margin-top: 10px;
    h1{
        color: #76b900;
        font-weight: 400;
        font-size: 16px;
    }
    h2{
        color: #444;
        font-weight: 400;
        font-size: 16px;
    }
`