import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa'


import Header from '../../components/Header'
import SelectModal from '../../components/Modal'
import AdsComponent from '../../components/AdSense';

import './style.css'

function Home(){

    //Const's

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [addedSections, setAddedSections] = useState([]);
    
    const [helpVisible, setHelpVisible] = useState(false);
    const [helpVisible1, setHelpVisible1] = useState(false);
    const [helpVisible2, setHelpVisible2] = useState(false);
    const [helpVisible3, setHelpVisible3] = useState(false);
    const [helpVisible4, setHelpVisible4] = useState(false);
    const [helpVisible5, setHelpVisible5] = useState(false);
    const [helpVisible6, setHelpVisible6] = useState(false);
    const [helpVisible7, setHelpVisible7] = useState(false);
    const [helpVisible8, setHelpVisible8] = useState(false);
    const [helpVisible9, setHelpVisible9] = useState(false);
    const [helpVisible10, setHelpVisible10] = useState(false);
    const [helpVisible11, setHelpVisible11] = useState(false);
    const [helpVisible12, setHelpVisible12] = useState(false);
    const [helpVisible13, setHelpVisible13] = useState(false);
    const [helpVisible14, setHelpVisible14] = useState(false);
    const [helpVisible15, setHelpVisible15] = useState(false);
    const [helpVisible16, setHelpVisible16] = useState(false);
    
    const [input, setInput] = useState({
        rendaCliente: '0,00',
        valorImovel: '0,00',
        valorEntrada: '0,00',
        parcelaEntrada: '0,00',
        financiamento: '0,00',
        prestCaixa: '0,00',
        txJuros: '0,00',
        month: '',
        INCC: '0,10',
    });
    const [ proposal, setProposal] = useState('');
    const [ totalAllotment, setTotalAllotment] = useState('');
    const [ totalCommit, setTotalCommit] = useState('');
    const [useINCC, setUseINCC] = useState(false);
    const [useTxJuros, setUseTxJuros] = useState(false);

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
            formattedValue = formattedValue.slice(0,-2) + '.' + formattedValue.slice(-2);
    
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
            value: '0,00', 
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
                    <div className='help_container'>
                      <FaQuestionCircle
                        className='help2'
                        onMouseEnter={() => setHelpVisible9(true)}
                        onMouseLeave={() => setHelpVisible9(false)}
                      />
                      {helpVisible9 && (
                        <div className='help_contain'>
                          Coloque aqui a descrição do bem que será colocado no negócio para ser usado como parte do pagamento.
                          Geralmente veículos ou imóveis.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='bar'>
                    <input
                      type='text'
                      value={section.description}
                      onChange={(e) => handleSectionInput('description', e.target.value, index)}
                    />
                  </div>
                </div>
                <div className='if_main'>
                  <div className='subtitle'>
                    <label>Valor</label>
                    <div className='help_container'>
                      <FaQuestionCircle
                        className='help2'
                        onMouseEnter={() => setHelpVisible10(true)}
                        onMouseLeave={() => setHelpVisible10(false)}
                      />
                      {helpVisible10 && (
                        <div className='help_contain'>
                          Coloque aqui o valor do bem que será colocado no negócio para ser usado como parte do pagamento.
                          Geralmente veículos ou imóveis.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='bar'>
                    <span>R$</span>
                    <input type='text' value={section.value} onChange={handleInputChange('value', index)} />
                  </div>
                </div>
              </div>
            ) : (
              <div className='box_main'>
                <div className='subtitle'>
                  <label>{section.type}</label>
                  {section.type === 'FGTS' ? (
                    <div className='help_container'>
                      <FaQuestionCircle
                        className='help2'
                        onMouseEnter={() => setHelpVisible11(true)}
                        onMouseLeave={() => setHelpVisible11(false)}
                      />
                      {helpVisible11 && (
                        <div className='help_contain'>
                          Fundo de Garantia do Tempo de Serviço, é um programa governamental no Brasil
                          que funciona como uma espécie de poupança compulsória para os trabalhadores de carteira assinada.
                          O valor contido nesse fundo pode ser utilizado como parte do pagamento do imóvel.
                        </div>
                      )}
                    </div>
                  ) : section.type === 'Subsídio' ? (
                    <div className='help_container'>
                      <FaQuestionCircle
                        className='help2'
                        onMouseEnter={() => setHelpVisible12(true)}
                        onMouseLeave={() => setHelpVisible12(false)}
                      />
                      {helpVisible12 && (
                        <div className='help_contain'>
                          Subsídio é um valor concedido pelo governo ou outras instituições para ajudar os compradores de imóveis
                          a reduzir o custo total da aquisição. É uma forma de apoio financeiro para tornar a compra de uma casa mais acessível.
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className='help_container'>
                      <FaQuestionCircle
                        className='help2'
                        onMouseEnter={() => setHelpVisible13(true)}
                        onMouseLeave={() => setHelpVisible13(false)}
                      />
                      {helpVisible13 && (
                        <div className='help_contain'>
                          Balões são parcelas colocadas a mais em negociações, 
                          normalmente para diminuir o valor das parcelas mensais da entrada parcelada direto com a construtora.
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className='bar'>
                  <span>R$</span>
                  <input type='text' value={section.value} onChange={handleInputChange('value', index)} />
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
        if (number === '') {
            return 0;
        }
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
        let allotCommit = 0;
    
        let juros = parseNumber(input.txJuros) / 10000;
        let entry = parseNumber(input.parcelaEntrada) / 100;
        let month = input.month;
        let INCC = parseNumber(input.INCC) / 10000;
        
        let allot = entry / month

        let potencia = Math.pow(1 + juros, month)
        totalAllot = entry * (juros * potencia) / (potencia - 1);
        
        let totalAllotINCC = (entry + entry * INCC) / month;

        let allotINCC = totalAllotINCC - allot
        let totalINCCJures = totalAllot + allotINCC
        
        if (useINCC === true && useTxJuros === true){
            allotCommit = totalINCCJures;
            const formattedAllot = totalINCCJures.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            setTotalAllotment(formattedAllot);
        } 
        else if (useINCC === false && useTxJuros === true) {
            allotCommit = totalAllot;
            const formattedAllot = totalAllot.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            setTotalAllotment(formattedAllot);
        } 
        else if (useINCC === false && useTxJuros === false) {
            allotCommit = allot;
            const formattedAllot = allot.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            setTotalAllotment(formattedAllot);
        } 
        else {
            allotCommit = totalAllotINCC;
            const formattedAllot = totalAllotINCC.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            setTotalAllotment(formattedAllot);
        };

        //Commitment Finance

        let totalCommit = 0

        let caixaCommit = parseNumber(input.prestCaixa) / 100;
        let financeCommit = parseNumber(input.rendaCliente) /100;
        

        totalCommit = financeCommit - (caixaCommit + allotCommit)
        let totalFinanceCommit = -(totalCommit * 100) / financeCommit
        totalFinanceCommit += 100
    
        const formattedCommit = totalFinanceCommit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        setTotalCommit(formattedCommit);
    
    };
      


    return(
        <div>
            <>
                <AdsComponent dataAdSlot='8869491768' />
            </>
            <Header/>
            <main>
                <>
                    <AdsComponent dataAdSlot='4880229575'/>
                </>
                <h1>Calculadora Corretor</h1>
                <form className='form1'>
                    <section className='intro'>
                        <div className='intro_box'>
                            <div className='title'>
                                <label>Renda do cliente</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help' 
                                        onMouseEnter={() => setHelpVisible(true)} 
                                        onMouseLeave={() => setHelpVisible(false)}
                                    />
                                    {helpVisible && (
                                    <div className='help_contain'>
                                        Valor de renda comprovável do cliente, seja através de imposto de renda, contra-cheque ou movimentação bancária.
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.rendaCliente} onChange={handleInputChangeInitial('rendaCliente')} />
                            </div>
                        </div>
                        <div className='intro_box'>
                        <div className='title'>
                                <label>Valor do imóvel</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help' 
                                        onMouseEnter={() => setHelpVisible1(true)} 
                                        onMouseLeave={() => setHelpVisible1(false)}
                                    />
                                    {helpVisible1 && (
                                    <div className='help_contain'>
                                        Valor total do imóvel.
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.valorImovel} onChange={handleInputChangeInitial('valorImovel')}/>
                            </div>
                        </div>
                    </section>
                    <section className='ent_value'>
                        <div className='ent_main'>
                            <div className='subtitle'>
                                <label>Sinal</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible2(true)} 
                                        onMouseLeave={() => setHelpVisible2(false)}
                                    />
                                    {helpVisible2 && (
                                    <div className='help_contain'>
                                        Valor pago no ato da assinatura do contrato entre cliente e construtora.
                                    </div>
                                    )}
                                </div>
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
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible3(true)} 
                                        onMouseLeave={() => setHelpVisible3(false)}
                                    />
                                    {helpVisible3 && (
                                    <div className='help_contain'>
                                        Montante total da entrada a ser parcelada direto pela construtora.
                                    </div>
                                    )}
                                </div>
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
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2'
                                        onMouseEnter={() => setHelpVisible4(true)} 
                                        onMouseLeave={() => setHelpVisible4(false)}
                                     />
                                    {helpVisible4 && (
                                    <div className='help_contain'>
                                        Índice Nacional de Custo da Construção, 
                                        é um indicador econômico utilizado no Brasil para medir a variação dos custos da construção civil.
                                    </div>
                                    )}
                                </div>
                                <input className='check' type='checkbox' checked={useINCC} onChange={() => setUseINCC(!useINCC)} />
                            </div>
                            <div className={`jbar ${useINCC ? '' : 'input-disabled'}`}>
                                <input type="text" value={input.INCC} disabled={!useINCC}/>
                                <span>%</span>
                                </div>
                            </div>
                        <div className='prest_contain'>
                            <div className='subtitle'>
                                <label>Tx.Juros</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2'
                                        onMouseEnter={() => setHelpVisible5(true)} 
                                        onMouseLeave={() => setHelpVisible5(false)}
                                    />
                                    {helpVisible5 && (
                                    <div className='help_contain'>
                                        O método de cálculo de juros utilizado nessa calculadora é o da tabela price. 
                                        Aqui você deve considerar a taxa de juros ao mês. 
                                        Esse valor é definido pelas condições comerciais da construtora.
                                    </div>
                                    )}
                                </div>
                                <input className='check' type='checkbox' checked={useTxJuros} onChange={() => setUseTxJuros(!useTxJuros)} />
                            </div>
                            <div className={`jbar ${useTxJuros ? '' : 'input-disabled'}`}>
                                <input type="text" value={input.txJuros} disabled={!useTxJuros} onChange={handleInputChangeInitial('txJuros')} />
                                <span>%</span>
                            </div>
                        </div>
                        <div className='prest_contain'>
                            <div className='subtitle'>
                                <label>Meses</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible6(true)} 
                                        onMouseLeave={() => setHelpVisible6(false)}
                                    />
                                    {helpVisible6 && (
                                    <div className='help_contain'>
                                        Quantidade de parcelas da entrada.
                                    </div>
                                    )}
                                </div>
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
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible7(true)} 
                                        onMouseLeave={() => setHelpVisible7(false)}
                                    />
                                    {helpVisible7 && (
                                    <div className='help_contain'>
                                        O valor de financiamento liberado deve ser calculado usando o simulador da caixa econômica federal, 
                                        ou através de uma aprovação junto a um correspondente bancário da Caixa Econômica Federal.
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className='bar'>
                                <span>R$</span>
                                <input type="text" value={input.financiamento} onChange={handleInputChangeInitial('financiamento')} />
                            </div>
                        </div>
                        <div className='bank_contain'>
                            <div className='subtitle'>
                                <label>Prestação Caixa</label>
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible8(true)} 
                                        onMouseLeave={() => setHelpVisible8(false)}
                                    />
                                    {helpVisible8 && (
                                    <div className='help_contain'>
                                        O valor de financiamento liberado deve ser calculado usando o simulador da caixa econômica federal, 
                                        ou através de uma aprovação junto a um correspondente bancário da Caixa Econômica Federal.
                                    </div>
                                    )}
                                </div>
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
                                <div className='help_container'>
                                    <FaQuestionCircle 
                                        className='help2' 
                                        onMouseEnter={() => setHelpVisible14(true)} 
                                        onMouseLeave={() => setHelpVisible14(false)}
                                    />
                                    {helpVisible14 && (
                                    <div className='help_contain'>
                                        Valor de todas as partes do pagamento somadas: 
                                        Financiamento, Montande da Entrada Parcelada, Ato, FGTS, Subsídio, Permutas e Balões.
                                    </div>
                                    )}
                                </div>
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
                                    <div className='help_container'>
                                        <FaQuestionCircle 
                                            className='help2' 
                                            onMouseEnter={() => setHelpVisible15(true)} 
                                            onMouseLeave={() => setHelpVisible15(false)}
                                        />
                                        {helpVisible15 && (
                                        <div className='help_contain'>
                                            Valor da parcela mensal a partir dos juros e/ou correção INCC.
                                        </div>
                                        )}
                                    </div>
                                </div>
                                <div className='bar'>
                                    <span>R$</span>
                                    <input type='text' value={totalAllotment}></input>
                                </div>
                            </div>
                            <div className='allot_result'>
                                <div className='subtitle'>
                                    <label>Comprometimento</label>
                                    <div className='help_container'>
                                        <FaQuestionCircle 
                                            className='help2' 
                                            onMouseEnter={() => setHelpVisible16(true)} 
                                            onMouseLeave={() => setHelpVisible16(false)}
                                        />
                                        {helpVisible16 && (
                                        <div className='help_contain'>
                                            Porcentagem do comprometimento de renda do cliente, considerando quantos % da renda do cliente, 
                                            a parcela do financiamento caixa e a parcela da entrada parcelada somadas representam.
                                        </div>
                                        )}
                                    </div>
                                </div>
                                <div className='jbar'>
                                    <input type='text' value={totalCommit}></input>
                                    <span>%</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <>
                    <AdsComponent dataAdSlot='4880229575'/>
                </>
            </main>
            <>
                <AdsComponent dataAdSlot='8869491768' />
            </>
        </div>
    )
}

export default Home;