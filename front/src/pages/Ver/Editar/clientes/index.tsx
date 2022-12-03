import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../../Cadastrar/styles.css'
import { useParams } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";

function EditarCliente() {
    const navigate = useNavigate();
    var { id } = useParams();
    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [data_rg, setDataRg] = useState('');
    const [telefone, setTelefone] = useState('');

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
        Axios.post("http://localhost:3001/editar/cliente", {
          nome: nome,
          nome_social: nome_social,
          genero: genero,
          cpf: cpf,
          id: id
        }).then((res)=>{
          console.log(res)
          clearAreas()
        })    
    }
    
    function excluir(numero: number,tipo: string) {     
        Axios.post("http://localhost:3001/deletar", {
          id: numero,
          tabela: tipo
        }).then((res)=>{
          console.log(res)
        })    
    }

    const [list, setList] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    var Nome = new String
    for(let k=0; list.length > k; ++k){
        var pessoa = list[k]
        if(pessoa[0] == id){
            Nome = pessoa
            break 
        }  
    }

    const [rgs, setRgs] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes/rgs`).then((resp) => {
        setRgs(resp.data);
      });
    }, [])

    var Rg = new Array;
    for(let k=0; rgs.length > k; ++k){
        var RG = rgs[k]
        if(RG[1] == id){
            Rg.push(RG)
        }  
    }   
    
    const [telefones, setTelefones] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes/telefones`).then((resp) => {
        setTelefones(resp.data);
      });
    }, [])

    var Tell = new Array;
    for(let k=0; telefones.length > k; ++k){
        var tell = telefones[k]
        if(tell[1] == id){
            Tell.push(tell)
        }  
    }      
    
    
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1><strong>Editar Cliente:</strong> {Nome[1]}</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" placeholder={Nome[1]} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" placeholder={Nome[2]} onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Gênero:</label>
                                <input type="text" placeholder={Nome[3]} onChange={(e) => setGenero(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>CPF:</label>
                                <input type="text" placeholder={Nome[4]} onChange={(e) => setCpf(e.target.value)}/>
                            </div>
                        </div>
                        {typeof Tell !== 'undefined' && Tell.map((value) => {
                            return value ?
                            <div className="field">
                                <label>Telefone:</label>
                                <input placeholder={value[2]} type="text" onChange={(e) => setTelefone(e.target.value)}/>
                                <a className="remove" href={`/editar_cliente/${id}`} type='submit' onClick={() => excluir(value[0],'telefone')}>Remover</a>
                            </div>
                        :null})}
                        {typeof Rg !== 'undefined' && Rg.map((value) => {
                            return value ?
                            <><div className="field">
                                    <label>RG:</label>
                                    <input type="text" placeholder={value[2]} onChange={(e) => setRg(e.target.value)} />
                                </div><div className="field">
                                        <label>RG data de emissao:</label>
                                        <input type="date" placeholder={value[3]} onChange={(e) => setDataRg(e.target.value)} />
                                        <a className="remove" href={`/editar_cliente/${id}`} type='submit' onClick={() => excluir(value[0], 'rg')}>Remover</a>
                                    </div></>
                        :null})}
                        
                        <div className="campo-button campo-btns">
                            <div className="button-l">
                            <Button className="submit" variant="outline-dark" onClick={() => navigate("/clientes")}>Voltar</Button>{' '}
                            </div>
                            <Button className="submit btn-resp"  variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default EditarCliente;