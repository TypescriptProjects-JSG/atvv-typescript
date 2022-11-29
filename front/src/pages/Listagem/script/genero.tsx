import Listagem from "./listagens";

function genero(){
    var dados = Listagem()
    var clientes = dados[0]
    var masculino = new Array;
    var feminino = new Array;
    for(var k=0; clientes.length > k; ++k){
        if(clientes[k][3] == 'Feminino'){
            feminino.push(clientes[k])
        }else{
            masculino.push(clientes[k])
        }
    }
    return [masculino,feminino]
}

export default genero;