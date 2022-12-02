import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import genero from '../script/genero';
import '../styles.css'

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
                    <h1 className='titles'> <strong>Clientes: sexo masculino</strong> </h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        {typeof masc !== 'undefined' && masc.map((value) => {
                            return value ?
                        <tbody className='body-table'>
                            <tr>
                                <td> {value[1]} </td>
                            </tr>
                        </tbody>
                        :null})}
                    </Table>
                    <h1 className='titles'> <strong>Sexo feminino</strong></h1>
                    <Table striped bordered hover variant="light">
                        <thead className='titles-table'>
                            <tr>
                                <th>Nome: </th>
                            </tr>
                        </thead>
                        {typeof femi !== 'undefined' && femi.map((value) => {
                            return value ?
                        <tbody className='body-table'>
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