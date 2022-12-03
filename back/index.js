// conexao com o banco 
async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/wb");
    global.connection = connection;
    return connection;
}
// cadastro no banco
async function cliente(nome,nome_social,genero,cpf,rgs,telefones){
    const con = await connect();
    con.query(`insert into clientes (nome,nome_social,genero,cpf) 
    values('${nome}','${nome_social}','${genero}','${cpf}')`)
    id = await con.query(`select cliente_id from clientes where cpf = '${cpf}';`)
    id =  id[0][0].cliente_id
    for(k=0; rgs.length>k; ++k){
        var rgdado = rgs[k]
        var rg = rgdado[0]
        var data = rgdado[1]
        con.query(`insert into rgs (rg,rg_data,cliente_id) 
        values('   ${rg}','${data}','${id}')`)
    }
    for(k=0; telefones.length>k; ++k){
        con.query(`insert into telefones (telefone,cliente_id) 
        values('   ${telefones[k]}','${id}')`)
    }
}
async function produtoc(produto,preco){
    const con = await connect();
    con.query(`insert into produtos (produto,preco) 
    values('${produto}','${preco}')`)
}
async function servicoc(servico,preco){
    const con = await connect();
    con.query(`insert into servicos (servico,preco) 
    values('${servico}','${preco}')`)
}
// ver
async function clientesc(){
    const con = await connect();
    return [rows] = await con.query(`select * from clientes;`)
}
async function rgsc(){
    const con = await connect();
    return [rows] = await con.query(`select * from rgs;`)
}
async function telefonesc(){
    const con = await connect();
    return [rows] = await con.query(`select * from telefones;`)
}
async function produtosc(){
    const con = await connect();
    return [rows] = await con.query(`select * from produtos;`)
}
async function servicosc(){
    const con = await connect();
    return [rows] = await con.query(`select * from servicos;`)
}
// deletar
async function deletar(id,tabela){
    const con = await connect();
    if(tabela == 'cliente'){
        con.query(`DELETE FROM relacaoprodutos WHERE cliente_id = ${id};`)
        con.query(`DELETE FROM relacaoservicos WHERE cliente_id = ${id};`)
        
    }
    con.query(`DELETE FROM ${tabela}s
    WHERE ${tabela}_id = ${id};`)
}
// editar
async function editarCliente(id,edicao){
    const con = await connect();
    con.query(`update clientes 
    set ${edicao}
    where cliente_id = ${id};`)
}
async function editar(id,edicao,tabela){
    const con = await connect();
    con.query(`update ${tabela}s
    set ${edicao}
    where ${tabela}_id = ${id};`)
}
// adicionar
async function adicionar(item,id,relacao){
    const con = await connect();
    [rows] = await con.query(`select quantidade from relacao${relacao}s 
    where cliente_id = ${id} and ${relacao}_id = ${item};`);
    if(rows.length > 0){
        con.query(`update relacao${relacao}s 
        set quantidade =${rows[0].quantidade + 1}
        where cliente_id = ${id} and ${relacao}_id = ${item};`)
    }
    else{
        con.query(`insert into relacao${relacao}s(cliente_id, ${relacao}_id, quantidade)
        values(${id},${item}, 1);`)
    }
}
// relação
async function relacaoProdutos(){
    const con = await connect();
    return [rows] = await con.query(`select * from relacaoprodutos;`)
}
async function relacaoServicos(){
    const con = await connect();
    return [rows] = await con.query(`select * from relacaoservicos;`)
}


// servidor
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// cadastro
app.post("/cadastro/cliente", (req, res) => {
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { genero } = req.body;
    const { cpf } = req.body;

    cliente(nome,nome_social,genero,cpf,Rgs,Telefones)
    Rgs = new Array;
    Telefones = new Array;
  });

var Rgs = new Array;
app.post("/cadastro/cliente/rgs", (req, res) => {
    const { dado } = req.body;
    Rgs.push(dado)
  });

var Telefones = new Array;
app.post("/cadastro/cliente/telefones", (req, res) => {
    const { dado } = req.body;
    Telefones.push(dado)
  });

app.post("/cadastro/produto", (req, res) => {
    const { produto } = req.body;
    const { preco } = req.body;

    produtoc(produto,preco)
});

app.post("/cadastro/servico", (req, res) => {
    const { servico } = req.body;
    const { preco } = req.body;

    servicoc(servico,preco)
});


