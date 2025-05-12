/** @typedef {import('prettier').Config} PrettierConfig */
/** @type {PrettierConfig} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,          // Largura máxima da linha antes de quebrar
  tabWidth: 2,             // Número de espaços por tabulação
  useTabs: false,          // Usa espaços em vez de tabs
  semi: false,             // Não adiciona ponto-e-vírgula no final das linhas
  singleQuote: true,       // Usa aspas simples em vez de aspas duplas
  quoteProps: 'as-needed', // Só coloca aspas em propriedades de objeto quando necessário
  jsxSingleQuote: false,   // Não usa aspas simples em JSX (corrigido o nome do parâmetro)
  trailingComma: 'es5',    // Adiciona vírgula final em objetos/arrays seguindo padrão ES5
  bracketSpacing: true,    // Adiciona espaço entre colchetes e chaves (corrigido o nome)
  endOfLine: 'auto',       // Mantém o padrão de fim de linha do sistema
  bracketSameLine: false,  // Coloca o > em uma nova linha em tags JSX/HTML (corrigido o nome e valor)
  arrowParens: 'avoid',    // Omiti parênteses em arrow functions com um único parâmetro (adicionado)
}

export default config