import Listagem from "./listagens";

function maisQta(){
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

    var listaTotal = new Array;
    for(var k=0; consumidos.length>k; ++k){
        listaTotal.push(consumidos[k][4])
    }

    listaTotal = listaTotal.sort(function(a,b){
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });

    var final = new Array;
    for(var w=0; consumidos.length>w; ++w){
        for(var k=listaTotal.length-1; k>=0; --k){
            if(listaTotal[k] == consumidos[w][4]){
                console.log(consumidos[w]);
                
            }
        }
    }
    
    return consumidos
}

export default maisQta;