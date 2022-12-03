import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import { useParams } from 'react-router-dom'
import '../../../Cadastrar/styles.css'
import Axios from "axios";
import { useState, useEffect } from "react";

function EditarServico() {
    const navigate = useNavigate()
    var { id } = useParams();
    const [servico, setServico] = useState('');
    const [preco, setPreco] = useState('');

    let clearAreas = () => {
        setServico('')
        setPreco('')
      }
    function handleSubmit() {    
        Axios.post("http://localhost:3001/editar", {
            id: id,
            item: servico,
            preco: preco,
            tabela: 'servico'
        }).then((res)=>{
          console.log(res)
          clearAreas()
        })    
    }
    const [list, setList] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/servicos`).then((resp) => {
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
                <h1><strong>Editar Serviço:</strong> Massagem</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome do Serviço: </label>
                            <input type="text" placeholder={Nome[1]} onChange={(e) => setServico(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Valor R$:</label>
                            <input type="number" placeholder={Nome[2]} onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <div className="campo-button campo-btns">
                            <div className="button-l">
                                <Button className="submit btn-resp" variant="outline-dark" onClick={() => navigate("/servicos")}>Voltar</Button>{' '}
                            </div>
                            <div>
                            <Button className="submit btn-resp" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Editar</Button>{' '}
                            </div>
                        </div>
                    </form>
                </div>
            </main>

        </section>
    )
};

export default EditarServico;