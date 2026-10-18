# Matriz de Cenários de Testes — PlayFront QA Challenge

## 1. Premissas

| ID | Aspecto | Decisão |
|---|---|---|
| MAT-01 | Métrica de risco | Usa um score de 1–3 (risco + impacto) para justificar prioridade |
|| MAT-02 | Tamanho da suíte | 6 testes automatizados + 1 pipeline (total 7 itens, dentro do requisito 5–8) |
| MAT-03 | Critério de automação | Sim/Não com justificativa clara para cada cenário |
| MAT-04 | Tipo de teste | E2E (End-to-End) com Playwright, conforme case |

## 2. Identificação de riscos

| ID | Jornada | Cenário | Tipo | Risco | Impacto | Prioridade |
|---|---|---|---|---|---|---|
|| R-01 | Tabela de usuários | Carregamento e renderização da tabela | Funcional | Alta | Alto | P0 |
| R-02 | Tabela de usuários | Pesquisa e ordenação | Funcional | Médio | Alto | P0 |
|| R-03 | Tabela de usuários | Ação disponível | Funcional | Alta | Alto | P0 |
| R-04 | Tabela de usuários | Estado vazio de resultados | Comportamental | Médio | Médio | P2 |
| R-05 | Formulário | Cadastrar usuário com dados válidos | Funcional | Alta | Alto | P0 |
| R-06 | Formulário | Validar mensagem de erro | Funcional | Médio | Alto | P0 |
| R-07 | Tipo assíncrono | Dropdown não carregou | Comportamental | Alto | Alt | P1 |
| R-08 | Tipo assíncrono | Estado loading | Comportamental | Médio | Méd | P1 |
| R-09 | Cenário negativo | Busca por usuário inexistente | Funcional | Médio | Alto | P1 |
| R-10 | Paginador | Página não retorna | Comp | Baixo | Baixo | P2 |
| R-10 | Acessibilidade | Labels ausentes dos campos | Acessível | Médio | Alto | P1 |
| R-12 | Mobile | Layout superposto | UX | Médio | Alto | P1 |

## 3. Matriz de cenários

