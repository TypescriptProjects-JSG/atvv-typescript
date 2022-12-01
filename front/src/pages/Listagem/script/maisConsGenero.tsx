import genero from "./genero";
import Listagem from "./listagens";

function maisConsGenero(){
    var dados = Listagem()
    var produtos = dados[1]
    var relacaoP = dados[3]
    var servicos = dados[2]
    var relacaoS = dados[4]
    var pess = genero()
    var masculino = pess[0]
    var feminino = pess[1]

    var relacaoPmasculino = new Array;
    for(var k=0; relacaoP.length>k; ++k){
        for(var w=0; masculino.length>w; ++w){
            if(relacaoP[k][1] == masculino[w][0]){
                relacaoPmasculino.push(relacaoP[k])
            }
        }
    }    
    var listaPmasculino = new Array;
    for(var k=0; produtos.length>k; ++k){
        var quantidade = 0
        for(var w=0; relacaoPmasculino.length>w; ++w){
            if(produtos[k][0] == relacaoPmasculino[w][0]){
                quantidade += relacaoPmasculino[w][2]
            }
        }
        listaPmasculino.push([produtos[k][1], quantidade])
    }
    listaPmasculino = listaPmasculino.sort((a,b) => b[1] - a[1]);



    var relacaoPfeminino = new Array;
    for(var k=0; relacaoP.length>k; ++k){
        for(var w=0; feminino.length>w; ++w){
            if(relacaoP[k][1] == feminino[w][0]){
                relacaoPfeminino.push(relacaoP[k])
            }
        }
    }    
    var listaPfeminino = new Array;
    for(var k=0; produtos.length>k; ++k){
        var quantidade = 0
        for(var w=0; relacaoPfeminino.length>w; ++w){
            if(produtos[k][0] == relacaoPfeminino[w][0]){
                quantidade += relacaoPfeminino[w][2]
            }
        }
        listaPfeminino.push([produtos[k][1], quantidade])
    }
    listaPfeminino = listaPfeminino.sort((a,b) => b[1] - a[1]);




    var relacaoSmasculino = new Array;
    for(var k=0; relacaoS.length>k; ++k){
        for(var w=0; masculino.length>w; ++w){
            if(relacaoS[k][1] == masculino[w][0]){
                relacaoSmasculino.push(relacaoS[k])
            }
        }
    }    
    var listaSmasculino = new Array;
    for(var k=0; servicos.length>k; ++k){
        var quantidade = 0
        for(var w=0; relacaoSmasculino.length>w; ++w){
            if(servicos[k][0] == relacaoSmasculino[w][0]){
                quantidade += relacaoSmasculino[w][2]
            }
        }
        listaSmasculino.push([servicos[k][1], quantidade])
    }
    listaSmasculino = listaSmasculino.sort((a,b) => b[1] - a[1]);


    var relacaoSfeminino = new Array;
    for(var k=0; relacaoS.length>k; ++k){
        for(var w=0; feminino.length>w; ++w){
            if(relacaoS[k][1] == feminino[w][0]){
                relacaoSfeminino.push(relacaoS[k])
            }
        }
    }    
    var listaSfeminino = new Array;
    for(var k=0; servicos.length>k; ++k){
        var quantidade = 0
        for(var w=0; relacaoSfeminino.length>w; ++w){
            if(servicos[k][0] == relacaoSfeminino[w][0]){
                quantidade += relacaoSfeminino[w][2]
            }
        }
        listaSfeminino.push([servicos[k][1], quantidade])
    }
    listaSfeminino = listaSfeminino.sort((a,b) => b[1] - a[1]);

    var Pfeminino = new Array;
    for(var k=0; listaPfeminino.length>k; ++k){
        if(listaPfeminino[k][1] != 0){
            Pfeminino.push(listaPfeminino[k])
        }
    }
    var Sfeminino = new Array;
    for(var k=0; listaSfeminino.length>k; ++k){
        if(listaSfeminino[k][1] != 0){
            Sfeminino.push(listaSfeminino[k])
        }
    }
    var Pmasculino = new Array;
    for(var k=0; listaPmasculino.length>k; ++k){
        if(listaPmasculino[k][1] != 0){
            Pmasculino.push(listaPmasculino[k])
        }
    }
    var Smasculino = new Array;
    for(var k=0; listaSmasculino.length>k; ++k){
        if(listaSmasculino[k][1] != 0){
            Smasculino.push(listaSmasculino[k])
        }
    }



    return [[Pfeminino,Pmasculino],[Sfeminino,Smasculino]]
}

export default maisConsGenero;