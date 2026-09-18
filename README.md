# 🧮 Calculadora Next.js

Uma calculadora desenvolvida com **Next.js**, **React** e **Tailwind CSS**, criada para praticar gerenciamento de estado, lógica de operações matemáticas e construção de interfaces interativas.

## 📌 Sobre o projeto

Esta aplicação permite realizar operações matemáticas básicas por meio de uma interface simples e responsiva.

O projeto foi desenvolvido como parte do meu portfólio para demonstrar conhecimentos em:

- React e componentes funcionais
- Hooks, especialmente `useState`
- Manipulação de eventos
- Lógica condicional
- Operações matemáticas
- Estilização com Tailwind CSS
- Desenvolvimento com Next.js

## 🚀 Funcionalidades

- Adição (`+`)
- Subtração (`-`)
- Multiplicação (`x`)
- Divisão (`/`)
- Números decimais
- Botão para apagar o último caractere (`DEL`)
- Botão para limpar a calculadora (`RESET`)
- Cálculo do resultado com o botão (`=`)
- Substituição de operadores consecutivos
- Cálculos intermediários ao selecionar novos operadores
- Tratamento de divisão por zero com a mensagem `Erro`

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript
- HTML
- CSS

## 📂 Estrutura principal

O componente principal da calculadora contém:

- **`startValue()`**: identifica qual botão foi pressionado e direciona a ação.
- **`displayCalc()`**: controla a expressão exibida no visor.
- **`addNumero()`**: adiciona números ao valor atual.
- **`addOperador()`**: gerencia os operadores e realiza cálculos intermediários.
- **`calcular()`**: executa a operação final.
- **`colors()`**: define estilos específicos para determinados botões.

## 🧠 Conceitos praticados

Durante o desenvolvimento, foram praticados conceitos importantes do React e do JavaScript, como:

- Gerenciamento de estado com `useState`
- Atualização de estados usando funções de callback
- Uso de `parseFloat()` para conversão de valores
- Verificação de caracteres com `includes()` e `slice()`
- Renderização de listas com `.map()`
- Uso de funções para separar responsabilidades
- Controle de operações matemáticas com `switch`
- Aplicação dinâmica de classes CSS


## 🔗 Links

- **Demo online:** [Ver o projeto](https://cal-ruddy-tau.vercel.app/)


## 📚 Melhorias futuras

- Adicionar suporte ao teclado do computador
- Melhorar o tratamento de erros
- Adicionar histórico de operações
- Implementar um botão para alternar sinais positivos e negativos
- Melhorar a responsividade para diferentes tamanhos de tela
- Adicionar testes para validar as operações
- Aprimorar a acessibilidade dos botões e do campo de exibição

## 👨‍💻 Autor

Desenvolvido por **Gustavo Oliveira** como projeto de prática e composição de portfólio em desenvolvimento front-end.
