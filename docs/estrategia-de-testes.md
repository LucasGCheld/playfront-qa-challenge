# Estratégia de Testes — PlayFront QA Challenge

## 1. Objetivo

Aplicar uma estratégia de automação Front Web em um aplicativo de prática (PlayLab — Playwright Practice Arena) que demonstre, de forma sustentável, como projetar, executar e validar uma suíte de testes que:

- identifique riscos na aplicação,
- priorize cenários por valor, risco e custo de manutenção,
- automatize fluxos críticos com asserções claras,
- gere evidências executáveis e documente decisões de arquitetura,
- prepare a solução para executação local, em pipeline e em múltiplos navegadores.

## 2. Escopo

### Alvo
Aplicação: [PlayLab — Playwright Practice Arena](https://playwrightlab.github.io/)

### Cobertura
- Jornada principal da tabela de usuários
- Formulário de cadastro
- Dropdown assíncrono
- Cenário negativo de localização de usuário
- Validação de acessibilidade
- Execução em resolução mobile
- Pipeline de CI/CD (GitHub Actions)

## 3. Fora de escopo (inicial)

- Testes de carga, stress e negação de serviço
- Varreduras de segurança e pentest
- Automação de E2E de fluxos de pagamento completos
- Automação de APIs externas à aplicação de prática (exceto interceptação controlada)
- Testes cross-browser em todos os disponíveis (estratégia preparada, execução limitada)
- Automação de componentes flaky baseados em umidade

## 4. Riscos identificados

| Risco | Tipo | Nível | Mitigação |
|---|---|---|---|
| DOM instável de componentes dinâmicos | Técnico | Alto | Seletores baseados em roles/aria-label/data-testid; wait condicional |
| Taxa de atualização do DOM | Ergônômico | Médio | Usar texto/aria-results; evitar posição absoluta |
| Apenas Chromium no ambiente de CI | Ambiente | Médio | Instalar Firefox (eibit) no pipeline, coexistência de proj |
| Formulário reativo | Comportamental | Alto | Validar mensagem de erro e estado de submit |
| Acessibilidade parcial | Experiência | Médio | Verificar somente critérios essenciais (rótulos, roles) |
| Escrita em mobile | Layout | Médio | Definir resolução e validar sobreposição sem overflow |

## 5. Estratégia de cobertura

### Critérios de priorização
1. **Requisito obrigatório do case** — cada item do case deve ser coberto.
2. **Risco protegido** — o que mais impacta o resultado final.
3. **Impacto de negócio** — o que só viola se algo der errado.
4. **Estabilidade da automação** — quem não gera flaky e foge do fio.
5. **Custos e manutenção** — quem é reutilizável e limita abstração excessiva.

### Grau de automação
| Tipo | Grau |
|---|---|
| Jornada principal | Alta — automatizada complete |
| Formulário | Alta |
| Componentes assíncronos | Alta |
| Cenário negativo | Alta |
| Acessibilidade | Média-parcial (critérios essenciais) |
| Mobile | Alta (não crítico) |
| Pipeline | Alta |
| Renderização visual | Seletoiva (responsivo) |

## 6. Critérios de priorização

| Prioridade | Quem entra | Por quê |
|---|---|---|
| P0 | Jornada tabela + form + pipeline | Obrigatório e crítico para o resultado |
| P1 | Assíncrono + negativo + acessibilidade + mobile | Requisito do case, valor normal |
| P2 | Restos dos cenários do case | Melhor que automatizar todos, mas não obrigatório |

## 7. Estratégia de automação

### Seletores
- Preferir **getByRole** (role acessível) e **getByLabel** sobre classes/divs.
- Usar **data-testid** apenas quando não houver alternativa estável.

### Sincronização
- Evitar `waitForTimeout` como estratégia principal.
- Usar wait condicional: `waitForSelector`, `expect(locator).toBeVisible`, `expect(locator).toHaveText`, `expect(locator).toBeEnabled`, `waitForURL`.

### Dados de teste
- Dados mantidos em JSON/fixture (`tests/fixtures/users.json`).
- Evitar strings fixas que dependem do HTML gerado em tempo real.

### Separação
- **pages/**: abstração de páginas (usuário, formulário, dropdown).
- **fixtures/**: dados reutilizáveis.
- **utils/**: configuradores globais.
- **tests/**: suites por feature.

## 8. Navegadores e resoluções

| Configuração | Seletor | Motivo |
|---|---|---|
| Chromium | Padrão | Principal para desenvolvimento/testes |
| Firefox | Projeto em pipeline | Rodar os tests, mas não tudo |
| WebView / Mobile | 375×667 | iPhone / resolução típica mobile |

### Resoluções escolhidas
- **Desktop**: 1920×1080 — resolução padrão de geração, o layout é estável.
- **Mobile**: 375×667 — resolução amplamente usada atualmente.
- **Tablet**: 768×1024 — opcional, apenas validação de overflow.

## 9. Critérios de entrada e saída

### Entrada
- Repositório com o projeto configurado.
- Herdade Node.js ≥ 18.

### Saída
- Execução local bem-sucedida.
- Relatório HTML gerado.
- Artefatos: screenshots de falha, trace, logs.
- Pipeline ativo no GitHub Actions.

## 10. Limitantes conhecidos

- O caso da aplicação não tem backend real. Os dados são estáticos ou simulados.
- Alguns componentes (dropdown focus-gated, elementos flaky) são intencionalmente difíceis de automatizar de forma estável.
- A análise de acessibilidade é feita via axe, que não garante conformidade WCAG por completo.

## 11. Próximos passos

1. Configurar ambiente (Playwright + TypeScript) e repositório.
2. Implementar testes (jornada principal, form, assíncrono, negativo, acessibilidade, mobile).
3. Configurar pipeline CI.
4. Executar, gerar relatório e ajustar até verificar.
5. Revisar plano e decisões com o case.

## 12. Uso de IA

IA auxiliou na estrutura de documentação, na análise de risco e na sugestão de cenários. O código final, seletores e decisões de arquitetura foram validados manualmente.
