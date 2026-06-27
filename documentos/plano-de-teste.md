# Plano de Testes

Plano para validação e qualidade do projeto.

# Objetivo

Validar se o projeto atende aos requisitos funcionais e nao funcionais definidos no roteiro da atividade, entre eles:
1 - Cadastro ao pedido;
2 - Checkout;
3 - Funcionamento do acompanhamento do pedido;
4 - Necessidade clara de consentimento, transparencia e controle de dados;
5 - Comportamento responsivo em diferentes telas.

# Ambiente de Execucao Sugerido

 Navegadores: Chrome em versoes atuais.
 Resolucao mobile: `390 x 844`.
 Resolucao tablet: `768 x 1024`.
 Resolucao desktop: `1366 x 768` ou superior.
Recomendação: limpar `localStorage` antes de executar os testes.

# Tabela de Casos de Teste

| Teste | Entrada | Resultado Esperado |
| --- | --- | --- |
| Cadastro valido | Preencher nome, e-mail, telefone, senha, preferencia de app e aceitar consentimento | Conta criada com sucesso, sessao iniciada e redirecionamento para a selecao de unidade |
| Cadastro sem concordar com a LGPD | Preencher os dados, mas nao marcar o aceite obrigatorio | Envio bloqueado pelo formulario e cadastro nao concluido |
| Cadastro sem colocar email completo | Preencher os dados, mas não colocar nada após o @ | Mensagem avisando que está incompleto |
| Login valido | Informar credenciais corretas de cliente | Sessao iniciada |
| Acesso de visitante | Clicar no botao de entrada como visitante | Sessao temporaria e direcionando para aba de unidades |
| Selecionar unidade | Direcionamento para aba de Unidades das Filiais| 
| Visualizar cardapio por unidade | Abrir o cardapio apos selecionar uma unidade | Lista de produtos da unidade selecionada |
| Adicionar produto ao Carrinho | Acionar `Adicionar ao pedido` em um item valido | Item incluido no carrinho e feedback visual exibido |
| Carrinho vazio ao pagar | Tentar acessar pagamento sem itens no carrinho | Checkout bloqueado, exibicao de estado vazio e aviso para voltar ao cardapio |
| Pagamento sem consentimentos com as políticas | Preencher os dados do checkout, mas nao marcar os dois checkbox obrigatorios | Envio bloqueado pelo formulario e pagamento nao aceito. |
| Pagamento aprovado | Preencher checkout corretamente e confirmar envio | Pedido criado, carrinho limpo, pontos creditados e redirecionamento para `pedido.html` |
| Status do pedido | Acompanhar a tela de pedido apos confirmacao | pagamento aprovado, preparo, pronto e concluido |
| Resgate de cupons | Tentar resgatar cupons com pontos suficientes e insuficientes | Resgate concluido quando houver saldo; mensagem de "pontos insuficientes" quando nao houver pontos suficientes |
| LGPD visivel na interface | Navegar pela home, cadastro, checkout e perfil | Finalidade dos dados, consentimentos e status de privacidade exibidos de forma clara e objetiva |
| Responsividade mobile, tablet e desktop | Executar os fluxos principais em diferentes larguras de tela | Layout adaptado sem sobreposicao, perda de conteudo ou quebra dos formularios |

# Conclusao

Com esses testes, o projeto cobre as solicitações no roteiro e ainda valida os pontos que mais pesam para a avaliacao da atividade: jornada do usuario, bloqueios de erro, clareza operacional, responsividade e demonstracao explicita de privacidade em toda a interface.