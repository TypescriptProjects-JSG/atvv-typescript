import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import genero from '../script/genero';

function Consumos() {
    const dados = genero()
    const masc = dados[0]
    const femi = dados[1]
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className="tables">
                    <h1>Masculino</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        {typeof masc !== 'undefined' && masc.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[1]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                    <h1>Feminino</h1>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        {typeof femi !== 'undefined' && femi.map((value) => {
                            return value ?
                        <tbody>
                            <tr>
                                <td> {value[1]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Consumos;