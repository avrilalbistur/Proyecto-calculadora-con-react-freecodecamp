import React from 'react';

function Boton(props){

    // Función para determinar si el valor es un operador o no.
    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    )
}

export default Boton;