# 🎭 PlayFront QA Challenge — Automação & Engenharia de Qualidade Web

[![Playwright Tests](https://github.com/LucasGCheld/playfront-qa-challenge/actions/workflows/test.yml/badge.svg)](https://github.com/LucasGCheld/playfront-qa-challenge/actions)
![Playwright Version](https://img.shields.io/badge/playwright-v1.40+-blue?logo=playwright)
![TypeScript](https://img.shields.io/badge/typescript-v5.0+-blue?logo=typescript)
![Node Version](https://img.shields.io/badge/node-v20+-green?logo=nodedotjs)

Este repositório contém a suíte automatizada e a estratégia de testes front-end desenvolvida para a **PlayLab — Playwright Practice Arena**. O objetivo do projeto é demonstrar uma abordagem prática de Engenharia de Qualidade focada em **risco, valor de negócio, sustentabilidade do código e integração contínua (CI/CD)**.

---

## 🎯 Abordagem e Estratégia de Testes

Em vez de automatizar exaustivamente toda a aplicação, a suíte foi estruturada priorizando **cenários críticos de alto risco e valor de uso**:

1. **Jornada de Gerenciamento de Usuários (`USR`)**: Validação de listagem, busca dinâmica, ordenação e navegação paginada.
2. **Cenários de Formulários e Validações (`FRM`)**: Validação de entradas obrigatórias, preenchimento, submissão e mensagens de erro (fluxos positivos e negativos).
3. **Componentes Dinâmicos e Assíncronos (`DYN`)**: Validação de elementos carregados sob demanda e estados de espera sem o uso de pausas estáticas (`waitForTimeout`).
4. **Validação de Acessibilidade (`A11Y`)**: Verificação automatizada de árvore de acessibilidade, papéis ARIA e rotulagem de elementos.
5. **Responsividade & Mobile (`RSP`)**: Garantia de funcionalidade em visores mobile/compactos.

> 📄 A documentação detalhada da estratégia e a matriz de rastreabilidade de riscos estão disponíveis nos diretórios da pasta `docs/`:
> - [`Estratégia de Testes`](docs/estrategia-de-testes.md)
> - [`Matriz de Cenários e Riscos`](docs/matriz-de-cenarios.md)

---

## 🛠️ Tecnologias e Arquitetura

O projeto adota boas práticas de arquitetura para garantir manutencionalidade e baixo acoplamento:

* **Linguagem & Framework**: Node.js + TypeScript + Playwright.
* **Padrão de Arquitetura**: **Page Object Model (POM)** combinado com **Custom Fixtures** para encapsulamento de estado das páginas.
* **Estratégia de Localização**: Priorização estrita de seletores semânticos e voltados ao usuário (`getByRole`, `getByLabel`, `getByTestId`), eliminando seletores frágeis baseados em CSS complexo ou XPath absoluto.
* **Sincronização Reativa**: Uso exclusivo do mecanismo de *auto-waiting* nativo do Playwright e asserções baseadas em estado (`toBeVisible`, `toHaveText`).

### 📁 Estrutura do Repositório

```text
.
├── .github/
│   └── workflows/
│       └── test.yml          # Pipeline CI/CD no GitHub Actions
├── docs/
│   ├── estrategia-de-testes.md # Estratégia, riscos e escopo
│   └── matriz-de-cenarios.md   # Matriz de cobertura e priorização
├── src/
│   ├── fixtures/             # Custom fixtures para injeção de Page Objects
│   ├── pages/                # Page Object Model (POM)
│   └── utils/                # Helpers, mocks e utilitários
├── tests/
│   ├── accessibility/        # Testes de Acessibilidade (A11Y)
│   ├── dynamic/              # Testes de Componentes Dinâmicos/Assíncronos
│   ├── forms/                # Testes de Formulários (Positivos e Negativos)
│   ├── responsive/           # Testes Responsivos e Viewport Mobile
│   └── users/                # Testes da Jornada Principal de Usuários
├── playwright.config.ts      # Configuração global do Playwright
└── package.json
```

---

## 🚀 Instalação e Configuração Inicial

### Pré-requisitos
* **Node.js**: `v20+` (LTS recomendado).
* **npm**: `v9+` ou superior.

### 1. Clonar o Repositório e Instalar Dependências
```bash
git clone https://github.com/LucasGCheld/playfront-qa-challenge.git
cd playfront-qa-challenge
npm install
```

### 2. Instalar os Navegadores do Playwright
Você pode instalar os navegadores usando qualquer um dos comandos abaixo:

```bash
# Instalação padrão dos navegadores Playwright
npx playwright install

# (Opcional/Recomendado) Instala os navegadores com as dependências do sistema operacional:
npx playwright install --with-deps
```

---

## 🧪 Como Executar os Testes

Você pode executar os testes utilizando os scripts configurados no `package.json` ou comandos diretos da CLI do Playwright.

### 1. Execução via `npm run` (Scripts Atalhos)
* **Suíte completa (Headless):** `npm run test`
* **Com interface gráfica (Headed):** `npm run test:headed`
* **Modo UI interativo (Playwright UI):** `npm run test:ui`
* **Especificamente em resolução Mobile:** `npm run test:mobile`
* **Exibir relatório HTML:** `npm run test:report`

### 2. Execução Direta via CLI (`npx playwright test`)
* **Executar um arquivo específico:**
  ```bash
  npx playwright test tests/users/users-journey.spec.ts
  ```
* **Executar um cenário específico por nome/título:**
  ```bash
  npx playwright test -g "Tabela de Usuários"
  ```
* **Executar filtrando por navegador ou projeto:**
  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=mobile
  ```
* **Executar em modo depuração passo a passo (Debug):**
  ```bash
  npx playwright test --debug
  ```
* **Abrir o relatório HTML manualmente:**
  ```bash
  npx playwright show-report
  ```

---

## 🔄 Pipeline de CI/CD & Relatórios

A suíte está integrada ao **GitHub Actions** (`.github/workflows/test.yml`), sendo disparada automaticamente em cada `push` e `pull request` direcionados às branches `main` ou `master`.

* **Etapas do Workflow**:
  1. Checkout do repositório.
  2. Configuração do ambiente Node.js (v20).
  3. Instalação de dependências e navegadores do Playwright.
  4. Execução automatizada da suíte de testes.
  5. Publicação do **Playwright HTML Report** e armazenamento de evidências (screenshots, vídeos e traces em caso de falhas).

---

## 🤖 Uso Transparente de Inteligência Artificial

Em alinhamento com as boas práticas e transparência técnica, ferramentas de IA foram utilizadas pontualmente como apoio consultivo para:
* Brainstorming da matriz de riscos e revisão gramatical da documentação.
* Sugestões de estrutura para os workflows do GitHub Actions.

> **Nota de Responsabilidade Técnica**: Todas as decisões de arquitetura de automação, seleção de localizadores, criação do Page Object Model, custom fixtures e asserções de teste foram desenvolvidas, validadas e mantidas manualmente por mim.