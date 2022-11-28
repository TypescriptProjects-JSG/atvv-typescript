import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';

function CadastrarServicos() {
    const [servico, setServico] = useState('');
    const [preco, setPreco] = useState('');

    let clearAreas = () => {
        setServico(''),
        setPreco('')
      }
    function handleSubmit() {
        toast.success('Cadastrado feito com sucesso!');
    
        Axios.post("http://localhost:3001/cadastro/servico", {
          servico: servico,
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
                <h1>Cadastrar Serviços</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Serviço:</label>
                            <input type="text" onChange={(e) => setServico(e.target.value)}/>
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

export default CadastrarServicos;