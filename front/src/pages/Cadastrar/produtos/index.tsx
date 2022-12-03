 import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import React, { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';

function CadastrarProdutos() {
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');

    function handleSubmit() {
        toast.success('Cadastrado feito com sucesso!');
    
        Axios.post("http://localhost:3001/cadastro/produto", {
          produto: produto,
          preco: preco
        }).then((res)=>{
          console.log(res)
        })    
    }
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='cadastro-titulo'> <strong>Cadastro de Produtos</strong></h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome do produto:</label>
                            <input placeholder='Insira o nome do produto'  type="text" onChange={(e) => setProduto(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Valor R$</label>
                            <input placeholder='XX' type="number" min={0} onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarProdutos;