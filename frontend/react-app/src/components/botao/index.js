import React, { Component } from 'react';

import './botaoStyle.css'

class Botao extends Component {
    render(){
        return(
            <>
                <div className="botoes">
                    <label className="switch">
                        <input type="checkbox" name="checkBox4" id="checkBox4" />
                        <span className="slider round" ></span>   
                    </label>                   
                </div>
            </>
        )
    }
}

export default Botao;