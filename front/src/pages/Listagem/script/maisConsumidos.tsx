import Listagem from "./listagens";

function maisConsiumidos(){
    var dados = Listagem()
    var produtos = dados[1]
    var servicos = dados[2]
    var relacaoP = dados[3]
    var relacaoS = dados[4]

    var listaProd = new Array; 
    for(var k=0; produtos.length > k; ++k){
        var quantia = 0
        for(var w=0; relacaoP.length > w; ++w){
            if(produtos[k][0] == relacaoP[w][0]){
                quantia += relacaoP[w][2]
            }
        }
        listaProd.push([produtos[k][1], quantia])
    }

    var listaServ = new Array; 
    for(var k=0; servicos.length > k; ++k){
        var quantia = 0
        for(var w=0; relacaoS.length > w; ++w){
            if(servicos[k][0] == relacaoS[w][0]){
                quantia += relacaoS[w][2]
            }
        }
        listaServ.push([servicos[k][1], quantia])
    }

    listaProd = listaProd.sort((a,b) => b[1] - a[1]);
    listaServ = listaServ.sort((a,b) => b[1] - a[1]);

    var ser = new Array;
    for(var k=0; listaServ.length>k; ++k){
        if(listaServ[k][1] != 0){
            ser.push(listaServ[k])
        }
    }
    var pro = new Array;
    for(var k=0; listaProd.length>k; ++k){
        if(listaProd[k][1] != 0){
            pro.push(listaProd[k])
        }
    }

    return [pro, ser]
}

export default maisConsiumidos;