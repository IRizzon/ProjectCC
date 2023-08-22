import React from "react";
import Modal from "react-modal";
import { BsBalloon, BsBank, BsDatabaseAdd, BsHouseAdd } from "react-icons/bs";

import './style.css';

const SelectModal = ({isOpen, onRequestClose, handleOptionSelection }) =>{

    return(
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Select Option"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
                width: '30%', 
                height: '40%',
                border: "none",
                borderRadius: "25px",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
        }}
        >   
            <div className="modal_contain">
                <div className="options">
                    <button onClick={() => handleOptionSelection('Balão')}>
                        <BsBalloon color="#FFF" size={'4rem'}/>
                        <span>Balão</span>
                    </button>
                    <button onClick={() => handleOptionSelection('FGTS')}>
                        <BsBank color="FFF" size={'4rem'}/>
                        <span>FGTS</span>
                    </button>
                    <button onClick={() => handleOptionSelection('Subsídio')}>
                        <BsDatabaseAdd color="FFF" size={'4rem'}/>
                        <span>Subsídio</span>
                    </button>
                    <button onClick={() => handleOptionSelection('Permuta')}>
                        <BsHouseAdd color="FFF" size={'4rem'}/>
                        <span>Permuta</span>
                    </button>
                </div>
                <button className="close" onClick={onRequestClose}>Fechar</button>
            </div>
        </Modal>
    )
}

export default SelectModal;