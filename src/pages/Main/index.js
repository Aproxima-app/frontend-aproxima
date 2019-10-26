import React from 'react';

import './styles.css';
import Logo from '../../assets/logo.png'
import Aproxima from '../../assets/aproximabranca.svg'

function Main() {
    return (
        <div class='shadow'>
            <img src={Logo} />
            <img src={Aproxima} />
            <h2>O que fazemos?</h2>
            <div className='Text'>
                <p>Conectamos o graduando a uma vivência real dentro da sua futura área de atuação, através de eventos relacionados com a sua graduação, e formamos uma ponte de integração entre a instuição e o aluno.</p>
            </div>
            
        </div>
    )
} 

export default Main;
