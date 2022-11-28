import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import { useParams } from 'react-router-dom'
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
                <h1>Editar Serviço: {Nome[1]}</h1>
                <Button className="submit" variant="outline-dark" onClick={() => navigate(-1)}>Voltar</Button>{' '}
                <form>
                    <div className="field">
                        <label>Serviço:</label>
                        <input type="text" placeholder={Nome[1]} onChange={(e) => setServico(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Preço:</label>
                        <input type="number" placeholder={Nome[2]} onChange={(e) => setPreco(e.target.value)}/>
                    </div>
                    <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                </form>
            </main>

        </section>
    )
};

export default EditarServico;