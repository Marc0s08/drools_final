document.getElementById('loadDataButton').addEventListener('click', function() {
    // Exibe a mensagem de "Carregando..."
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '<p>Carregando...</p>';

    // Realiza a requisição ao back-end
    fetch('http://localhost:8080/api/avaliar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([
            {
                "nome": "Alpha Distribuidora",
                "reputacao": 10,
                "preco": 1200,
                "condicaoPgto": "A vista",
                "frete": 100
            },
            {
                "nome": "Beta Fornecimentos",
                "reputacao": 10,
                "preco": 1100,
                "condicaoPgto": "Parcelado",
                "frete": 110
            },
            {
                "nome": "Gamma Importadora",
                "reputacao": 9,
                "preco": 1300,
                "condicaoPgto": "À vista com desconto",
                "frete": 200
            },
            {
                "nome": "Delta Suprimentos",
                "reputacao": 6,
                "preco": 1150,
                "condicaoPgto": "Parcelado",
                "frete": 120
            },
            {
                "nome": "Omega Comercial",
                "reputacao": 7,
                "preco": 1250,
                "condicaoPgto": "A vista",
                "frete": 180
            },
            {
                "nome": "Sigma Soluções",
                "reputacao": 10,
                "preco": 1180,
                "condicaoPgto": "Parcelado",
                "frete": 130
            },
            {
                "nome": "Epsilon Serviços",
                "reputacao": 9,
                "preco": 1190,
                "condicaoPgto": "A vista",
                "frete": 140
            },
            {
                "nome": "Zeta Comércio",
                "reputacao": 9,
                "preco": 1220,
                "condicaoPgto": "Parcelado",
                "frete": 110
            },
            {
                "nome": "Theta Global",
                "reputacao": 6,
                "preco": 1170,
                "condicaoPgto": "A vista",
                "frete": 170
            },
            {
                "nome": "Lambda Mercantil",
                "reputacao": 7,
                "preco": 1280,
                "condicaoPgto": "Parcelado",
                "frete": 160
            }
        ])  // Exemplo de dados que você está enviando para o back-end
    })
    .then(response => response.json())
    .then(data => {

        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = '';  // Limpar conteúdo anterior

        if (Array.isArray(data)) {  // Verifica se 'data' é um array

            console.log(data);
            // Ordenar pelo campo "pontuacao" (maior para o menor)
            data.sort((a, b) => b.pontuacao - a.pontuacao);

            // Criação da tabela
            const table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Fornecedor</th>
                        <th>Reputação</th>
                        <th>Preço</th>
                        <th>Condição de Pagamento</th>
                        <th>Frete</th>
                        <th>Pontuação Final</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;
            
            const tbody = table.querySelector('tbody');

            // Função para exibir estrelas baseadas na reputação
            const exibirReputacaoEmEstrelas = (reputacao) => {
                let estrelas = '';
                let estrelasInteiras = Math.floor(reputacao / 2);  // Quantas estrelas completas
                let meiaEstrela = reputacao % 2 !== 0;  // Verifica se há meia estrela

                // Adiciona estrelas inteiras
                for (let i = 0; i < estrelasInteiras; i++) {
                    estrelas += '<i class="fa fa-star"></i>';
                }

                // Se for ímpar, adiciona a meia estrela
                if (meiaEstrela) {
                    estrelas += '<i class="fa fa-star-half-alt"></i>';
                }

                return estrelas;
            };

            // Formatar preço em reais
            const formatarPreco = (preco) => {
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
            };

            const aprovacao = (mensagem) => {
                let mensagemColorida = '';
            
                if (mensagem === "Aprovado") {
                    mensagemColorida = "<b style='color: green;'>Aprovado</b>";
                } else if (mensagem === "Reprovado") {
                    mensagemColorida = "<b style='color: red;'>Reprovado</b>";
                } else {
                    mensagemColorida = "<b>" + mensagem + "</b>";
                }
            
                return mensagemColorida;
            }
            

            // Preenche a tabela com dados
            data.forEach(fornecedor => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${fornecedor.nome}</td>
                    <td>${exibirReputacaoEmEstrelas(fornecedor.reputacao)}</td>
                    <td>${formatarPreco(fornecedor.preco)}</td>
                    <td>${fornecedor.condicaoPgto}</td>
                    <td>${formatarPreco(fornecedor.frete)}</td>
                    <td>${fornecedor.pontuacao}</td> <!-- Exibe a pontuação final retornada do backend -->
                    <td>${aprovacao(fornecedor.mensagem)}</td>
                `;
                tbody.appendChild(row);
            });

            // Adiciona a tabela no container
            dataContainer.appendChild(table);
        } else {
            dataContainer.innerHTML = '<p>Erro: Dados inválidos retornados.</p>';
        }
    })
    .catch(error => {
        // Tratar erro de rede ou JSON inválido
        console.error('Erro ao carregar dados:', error);
        dataContainer.innerHTML = '<p>Ocorreu um erro ao tentar carregar os fornecedores.</p>';
    });
});

// Função para alternar o tema
document.getElementById('toggleThemeButton').addEventListener('click', function() {
    const body = document.body;
    const icon = this.querySelector('i');
    
    body.classList.toggle('dark-mode');  // Alterna entre o modo claro e escuro
    
    // Mudar o ícone conforme o tema
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');  // Ícone de lua para o tema escuro
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');  // Ícone de sol para o tema claro
    }
});
