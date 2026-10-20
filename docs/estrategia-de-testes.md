# 📋 Estratégia de Testes Front-End — PlayLab Arena

## 1. Visão Geral e Objetivos

Este documento descreve a estratégia de qualidade e automação adotada para a aplicação **PlayLab — Playwright Practice Arena**. O objetivo principal é garantir a estabilidade e a corretude das funcionalidades de maior risco e valor de uso, estabelecendo uma suíte automatizada ágil, resiliente e de fácil manutenção.

---

## 2. Análise de Riscos e Critérios de Priorização

A seleção dos cenários automatizados seguiu uma abordagem orientada a risco (*Risk-Based Testing*), considerando:

1. **Impacto no Usuário**: Falhas na tabela de usuários ou no envio de formulários impedem a operação principal da plataforma administrativa.
2. **Complexidade de Interface**: Componentes assíncronos e dinâmicos possuem maior propensão a erros de sincronização e regressões em atualizações do front-end.
3. **Acessibilidade e Responsividade**: A aplicação deve ser acessível e utilizável em diferentes dispositivos e telas.

---

## 3. Escopo de Testes

### 3.1. Dentro do Escopo (Automatizado)
* **Jornada de Usuários (`USR`)**: Busca, filtragem, ordenação por coluna e validação de paginação.
* **Formulários (`FRM`)**: Preenchimento correto de campos, submissão válida e bloqueio de dados inválidos (fluxo negativo).
* **Componentes Dinâmicos (`DYN`)**: Sincronização com elementos carregados assincronamente via chamadas simuladas de rede/estado.
* **Acessibilidade (`A11Y`)**: Mapeamento de papéis ARIA e verificação básica de navegação por teclado.
* **Responsividade (`RSP`)**: Validação de layout e funcionalidade em viewport mobile.

### 3.2. Fora do Escopo Automatizado (E Justificativas)
* **Testes Extensivos de Regressão Visual (Pixel-Matching)**: O foco atual foi estabelecido na validação funcional e contratual de UI, reduzindo custos de manutenção de *snapshots*.
* **Cenários de Carga ou Performance Front-End**: Devem ser abordados com ferramentas apropriadas (Lighthouse / k6) em etapas complementares.

---

## 4. Arquitetura da Automação e Padrões de Código

* **Page Object Model (POM)**: Todas as páginas possuem classes dedicadas encapsulando seletores e ações (`src/pages/`).
* **Custom Fixtures**: O Playwright foi estendido para injetar instâncias das páginas diretamente nas suítes de teste, reduzindo código repetitivo (`src/fixtures/`).
* **Estratégia de Seletores**:
  * **1ª opção**: Atributos semânticos e acessíveis (`getByRole`, `getByLabel`).
  * **2ª opção**: Atributos de teste dedicados (`getByTestId`).
  * **Proibido**: Uso de XPath absoluto ou classes genéricas de CSS que mudam com frequência.
* **Sincronização**: Priorização estrita do mecanismo de *auto-waiting* nativo e asserções baseadas em estado (`toBeVisible`, `toHaveText`). O uso de pausas estáticas (`waitForTimeout`) é minimizado, sendo restrito a cenários onde componentes dinâmicos exigem estabilização visual da interface.

---

## 5. Integração Contínua (CI/CD) e Evidências

* Execução automática via **GitHub Actions** em cada `push` ou `pull request`.
* O relatório **Playwright HTML Report** é gerado ao final de cada execução.
* Traces, vídeos e screenshots são anexados como artefatos apenas em caso de falha para otimizar o tempo e o armazenamento da pipeline.
