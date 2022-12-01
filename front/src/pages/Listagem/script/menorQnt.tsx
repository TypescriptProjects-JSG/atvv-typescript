import Listagem from "./listagens";

function menorQta(){
    var dados = Listagem()
    var clientes = dados[0]
    var relacaoP = dados[3]
    var relacaoS = dados[4]

    var consumidos = new Array;
    for(var k=0; clientes.length > k; ++k){
        var cliente = clientes[k]
        var produto = 0
        for(var p=0; relacaoP.length>p; ++p){
            if(relacaoP[p][1] == cliente[0]){
                produto += relacaoP[p][2]
            }
        }
        var servico = 0
        for(var p=0; relacaoS.length>p; ++p){
            if(relacaoS[p][1] == cliente[0]){
                servico += relacaoS[p][2]
            }
        }

        consumidos.push([cliente[0],cliente[1],produto,servico,(produto+servico)])
    }
    
    consumidos = consumidos.sort((a,b) => a[4] - b[4]);
    consumidos.splice(10,)


    return consumidos
}

export default menorQta;