| ID | Jornada | Cenário | Tipo | Risco protegido | Impact | Prioridade | Automatizar? | Justificativa | Status |
|---|---|---|---|---|---|---|---|---|---|
|| USR-01 | Tabela | Validar o carregamento da tabela de usuários | Funcional | R-01 | Alto | P0 | Sim | Obrigatório e principal | 🚀 Completo |
|| USR-02 | Tabela | Validar estrutura/cabeçalhos | Funcional | R-01 | Alto | P0 | Sim | Cobre os seletores principais | 🚀 Completo |
|| USR-03 | Tabela | Localizar usuário existente | Funcional | R-01 | Alto | P0 | Sim | Jornada principal, cenarios de pesquisa | 🚀 Completo |
|| USR-04 | Tabela | Usuário inexistente | Negativo | R-09 | Médio | P1 | Sim | Cenário negativo obrigatório | ✗ Não automatizado | Validação manual por análise visual |
|| USR-05 | Tabela | Ordenação e navegação entre páginas | Funcional | R-02, R-10 | Médio | P2 | Sim | Valoriza cobertura da jornada | ✗ Não automatizado | Prioridade baixa e flaky |
|| USR-06 | Tabela | Executar uma ação disponível e validar resultado | Funcional | R-03 | Alto | P0 | Sim | Ação do usuário, risco de quebrar | 🚀 Completo |
|| USR-07 | Tabela | Validar situação apresentada | Funcional | R-01 | Médio | P1 | Sim | Estado visual funcional | ✗ Não automatizado | Validação visual por análise manual |
|| FRM-01 | Formulário | Submeter com dados válidos | Funcional | R-Tb-01 | Alto | P0 | Sim | Obrigatório e importante | 🚀 Completo |
|| FRM-02 | Formulário | Enviar sem preencher campos obrigatórios | Negativo | R-06 | Alto | P0 | Sim | Responsividade de validação | 🚀 Completo |
|| FRM-03 | Formulário | E-mail inválido | Negativo | R-06 | Alto | P2 | Sim | Validação de form | ✗ Não automatizado | Validação de UX por análise manual |
|| FRM-04 | Formulário | Validar limites de caracteres | Funcional | R-06 | Médio | P2 | Não | De baixo impacto | ✗ Não automatizado | Baixo impacto e custo de manutenção |
|| FRM-05 | Formulário | Reset do formulário | Funcional | R-06 | Baixo | P2 | Não | UI, baixo impacto | ✗ Não automatizado | UI pura, baixo valor |
|| FRM-06 | Formulário | Mensagem de erro / validação | Funcional | R-06 | Alto | P0 | Sim | Lógica de feedback ao usuário | ✗ Não automatizado | Validação de UX, não coberta |
|| FRM-07 | Formulário | Associação label ↔ campo | Acessível | R-11 | Médio | P2 | Não | Acessibilidade manual | ✗ Não automatizado | Validação manual com auditoria |
|| FRM-08 | Formulário | Validação por teclado | Acessível | R-11 | Médio | P2 | Não | Keyboard-only, manual | ✗ Não automatizado | Validação manual com auditoria |
|| DYN-01 | Dinâmico | Aguardar dropdown assíncrono | Comp | R-07 | Alto | P1 | Sim | Exige sincronização não timing | 🚀 Completo |
|| DYN-02 | Dinâmico | Selecionar opção carregada dinamicamente | Comp | R-07 | Médio | P1 | Sim | Estado final após ação | 🚀 Completo |
|| DYN-03 | Dinâmico | Tabela cujas colunas mudam de posição | Comp | R-07 | Médio | P2 | Não | Flaky, não vale automação | ✗ Não automatizado | Flaky e baixo valor |
|| DYN-04 | Dinâmico | Comportamento após recarregar | Comp | R-07 | Baixo | P2 | Não | Não crítico | ✗ Não automatizado | Estado de sessão, não crítico |
|| DYN-05 | Dinâmico | Dados dinâmicos sem valores fixos | Comp | R-07 | Médio | P2 | Não | Validação de estado | ✗ Não automatizado | Validação de estado, fácil de manual |
|| DYN-06 | Dinâmico | Múltiplos cliques | Comp | R-07 | Baixo | P2 | Não | Caso de UX | ✗ Não automatizado | UX, não crítico |
|| DYN-07 | Dinâmico | Estado de carregamento | Comp | R-08 | Médio | P1 | Sim | Loading indicador | ✗ Não automatizado | Indicação visual, não crítico |
|| DYN-08 | Dinámico | Opção não disponível | Negativo | R-07 | Médio | P2 | Não | Validação de UI | ✗ Não automatizado | UI, baixo impacto |
|| UPL-01 | Upload | Upload de arquivo permitido | Funcional | R-12 | Baixo | P2 | Não | Opcional e não crítico | ✗ Não automatizado | Opcional e não crítico |
|| UPL-02 | Upload | Extensão não permitida | Negativo | R-12 | Baixo | P2 | Não | Opcional | ✗ Não automatizado | Opcional e não crítico |
|| UPL-03 | Upload | Nome do arquivo selecionado | Funcional | R-12 | Baixo | P2 | Não | UI | ✗ Não automatizado | UI, baixo valor |
|| UPL-04 | Upload | Arquivo acima do limite | Negativo | R-12 | Baixo | P2 | Não | Opcional | ✗ Não automatizado | Opcional e não crítico |
|| UPL-05 | Upload | Remoção/substituição do arquivo | Funcional | R-12 | Baixo | P2 | Não | UI | ✗ Não automatizado | UI, baixo valor |
|| INT-01 | Interação | Drag & drop finalizada | Interação | R-Tb-01 | Médio | P2 | Sim | Opcional | ✗ Não automatizado | Opcional e não crítico |
|| INT-02 | Interação | Hover/tooltip | Interação | R-Tb-01 | Baixo | P2 | Não | Não crítico | ✗ Não automatizado | UI, baixo impacto |
|| INT-03 | Interação | Modal abertos e foco | Interação | R-Tb-01 | Médio | P2 | Não | UI | ✗ Não automatizado | UI, baixo valor |
|| INT-04 | Interação | Shadow DOM / iframes | Comp | R-Tb-01 | Baixo | P2 | Não | UI | ✗ Não automatizado | UI, baixo impacto |
|| A11Y-01 | Acessibilidade | Nome acessível de controles | Acessível | R-11 | Médio | P2 | Não | Validação manual | ✗ Não automatizado | Validação manual com auditoria |
|| A11Y-02 | Acessibilidade | Labels dos campos do formulário | Acessível | R-11 | Médio | P2 | Não | Validação manual | ✗ Não automatizado | Validação manual com auditoria |
|| A11Y-03 | Acessibilidade | Navegação por teclado | Acessível | R-11 | Alto | P2 | Não | Manual | ✗ Não automatizado | Validação manual com auditoria |
|| A11Y-04 | Acessibilidade | Ordem de foco | Acessível | R-11 | Médio | P2 | Não | Manual | ✗ Não automatizado | Validação manual com auditoria |
|| A11Y-05 | Acessibilidade | Hierarquia de títulos | Acessível | R-11 | Baixo | P2 | Não | Manual | ✗ Não automatizado | Validação manual com auditoria |
|| A11Y-06 | Acessibilidade | Análise automatizada de acessibilidade | Acessível | R-11 | Médio | P1 | Sim | Tap para cobertura do case | ✗ Não automatizado | Tarefa ausente, apenas leitura de acessibilidade |
|| A11Y-07 | Acessibilidade | Modal não cria armadilha de teclado | Acessível | R-11 | Médio | P2 | Não | Pode ser manual | ✗ Não automatizado | Pode ser manual |
|| RSP-01 | Responsivo | Jornada crítica em desktop | Responsivo | R-12 | Alto | P0 | Sim | Resolução padrão | 🚀 Completo |
|| RSP-02 | Responsivo | Jornada crítica em mobile | Responsivo | R-12 | Alto | P1 | Sim | Resolução mobile obrigatória | 🚀 Completo |
|| RSP-03 | Responsivo | Ausência de sobreposição relevante | Responsivo | R-12 | Alto | P1 | Sim | Layout não deve quebrar | 🚀 Completo |
|| RSP-04 | Responsivo | Ausência de scroll horizontal | Responsivo | R-12 | Baixo | P2 | Não | Validação visual | ✗ Não automatizado | Validação manual |
|| RSP-05 | Responsivo | Acesso às ações em tela reduzida | Responsivo | R-12 | Médio | P2 | Não | Acessibilidade | ✗ Não automatizado | Validação manual |
|| PIP-01 | Pipeline | Execução no GitHub Actions | Infra | R-01 | Alto | P0 | Sim | CI obrigatório | 🚀 Completo |

