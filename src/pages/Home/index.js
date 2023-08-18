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
            prestCaixa:''
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
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div className='med_bar'>
                                <span>R$</span>
                                <input type="text" value={input.rendaCliente} onChange={handleInputChange('rendaCliente')} />
                            </div>
                        </div>
                        <div className='intro_box'>
                        <div className='title'>
                                <span>Valor do imóvel</span>
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div className='med_bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorImovel} onChange={handleInputChange('valorImovel')} />
                            </div>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div>
                                <span>Valor da entrada</span>
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div>
                                <span>R$</span>
                                <input type="text" value={input.valorEntrada} onChange={handleInputChange('valorEntrada')} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Data</span>
                            </div>
                            <div>
                                <input type='date'/>
                            </div>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div>
                                <span>Parcela Entrada</span>
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div>
                                <span>R$</span>
                                <input type="text" value={input.parcelaEntrada} onChange={handleInputChange('parcelaEntrada')} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Tx.Juros</span>
                            </div>
                            <div>
                                <input type="text" value={input.valorImovel} onChange={handleInputChange('valorImovel')} />
                                <span>%</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Meses</span>
                            </div>
                            <div>
                                <input type='text'/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Data</span>
                            </div>
                            <div>
                                <input type='date'/>
                            </div>
                        </div>
                   </section>
                   <section>
                        <div>
                            <div>
                                <span>Financiamento</span>
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div>
                                <span>R$</span>
                                <input type="text" value={input.financiamento} onChange={handleInputChange('financiamento')} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Prestação Caixa</span>
                                <FaQuestionCircle color='#0950CD' size={10}/>
                            </div>
                            <div>
                                <span>R$</span>
                                <input type="text" value={input.prestCaixa} onChange={handleInputChange('prestCaixa')} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Data</span>
                            </div>
                            <div>
                                <input type='date'/>
                            </div>
                        </div>
                   </section>
                </form>
            </main>
        </body>
    )
}

export default Home;