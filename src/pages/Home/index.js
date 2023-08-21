import React, { useState } from 'react';
import Header from '../../components/Header'
import { FaQuestionCircle } from 'react-icons/fa'

import './style.css'

function Home(){

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
        const inputValue = e.target.value

        if (inputValue == ''){
            setInput(prevInput => ({
                ...prevInput,
                [fieldName]: 0.00
            }));
        }else{ 
            const formatted = parseFloat(inputValue).toFixed(2);
            setInput(prevInput => ({
                ...prevInput,
                [fieldName]: formatted
            }));
    }   
    }

    return(
        <body>
            <Header/>
            <main>
                <h1>Calculadora Corretor</h1>
                <form>
                   <section className='intro'>
                        <div className='intro_box'>
                            <div className='title'>
                                <span>Renda do cliente</span>
                                <FaQuestionCircle color='#FFF' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.rendaCliente} onChange={handleInputChange('rendaCliente')} />
                            </div>
                        </div>
                        <div className='intro_box'>
                        <div className='title'>
                                <span>Valor do imóvel</span>
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
                                <span>Valor da entrada</span>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorEntrada} onChange={handleInputChange('valorEntrada')} />
                            </div>
                        </div>
                        <div className='date_box'>
                            <span><b>Data</b></span>
                            <input type='date'/>
                        </div>
                   </section>
                   <section className='prest_value'>
                        <div className='prest_main'>
                            <div className='subtitle'>
                                <span>Parcela Entrada</span>
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
                                    <span>Tx.Juros</span>
                                    <FaQuestionCircle color='#0950CD' size={12}/>
                                </div>
                                <div className='jbar'>
                                    <input type="text" value={input.txJuros} onChange={handleInputChange('txJuros')} />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className='prest_contain'>
                                <div className='subtitle'>
                                    <span>Meses</span>
                                    <FaQuestionCircle color='#0950CD' size={12}/>
                                </div>
                                <div className='jbar'>
                                    <input type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='date_box'>
                            <span><b>Data</b></span>
                            <input type='date'/>
                        </div>
                   </section>
                   <section className='bank_value'>
                        <div className='bank_main'>
                            <div className='subtitle'>
                                <span>Financiamento</span>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.financiamento} onChange={handleInputChange('financiamento')} />
                            </div>
                        </div>
                        <div className='bank_contain'>
                            <div className='subtitle'>
                                <span>Prestação Caixa</span>
                                <FaQuestionCircle color='#0950CD' size={12}/>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.prestCaixa} onChange={handleInputChange('prestCaixa')} />
                            </div>
                        </div>
                        <div className='date_box'>
                            <span><b>Data</b></span>
                            <input type='date'/>
                        </div>
                   </section>
                </form>
            </main>
        </body>
    )
}

export default Home;