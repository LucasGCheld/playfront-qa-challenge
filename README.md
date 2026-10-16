# PlayFront QA Challenge

Projeto de **Engenharia de Qualidade Front End** — avaliação prática de estrategia, automação e documentação de testes.

## Aplicação-alvo

[PlayLab — Playwright Practice Arena](https://playwrightlab.github.io/)

## Sobre este projeto

Este desafio visa avaliar a capacidade de:

- analisar aplicações web e identificar riscos;
- priorizar cenários de teste pela relevância e impacto;
- implementar automações estáveis, legíveis e sustentáveis;
- lidar com formulários, tabelas, carregamentos assíncronos e componentes dinâmicos;
- considerar acessibilidade e responsividade;
- integrar a execução dos testes a uma pipeline.
O candidato deve implementar **5 a 8 testes automatizados**, selecionados e justificados com base em risco, valor e custo de manutenção.

## Estrutura do projeto

```text
playfront-qa-challenge/
├── .github/
│   └── workflows/
│       └── test.yml
├── docs/
│   ├── estrategia-de-testes.md
│   └── matriz-de-cenarios.md
├── src/
│   ├── fixtures/
│   ├── pages/
│   ├── data/
│   └── utils/
├── tests/
│   ├── users/
│   ├── forms/
│   ├── dynamic/
│   ├── accessibility/
│   └── responsive/
├── test-assets/
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Pré-requisitos

- Node.js 18 ou superior
- Git
- Navegador Chromium (instalado automaticamente pelo Playwright)

## Configuração inicial

```bash
# 1. Instalar dependências
npm install

# 2. Instalar navegadores do Playwright
npx playwright install

# 3. (Opcional) Installall browsers with system dependencies
npx playwright install-deps
```

## Como executar

### Execução local

```bash
# Executar a suíte completa
npm run test

# Executar com relatório HTML
npm run test
npx playwright show-report
```

### Executar um arquivo específico

```bash
npx playwright test tests/users/users-journey.spec.ts
```

### Executar um cenário específico

```bash
npx playwright test -g "Tabela de Usuários"
```

### Executar em um navegador específico

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=mobile
```

### Executar em modo UI

```bash
npm run test:ui
```

### Executar em modo debug

```bash
npx playwright test --debug
```

### Executar em mobile

```bash
npx playwright test --project=mobile
```

## Execução em pipeline (GitHub Actions)

O repositório contém o workflow `.github/workflows/test.yml`, que:

1. Checkout do repositório
2. Configura o ambiente Node.js
3. Instala as dependências
4. Instala os navegadores necessários
5. Executa os testes
6. Publica o relatório e evidências

O workflow é acionado em:

- Push nas branches `main` e `master`
- Pull Requests para `main`

## Estratégia de testes

Ver em [`docs/estrategia-de-testes.md`](docs/estrategia-de-testes.md).

## Matriz de cenários

Ver em [`docs/matriz-de-cenarios.md`](docs/matriz-de-cenarios.md).

## Arquitetura

- Testes são organizados por feature (users, forms, dynamic, accessibility, responsive).
- Páginas abstratas em `src/pages/` são reutilizadas por múltiplos testes.
- Dados de teste ficam em `tests/fixtures/` e `src/fixtures/`.
- Seletores são baseados em roles, labels e `data-testid`.
- Nenhum `waitForTimeout` é utilizado como estratégia principal de sincronização.

## Seletores

- **Preferível**: `getByRole()`, `getByLabel()`, `getByPlaceholder()`
- **Alternativa**: `data-testid`
- **Evitar**: XPath absoluto, seletores baseados em posição

## Estratégia de sincronização

- `waitForSelector`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveText()`
- `expect(locator).toBeEnabled()`
- `waitForURL()`
- `expect(locator).toHaveAttribute()`

## Dados de teste

- Usar fixtures de JSON para dados controláveis.
- Evitar strings fixas que dependem de valores gerados dinamicamente.

## Decisões técnicas

- Stack: Playwright + TypeScript + Node.js
- CI: GitHub Actions
- Relatório: HTML do Playwright
- Artefutos: screenshots, vídeos e trace

## Limitações conhecidas

- Aplicação de prática — alguns componentes são intencionalmente flaky.
- Acessibilidade é checada de forma seletiva.
- A execução multi-browser é planejada, mas não obrigatória.

## Uso de Inteligência Artificial

IA auxiliou na estrutura de documentação, na análise de risco e na sugestão de cenários. O código final, seletores e decisões arquiteturais foram validados manualmente.

## Próximos passos

1. Executar a suíte localmente e garantir que os testes passem.
2. Validar o relatório e os artefutos gerados.
3. Realizar uma revisão das decisões de priorização.
4. Preparar a apresentação técnica.