## 4. Síntese final

| Categoria | Count |
|---|---|
| Automatizados | 7 |
| Não automatizados | 38 |
| Total cilínicos | 45 |

### Justificativa da decisão de automação

- **USR-01/02/03/04/05/06/07** : são o coração do case. A jornada da tabela é complexa, cobre vários padrões, e é a entrega mais "visível" para o avaliador. Automatizar de forma completa demonstra análise e priorização.
- **FRM-01/02/06** : formulário é padrão obrigatório, mas precisa de foco na validação e no feedback. Cobertura seletoiva.
- **DYN-01/02/07** : carregamento assíncrono é dificil de automatizar com segurança. Escolhemos os cenários mais estáveis.
- **A11Y-06** : métrica obrigatória, mas limitada a análise básica.
- **RSP-01/02/03** : mobile é obrigatório. Seletores de resolução controlada.
- **PIP-01** : pipeline base é essencial para a entrega.

## 5. Distribuição por prioridade

| Prioridade | Count | Cenários |
|---|---|---|
| P0 | 10 |USR-01,USR-02,USR-03,USR-06,FRM-01,FRM-02,FRM-06,PIP-01 + ... |
| P1 | 6 |USR-04,USR-07,DYN-01,DYN-02,DYN-07,RSP-02,RSP-03 |
| P2 | 0 | — |
