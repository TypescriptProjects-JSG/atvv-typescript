import Axios from "axios";
import { useState, useEffect } from "react";

function Listagem(){
    const [clientes, setClientes] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [relacaoP, setRelacaoP] = useState([]);
    const [relacaoS, setRelacaoS] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setClientes(resp.data);
      });
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:3001/ver/produtos`).then((resp) => {
            setProdutos(resp.data);
    });
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:3001/ver/servicos`).then((resp) => {
            setServicos(resp.data);
    });
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:3001/relacao/servicos`).then((resp) => {
            setRelacaoS(resp.data);
    });
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:3001/relacao/produtos`).then((resp) => {
            setRelacaoP(resp.data);
    });
    }, [])

    return [clientes,produtos,servicos,relacaoP,relacaoS]
}

export default Listagem;