// ver
app.get("/ver/clientes", (req, resp) => {
    async function main() {
        clientes = await clientesc()
        clientes = clientes[0]
        rgs = await rgsc()
        rgs = rgs[0]
        telefones = await telefonesc()
        telefones = telefones[0]
        clis = new Array
        for(k in clientes){
            cli = new Array
            for(i in clientes[k]){
                cli.push(clientes[k][i])
            }
            clis.push(cli)
        }

       
        var resposta = new Array;
        for(k in clis){
            var telefone = new Array;
            var rg = new Array;
            for(t in telefones){
                tel = telefones[t]
                if(tel.cliente_id == clis[k][0]){
                    telefone.push(tel.telefone)
                }
            }
            for(r in rgs){
                R = rgs[r]
                if(R.cliente_id == clis[k][0]){
                    rg.push(R.rg)
                }
            }

            clis[k].push(rg)
            clis[k].push(telefone)
            resposta.push(clis[k])
        }
        resp.send(resposta);
        }
        
    main()
    });

app.get("/ver/clientes/rgs", (req, resp) => {
    async function main() {
        rgs = await rgsc()
        rgs = rgs[0]
        RGS = new Array
        for(k in rgs){
            RG = new Array
            for(i in rgs[k]){
                RG.push(rgs[k][i])
            }
            RGS.push(RG)
        }
        resp.send(RGS);
        }
    main()
    });

app.get("/ver/clientes/telefones", (req, resp) => {
    async function main() {
        telefones = await telefonesc()
        telefones = telefones[0]
        Tell = new Array
        for(k in telefones){
            tell = new Array
            for(i in telefones[k]){
                tell.push(telefones[k][i])
            }
            Tell.push(tell)
        }
        resp.send(Tell);
        }
    main()
    });

app.get("/ver/produtos", (req, resp) => {
    async function main() {
        produtos = await produtosc()
        produtos = produtos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });

app.get("/ver/servicos", (req, resp) => {
    async function main() {
        servicos = await servicosc()
        servicos = servicos[0]
        sers = new Array
        for(k in servicos){
            ser = new Array
            for(i in servicos[k]){
                ser.push(servicos[k][i])
            }
            sers.push(ser)
        }
        resp.send(sers);
        }
    main()
    });


// deletar
app.post("/deletar", (req, res) => {
    const { id } = req.body;
    const { tabela } = req.body;
    
    async function main(){
        if(tabela == 'cliente'){
            rgs = await rgsc()
            rgs = rgs[0]
            telefones = await telefonesc()
            telefones = telefones[0]
            for(k in rgs){
                rg = rgs[k]
                if(rg.cliente_id == id){
                    deletar(rg.rg_id,'rg')
                }
            }
            for(k in telefones){
                tell = telefones[k]
                if(tell.cliente_id == id){
                    deletar(tell.telefone_id,'telefone')
                }
            }
        }
        deletar(id,tabela)
    }
    main()
}); 

// editar
app.post("/editar/cliente", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { genero } = req.body;
    const { cpf } = req.body;

    var edicao = new String;
    if(nome != ''){
        edicao += `nome = '${nome}'`
    }
    if(nome_social != ''){
        if(edicao.length>0){
            edicao += `,nome_social = '${nome_social}'`
        }else{
            edicao += `nome_social = '${nome_social}'`
        }
    }
    if(genero != ''){
        if(edicao.length>0){
            edicao += `,genero = '${genero}'`
        }else{
            edicao += `genero = '${genero}'`
        }
    }
    if(cpf != ''){
        if(edicao.length>0){
            edicao += `,nome = '${cpf}'`
        }else{
            edicao += `nome = '${cpf}'`
        }
    }

    editarCliente(id,edicao)
});

app.post("/editar", (req, res) => {
    const { id } = req.body;
    const { item } = req.body;
    const { preco } = req.body;
    const { tabela } = req.body;

    var edicao = new String;
    if(item != ''){
        edicao += `${tabela} = '${item}'`
    }
    if(preco != ''){
        if(edicao.length>0){
            edicao += `,preco = '${preco}'`
        }else{
            edicao += `preco = '${preco}'`
        }
    }

    editar(id,edicao,tabela)
});

// adicionar
app.post("/adicionar", (req, res) => {
    const { id } = req.body;
    const { item } = req.body;
    const { relacao } = req.body;

    adicionar(item,id,relacao)
}); 

// relação
app.get("/relacao/produtos", (req, resp) => {
    async function main() {
        produtos = await relacaoProdutos()
        produtos = produtos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });
app.get("/relacao/servicos", (req, resp) => {
    async function main() {
        var servicos = await relacaoServicos()
        produtos = servicos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});