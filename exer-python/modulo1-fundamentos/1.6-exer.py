"""Projeto: Calculadora de IMC — recebe peso e altura, calcula o índice de massa corporal e
imprime o resultado formatado com 2 casas decimais."""

peso = float(input("Digite seu peso: "))
altura= float(input("Digite sua altura: "))

imc = peso / pow(altura, 2)

print(f"IMC: {round(imc, 2)}")