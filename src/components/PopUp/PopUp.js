import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './style.css'

function PopUp({isOpen}) {

    const [closePopUp, setClosePopUp] = useState(true);
    isOpen = closePopUp
    
    if(isOpen){
        return(
            <section className="BackPopUp">
                    <div className="PopUp">
                        <span></span>
                        <div>
                            <Link className="link" to="../Policies/Cookie">Políticas de Cookies</Link>
                            <Link className="link" to="../Policies/Privacy">Políticas de Privacidade</Link>
                         </div>
                        <button onClick={() => setClosePopUp(false) }>Ok</button>
                    </div>
            </section>
        )
    }

    return null;

}

export default PopUp;