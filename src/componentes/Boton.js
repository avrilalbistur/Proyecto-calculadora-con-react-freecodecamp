import React from 'react';
import '../css/Boton.css'
function Boton(props){

    // Función para determinar si el valor es un operador o no.
    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;