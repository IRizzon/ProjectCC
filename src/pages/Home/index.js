import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa'

import Header from '../../components/Header'
import SelectModal from '../../components/Modal'

import './style.css'

function Home(){

    //Const's

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [addedSections, setAddedSections] = useState([]);
    const [input, setInput] = useState({
        rendaCliente: '',
        valorImovel:'',
        valorEntrada:'',
        parcelaEntrada:'',
        financiamento:'',
        prestCaixa:'',
        txJuros: '',
        month: '',
        INCC: '2,37'
    });
    const [ proposal, setProposal] = useState('');
    const [ totalAllotment, setTotalAllotment] = useState('');

    //Input Format


    const handleInputChangeInitial = (fieldName) => (e) => {
        e.preventDefault();
        const inputValue = e.target.value;
      
        if (fieldName === 'month') {
            const numericValue = inputValue.replace(/[^0-9]/g, '');
            setInput(prevInput => ({
                ...prevInput,
                [fieldName]: numericValue !== '' ? parseFloat(numericValue) : ''
            }));
        } else {
            const numericValue = inputValue.replace(/[^0-9]/g, '');
    
            let formattedValue = numericValue;
            if (formattedValue !== '0') {
                formattedValue = formattedValue.replace(/^0+/, '');
            }
    
            if (formattedValue.length < 3) {
                formattedValue = formattedValue.padStart(3, '0');
            }
            formattedValue = formattedValue.slice(0, -2) + '.' + formattedValue.slice(-2);
    
            setInput(prevInput => ({
                ...prevInput,
                [fieldName]: formattedValue !== '' ? parseFloat(formattedValue).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''
            }));
        }
    };

    const handleInputChange = (fieldName, index) => (e) => {
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
              
        const updatedSections = [...addedSections];
        updatedSections[index][fieldName] = (formattedValue !== '' ? parseFloat(formattedValue).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '');
      
        setAddedSections(updatedSections);
        
    };
        
    //Modal Function

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
    }

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
                            <label>{section.type}</label>
                            <FaQuestionCircle className='help2' />
                        </div>
                        <div className='bar'>
                            <input type='text' value={section.description} onChange={(e) => handleSectionInput('description', e.target.value, index)}/>
                        </div>
                    </div>
                    <div className='if_main'>
                        <div className='subtitle'>
                            <label>Valor</label>
                            <FaQuestionCircle className='help2' />
                        </div>
                        <div className='bar'>
                            <span>R$</span>
                            <input type='text' value={section.value} onChange={handleInputChange('value', index)}/>
                        </div>
                    </div>
                </div>
            ) : (
            <div className='box_main'>
                <div className='subtitle'>
                    <label>{section.type}</label>
                    <FaQuestionCircle className='help2' />
                </div>
                <div className='bar'>
                    <span>R$</span>
                    <input type='text' value={section.value} onChange={handleInputChange('value', index)}/>
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

    //Operations

    const parseNumber = (number) => {
        return parseFloat(number.replace(/[^0-9]/g, '').replace(',', '.'));
    };

    const calculateTotal = (e) => {
        e.preventDefault();
    
        //Total Proposal
    
        let total = 0;
           
        total += parseNumber(input.financiamento);
        total += parseNumber(input.valorEntrada);
        total += parseNumber(input.parcelaEntrada);
    
        addedSections.forEach(section => {
            if (section.value !== ''){
                console.log("section.value:", section.value);
                total += parseNumber(section.value);
            }
        });
        
        total /= 100;
    
        const formattedProposal = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        setProposal(formattedProposal);
    
        //Total Allotment
    
        let totalAllot = 0;
    
        let juros = parseNumber(input.txJuros) / 10000;
        let entry = parseNumber(input.parcelaEntrada);
        let month = input.month;
        let INCC = input.INCC;
    
        let potencia = Math.pow(1 + juros, month)
        totalAllot = entry * (juros * potencia) / (potencia - 1);
        totalAllot /= 100
    
    
        const formattedTotalAllot = totalAllot.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        setTotalAllotment(formattedTotalAllot);
    };
      


    return(
        <div>
            <Header/>
            <main>
                <h1>Calculadora Corretor</h1>
                <form className='form1'>
                    <section className='intro'>
                        <div className='intro_box'>
                            <div className='title'>
                                <label>Renda do cliente</label>
                                <FaQuestionCircle className='help'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.rendaCliente} onChange={handleInputChangeInitial('rendaCliente')} />
                            </div>
                        </div>
                        <div className='intro_box'>
                        <div className='title'>
                                <label>Valor do imóvel</label>
                                <FaQuestionCircle className='help'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorImovel} onChange={handleInputChangeInitial('valorImovel')} />
                            </div>
                        </div>
                    </section>
                    <section className='ent_value'>
                        <div className='ent_main'>
                            <div className='subtitle'>
                                <label>Sinal</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorEntrada} onChange={handleInputChangeInitial('valorEntrada')} />
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
                                <label>Valor da entrada a ser parcelada</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.parcelaEntrada} onChange={handleInputChangeInitial('parcelaEntrada')} />
                            </div>
                        </div>
                        <div className='date_box'>
                            <label><b>Data</b></label>
                            <input type='date'/>
                        </div>
                    </section>
                    <section className="container">
                        <div className='prest_contain'>
                            <div className='subtitle'>
                                <label>INCC</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='jbar'>
                                <input type="text" value={input.INCC} onChange={handleInputChangeInitial('INCC')}/>
                                <span>%</span>
                                </div>
                            </div>
                        <div className='prest_contain'>
                            <div className='subtitle'>
                                <label>Tx.Juros</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='jbar'>
                                <input type="text" value={input.txJuros} onChange={handleInputChangeInitial('txJuros')} />
                                <span>%</span>
                            </div>
                        </div>
                        <div className='prest_contain'>
                            <div className='subtitle'>
                                <label>Meses</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='jbar'>
                                <input type='text' value={input.month} onChange={handleInputChangeInitial('month')}/>
                            </div>
                        </div>
                    </section>
                    <section className='bank_value'>
                        <div className='bank_main'>
                            <div className='subtitle'>
                                <label>Financiamento</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.financiamento} onChange={handleInputChangeInitial('financiamento')} />
                            </div>
                        </div>
                        <div className='bank_contain'>
                            <div className='subtitle'>
                                <label>Prestação Caixa</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.prestCaixa} onChange={handleInputChangeInitial('prestCaixa')} />
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
                <section className='result_container'>
                    <section className='form2'>
                        <div className='calc_contain'>
                            <button className='calc_button' onClick={calculateTotal}>Calcular</button>
                        </div>
                        <div className='prop_result'>
                            <div className='subtitle'>
                                <label>Valor Proposta</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type='text' value={proposal}></input>
                            </div>
                        </div>
                        <div className='allot_contain'>
                            <div className='allot_result'>
                                <div className='subtitle'>
                                    <label>Parcelas da entrada</label>
                                    <FaQuestionCircle className='help2'/>
                                </div>
                                <div className='bar'>
                                    <span>R$</span>
                                    <input type='text' value={totalAllotment}></input>
                                </div>
                            </div>
                            <div className='allot_result'>
                                <div className='subtitle'>
                                    <label>Parcela com INCC</label>
                                    <FaQuestionCircle className='help2'/>
                                </div>
                                <div className='bar'>
                                    <span>R$</span>
                                    <input type='text' ></input>
                                </div>
                            </div>
                        </div>
                        <div className='finance'>
                             <div className='subtitle'>
                                <label>Comprometimento</label>
                                <FaQuestionCircle className='help2'/>
                            </div>
                            <div className='jbar'>
                                <input type='text' ></input>
                                <span>%</span>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Home;