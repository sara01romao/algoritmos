MÓDULO 2 — ESTRUTURAS DE DADOS
2.1 Listas

Estudar: criação, indexação, slicing, métodos (append, remove, pop, sort, reverse), list comprehension.

Exercícios de lógica:

1- Crie uma lista de 10 números e calcule a soma, média, maior e menor valor sem usar funções prontas (sum, max, min).
2- Remova elementos duplicados de uma lista.
3- Inverta uma lista sem usar reverse().
4- Encontre o segundo maior número de uma lista.
5- Separe uma lista de números em duas: pares e ímpares.
6- Use list comprehension para criar uma lista com os quadrados de 1 a 20.
7 Verifique se uma lista é palíndromo (igual de trás para frente).

Projeto: Gerenciador de tarefas (To-Do List) via terminal — permite adicionar, listar, marcar como concluída e remover tarefas, usando um menu com laço while.
--------------------------------------------------------------------------------------------------------------------------

2.2 Tuplas, Sets e Dicionários

Estudar: imutabilidade de tuplas, operações de conjunto (união, interseção, diferença), pares chave-valor em dicionários, métodos .keys(), .values(), .items().

Exercícios de lógica:

1- Dado dois conjuntos de nomes, encontre quais estão em ambos (interseção).
2- Crie um dicionário que conte a frequência de cada letra em uma palavra.
3- Crie um dicionário de um cadastro de contatos (nome → telefone) e implemente busca por nome.
4- Some os valores de um dicionário representando um carrinho de compras (produto → preço).
5- Converta uma lista de tuplas [(nome, idade), ...] em um dicionário {nome: idade}.

Projeto: Agenda de contatos com dicionário aninhado — cada contato tem nome, telefone e e-mail; permite adicionar, editar, buscar e remover contatos, salvando os dados em um arquivo JSON (introdução leve ao módulo json).
------------------------------------------------------------------------------------------------------------------------

2.3 Strings avançado

Estudar: fatiamento, métodos (.split(), .join(), .replace(), .strip(), .format(), f-strings), manipulação de texto.

Exercícios de lógica:

1- Verifique se uma palavra é um palíndromo (ex: "arara").
2- Conte quantas vogais existem em uma frase.
3- Inverta cada palavra de uma frase sem inverter a ordem das palavras.
4- Verifique se duas palavras são anagramas.
5- Faça um contador de palavras de um texto.
6- Crie um "criptografador" simples usando cifra de César (deslocar letras do alfabeto).

Projeto: Validador de senha — verifica se uma senha atende critérios (mínimo de caracteres, letra maiúscula, número, caractere especial) e dá feedback específico sobre o que falta.