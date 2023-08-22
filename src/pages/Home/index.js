import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa'

import Header from '../../components/Header'
import SelectModal from '../../components/Modal'

import './style.css'

function Home(){

    //Modal Function

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [addedSections, setAddedSections] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };
      
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        setAddedSections([...addedSections, { 
            type: option, 
            description: '',
            value: '', 
            date: '' 
        }]);
        closeModal();
    };

    const handleSectionInput = (fieldName, value, index) => {
        const updatedSections = [...addedSections];
        updatedSections[index][fieldName] = value;
        setAddedSections(updatedSections);
    };

    const handleSectionRemoval = (index) => {
        const updatedSections = [...addedSections];
        updatedSections.splice(index, 1);
        setAddedSections(updatedSections);
    };

    const renderAddedSections = () => {
        return addedSections.map((section, index) => (
        <section key={index} className='box_add'>
            {section.type === 'Permuta' ? (
                <div className='if_contain'>
                    <div className='if_main'>
                        <div className='subtitle'>
                            <label>Descrição</label>
                            <FaQuestionCircle color='#0950CD' size={12} />
                        </div>
                        <div className='bar'>
                            <input type='text' value={section.value} onChange={(e) => handleSectionInput('value', e.target.value, index)}/>
                        </div>
                    </div>
                    <div className='if_main'>
                        <div className='subtitle'>
                            <label>Valor</label>
                            <FaQuestionCircle color='#0950CD' size={12} />
                        </div>
                        <div className='bar'>
                            <span>R$</span>
                            <input type='text' value={section.value} onChange={(e) => handleSectionInput('value', e.target.value, index)}/>
                        </div>
                    </div>
                </div>
            ) : (
            <div className='box_main'>
                <div className='subtitle'>
                    <label>{section.type}</label>
                    <FaQuestionCircle color='#0950CD' size={12} />
                </div>
                <div className='bar'>
                    <span>R$</span>
                    <input type='text' value={section.value} onChange={(e) => handleSectionInput('value', e.target.value, index)}/>
                </div>
            </div>
            )}
            <div className='date_box'>
                <label><b>Data</b></label>
                <input type='date' />
            </div>
            <button className='remove' onClick={() => handleSectionRemoval(index)}>X</button>
        </section>
        ));
    };

    //Input Format

    const [input, setInput] = useState({
            rendaCliente: '',
            valorImovel:'',
            valorEntrada:'',
            parcelaEntrada:'',
            financiamento:'',
            prestCaixa:'',
            txJuros: ''
        });

        const handleInputChange = (fieldName) => (e) => {
            e.preventDefault();
            const inputValue = e.target.value;
          
            const numericValue = inputValue.replace(/[^0-9]/g, '');
          
            let formattedValue = numericValue;
            if (formattedValue !== '0') {
              formattedValue = formattedValue.replace(/^0+/, '');
            }
          
            if (formattedValue.length < 3) {
              formattedValue = formattedValue.padStart(3, '0');
            }
            formattedValue = formattedValue.slice(0, -2) + '.' + formattedValue.slice(-2);
          
            setInput((prevInput) => ({
              ...prevInput,
              [fieldName]: formattedValue,
            }));
        };    

    return(
        <div>
            <Header/>
            <main>
                <h1>Calculadora Corretor</h1>
                <form>
                    <section className='intro'>
                        <div className='intro_box'>
                            <div className='title'>
                                <label>Renda do cliente</label>
                                <FaQuestionCircle color='#FFF' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.rendaCliente} onChange={handleInputChange('rendaCliente')} />
                            </div>
                        </div>
                        <div className='intro_box'>
                        <div className='title'>
                                <label>Valor do imóvel</label>
                                <FaQuestionCircle color='#FFF' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorImovel} onChange={handleInputChange('valorImovel')} />
                            </div>
                        </div>
                    </section>
                    <section className='ent_value'>
                        <div className='ent_main'>
                            <div className='subtitle'>
                                <label>Valor da entrada</label>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorEntrada} onChange={handleInputChange('valorEntrada')} />
                            </div>
                        </div>
                        <div className='date_box'>
                            <label><b>Data</b></label>
                            <input type='date'/>
                        </div>
                    </section>
                    <section className='prest_value'>
                        <div className='prest_main'>
                            <div className='subtitle'>
                                <label>Parcela Entrada</label>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.parcelaEntrada} onChange={handleInputChange('parcelaEntrada')} />
                            </div>
                        </div>
                        <div className="container">
                            <div className='prest_contain'>
                                <div className='subtitle'>
                                    <label>Tx.Juros</label>
                                    <FaQuestionCircle color='#0950CD' size={12}/>
                                </div>
                                <div className='jbar'>
                                    <input type="text" value={input.txJuros} onChange={handleInputChange('txJuros')} />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className='prest_contain'>
                                <div className='subtitle'>
                                    <label>Meses</label>
                                    <FaQuestionCircle color='#0950CD' size={12}/>
                                </div>
                                <div className='jbar'>
                                    <input type='text' value={input.meses} onChange={handleInputChange('meses')}/>
                                </div>
                            </div>
                        </div>
                        <div className='date_box'>
                            <label><b>Data</b></label>
                            <input type='date'/>
                        </div>
                    </section>
                    <section className='bank_value'>
                        <div className='bank_main'>
                            <div className='subtitle'>
                                <label>Financiamento</label>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.financiamento} onChange={handleInputChange('financiamento')} />
                            </div>
                        </div>
                        <div className='bank_contain'>
                            <div className='subtitle'>
                                <label>Prestação Caixa</label>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.prestCaixa} onChange={handleInputChange('prestCaixa')} />
                            </div>
                        </div>
                        <div className='date_box'>
                            <label><b>Data</b></label>
                            <input type='date'/>
                        </div>
                    </section>
                    {renderAddedSections()}
                </form>
                <button className='add_input' onClick={openModal}>Adicionar</button>
                <SelectModal 
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal} 
                    handleOptionSelection={handleOptionSelection} 
                />
            </main>
        </div>
    )
}

export default Home;