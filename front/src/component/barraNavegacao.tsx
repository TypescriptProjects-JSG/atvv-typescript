import './style.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Navbar_() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar className='nav' variant="light" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand onClick={() => navigate("/")} className="logo"><strong>W B </strong> </Navbar.Brand>
                    </div>
                    <ul className="nav-links">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Ver" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/clientes")}>Clientes</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/produtos")}>Produtos</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/servicos")}>Serviços</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar_cliente")}>Cliente</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar_produto")}>Produto</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar_servico")}>Serviço</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Listagens" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/consumo_consumidor")}>Mais compraram</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/consumo_genero")}>Clientes por gênero</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/consumo_psmaisconsumido")}>Mais consumidos</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/genero_consumidor")}>Mais consumidos por gênero</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/consumo_menor")}>Menos consumiram</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/consumo_valor")}>Mais gastaram</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </ul>
                </Container>
            </Navbar>
        </>
    );
}
export default Navbar_;