 import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import React, { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';

function CadastrarProdutos() {
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');

    let clearAreas = () => {
        setProduto('')
        setPreco('')
      }
    function handleSubmit() {
        toast.success('Cadastrado feito com sucesso!');
    
        Axios.post("http://localhost:3001/cadastro/produto", {
          produto: produto,
          preco: preco
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
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Produto:</label>
                            <input type="text" onChange={(e) => setProduto(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Preço:</label>
                            <input type="number" onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarProdutos;