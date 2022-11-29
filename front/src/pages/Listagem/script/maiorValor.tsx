import Listagem from "./listagens";

function maisValor(){
    var dados = Listagem()
    var clientes = dados[0]
    var produtos = dados[1]
    var servicos = dados[2]
    var relacaoP = dados[3]
    var relacaoS = dados[4]


    var consumidos = new Array;
    for(var k=0; clientes.length > k; ++k){
        var cliente = clientes[k]
        var produto = 0

        for(var p=0; relacaoP.length>p; ++p){
            if(relacaoP[p][1] == cliente[0]){
    
                for(var w=0; produtos.length > w; ++w){
                    if(produtos[w][0] == relacaoP[p][0]){
                        var valor = produtos[w][2]
                        produto += valor * relacaoP[p][2]
                    }
                }
            }
        }

        var servico = 0
        for(var p=0; relacaoS.length>p; ++p){
            if(relacaoS[p][1] == cliente[0]){

                for(var w=0; servicos.length > w; ++w){
                    if(servicos[w][0] == relacaoS[p][0]){
                        var valor = servicos[w][2]
                        servico += valor * relacaoS[p][2]
                    }
                }
            }
        }

        consumidos.push([cliente[0],cliente[1],produto,servico,(produto+servico)])
    }
    
    return consumidos
}

export default maisValor;