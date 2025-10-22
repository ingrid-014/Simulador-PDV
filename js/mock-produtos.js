/*-- Adicionando dados fictícios de produtos ao local storage --*/

function gerarProdutosMock(){
    //Verificar se a chave 'produtos' já existe no local Storage
    const produtosExitem = localStorage.getItem('produtos');

    //Se não existir, adiciona produtos fictícios
    if (!produtosExitem){
        const produtosMock = [
            {
                id: 1,
                nome: "Camiseta Básica Branca",
                estoque: 120,
                precoUnitario: 39.90,
                categoria: "Roupas"
            },
            {
                id: 2,
                nome: "Calça Jeans Slim",
                estoque: 60,
                precoUnitario: 199.90,
                categoria: "Roupas"
            },
            {
                id: 3,
                nome: "Tênis Casual Masculino",
                estoque: 50,
                precoUnitario: 199.90,
                categoria: "Calçados"
            },
            {
                id: 4,
                nome: "Anel de Prata de Coração",
                estoque: 25,
                precoUnitario: 142.54,
                categoria: "Acessórios"
            },
            {
                id: 5,
                nome: "Mochila Couro Sintético",
                estoque: 40,
                precoUnitario: 89.90,
                categoria: "Acessórios"
            }
        ];

        //Salvando os dados de produtos no local storage
        localStorage.setItem('produtos', JSON.stringify(produtosMock));
    }
}

/*----- Executando o mock de produtos -----*/
gerarProdutosMock();