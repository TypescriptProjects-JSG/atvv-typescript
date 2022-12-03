import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import maisConsGenero from '../script/maisConsGenero';

function Consumos() {
    var dados = maisConsGenero();
    var produtos = dados[0]
    var femininoP = produtos[0]
    var masculinoP = produtos[1]
    var servicos = dados[1]
    var femininoS = servicos[0]
    var masculinoS = servicos[1]
    
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='titles'><strong>Produtos mais consumidos por gênero</strong></h1>
                <h3 className='titles'><strong>Feminino</strong></h3>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Produto mais consumido</th>
                                <th>Quantidade consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {typeof femininoP !== 'undefined' && femininoP.map((value) => {
                                return value ?
                                <tr>
                                    <td> {value[0]} </td>
                                    <td> {value[1]} </td>
                                </tr>
                            :null})}
                            
                        </tbody>
                    </Table>
                </div>
                <h3 className='titles'><strong>Masculino</strong></h3>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Produto mais consumido</th>
                                <th>Quantidade consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {typeof masculinoP !== 'undefined' && masculinoP.map((value) => {
                                return value ?
                                <tr>
                                    <td> {value[0]} </td>
                                    <td> {value[1]} </td>
                                </tr>
                            :null})}
                            
                        </tbody>
                    </Table>
                </div>
                <h1 className='titles'> <strong> Serviços mais consumidos </strong></h1>
                <h3 className='titles'><strong>Feminino</strong></h3>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Serviço mais consumido</th>
                                <th>Quantidade consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {typeof femininoS !== 'undefined' && femininoS.map((value) => {
                                return value ?
                                <tr>
                                    <td> {value[0]} </td>
                                    <td> {value[1]} </td>
                                </tr>
                            :null})}
                            
                        </tbody>
                    </Table>
                </div>
                <h3 className='titles'><strong>Masculino</strong></h3>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Serviço mais consumido</th>
                                <th>Quantidade consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {typeof masculinoS !== 'undefined' && masculinoS.map((value) => {
                                return value ?
                                <tr>
                                    <td> {value[0]} </td>
                                    <td> {value[1]} </td>
                                </tr>
                            :null})}
                            
                        </tbody>
                    </Table>
                </div>
            </main>
        </section >
    );
}

export default Consumos;