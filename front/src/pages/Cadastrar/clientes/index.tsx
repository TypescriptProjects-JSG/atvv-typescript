import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import '../styles.css'
import React, { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';

function CadastrarClientes() {
    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [data_rg, setDataRg] = useState('');
    const [telefone, setTelefone] = useState('');

    const [formRgs, setFormRgs] = useState([{ }])
    
    let addFormRg = () => {
        setFormRgs([...formRgs, { }])
        mandaRgs()
    }
    function mandaRgs() {
        Axios.post("http://localhost:3001/cadastro/cliente/rgs", {
          dado: [rg, data_rg]
        }).then((res)=>{
          console.log(res)
        })    
    }

    const [formTelefones, setFormTelefones] = useState([{ }])
  
    let addFormTell = () => {
        setFormTelefones([...formTelefones, { }])
        mandaTelefone()
    }
    function mandaTelefone() {
        Axios.post("http://localhost:3001/cadastro/cliente/telefones", {
          dado: telefone
        }).then((res)=>{
          console.log(res)
        })    
    }

    let clearAreas = () => {
        setNome('')
        setNomeSocial('')
        setGenero('')
        setCpf('')
        setRg('')
        setDataRg('')
        setTelefone('')
      }
    function handleSubmit() {
        toast.success('Cadastrado feito com sucesso!');
        mandaRgs()
        mandaTelefone()
    
        Axios.post("http://localhost:3001/cadastro/cliente", {
          nome: nome,
          nome_social: nome_social,
          genero: genero,
          cpf: cpf
        }).then((res)=>{
          console.log(res)
          clearAreas()
        })    
    }

    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='margin-titulo'><strong>Cadastro de Clientes</strong></h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input placeholder='Insira o nome completo' type="text" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input placeholder='Insira o nome social' type="text" onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Gênero:</label>
                                <input type="text" onChange={(e) => setGenero(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>CPF:</label>
                                <input type="text" placeholder='XXX.XXX.XXX-XX' onChange={(e) => setCpf(e.target.value)}/>
                            </div>
                        </div>
                        {formTelefones.map((e, index) => (
                            <div className="field">
                                <label>Telefone:</label>
                                <input placeholder='XX XXXXXXXX' type="text" onChange={(e) => setTelefone(e.target.value)}/>
                            </div>
                        ))}
                        {formRgs.map(() => (
                            <><div className="field">
                                <label>RG:</label>
                                <input type="text" placeholder='XX.XXX.XXX-X' onChange={(e) => setRg(e.target.value)} />
                            </div><div className="field">
                                    <label>RG data de emissao:</label>
                                    <input type="date" onChange={(e) => setDataRg(e.target.value)} />
                                </div></>
                        ))}
                        <div className="btns">
                                <Button className="add add-color" variant="outline-dark" type="button" onClick={() => addFormTell()}>Adicionar Telefone</Button>
                                <Button className="add add-color" variant="outline-dark" type="button" onClick={() => addFormRg()}>Adicionar RG</Button>
                                <Button className="add add-green" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                        </div>
                        
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarClientes;