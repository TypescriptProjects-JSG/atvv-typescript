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
        setFormRgs([...formRgs, { rg: rg, data_rg: data_rg }])
    }
  
    let removeFormRg = () => {
      let newFormValue = [...formRgs];
      setRg('')
      setDataRg('')
      newFormValue.splice(-1);
      setFormRgs(newFormValue)
    }

    const [formTelefones, setFormTelefones] = useState([{ }])
  
    let addFormTell = () => {
        setFormTelefones([...formTelefones, { telefone: telefone}])
    }
  
    let removeFormTell = () => {
      let newFormValue = [...formTelefones];
      setTelefone('')
      formTelefones.splice(-1);
      setFormRgs(formTelefones)
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
        addFormRg()
        addFormTell()
    
        Axios.post("http://localhost:3001/cadastro/cliente", {
          nome: nome,
          nome_social: nome_social,
          genero: genero,
          cpf: cpf,
          Rgs: formRgs,
          telefone: formTelefones
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
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Gênero:</label>
                            <input type="text" onChange={(e) => setGenero(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>CPF:</label>
                            <input type="text" placeholder='XXX.XXX.XXX-XX' onChange={(e) => setCpf(e.target.value)}/>
                        </div>
                        {formRgs.map((e, index) => (
                            <div className="field">
                                <label>RG:</label>
                                <input type="text" placeholder='XX.XXX.XXX-X' onChange={(e) => setRg(e.target.value)}/>
                                <br/>
                                <label>RG data de emissao:</label>
                                <input type="date" onChange={(e) => setDataRg(e.target.value)}/>
                            </div>
                        ))}
                        <button type="button" className='del' onClick={() => removeFormRg()}>Deletar</button>
                        <button className="add" type="button" onClick={() => addFormRg()}>Adicionar RG</button>
                        {formTelefones.map((e, index) => (
                            <div className="field">
                                <label>Telefone:</label>
                                <input placeholder='XX XXXXXXXX' type="text" onChange={(e) => setTelefone(e.target.value)}/>
                            </div>
                        ))}
                        <button type="button" className='del' onClick={() => removeFormTell()}>Deletar</button>
                        <button className="add" type="button" onClick={() => addFormTell()}>Adicionar Telefone</button>
                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarClientes;