import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import { useParams } from 'react-router-dom'
import '../../../Cadastrar/styles.css'
import Axios from "axios";
import { useState, useEffect } from "react";

function EditarProduto() {
    const navigate = useNavigate()
    var { id } = useParams();
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');

    let clearAreas = () => {
        setProduto('')
        setPreco('')
      }
    function handleSubmit() {    
        Axios.post("http://localhost:3001/editar", {
            id: id,
            item: produto,
            preco: preco,
            tabela: 'produto'
        }).then((res)=>{
          console.log(res)
          clearAreas()
        })    
    }
    const [list, setList] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/produtos`).then((resp) => {
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
                <h1><strong>Editar Produto:</strong> {Nome[1]}</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome do Produto:</label>
                            <input type="text" placeholder={Nome[1]} onChange={(e) => setProduto(e.target.value)}/>
                        </div>
                        <div className="field">
                        <label>Valor R$:</label>
                            <input type="number" placeholder={Nome[2]} onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <div className="campo-button campo-btns">
                            <div className="button-l">
                                <Button className="submit" variant="outline-dark" onClick={() => navigate("/produtos")}>Voltar</Button>{' '}
                            </div>
                            <Button className="submit btn-resp" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Editar</Button>{' '}
                        </div>
                    </form>
                </div>
            </main>

        </section>
    )
};

export default EditarProduto;