import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
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
          rg: rg,
          data_rg: data_rg,
          telefone: telefone,
          id: id
        }).then((res)=>{
          console.log(res)
          clearAreas()
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
    
    
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1>Editar Cliente: {Nome[1]}</h1>
                <Button className="submit" variant="outline-dark" onClick={() => navigate(-1)}>Voltar</Button>{' '}
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
                        <div className="field">
                            <label>Gênero:</label>
                            <input type="text" placeholder={Nome[3]} onChange={(e) => setGenero(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>CPF:</label>
                            <input type="text" placeholder={Nome[4]} onChange={(e) => setCpf(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>RG:</label>
                            <input type="text" placeholder={Nome[5]} onChange={(e) => setRg(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>RG data de emissao:</label>
                            <input type="date" onChange={(e) => setDataRg(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Telefone:</label>
                            <input placeholder={Nome[7]} type="text" onChange={(e) => setTelefone(e.target.value)}/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default EditarCliente;