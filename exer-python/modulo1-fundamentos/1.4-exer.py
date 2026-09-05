# 4- Peça um valor em segundos e converta para horas, minutos e segundos.

segundosInput = float(input("Digite os segundos"))

minutos = segundosInput/60
horas = minutos/60

print(f"Horas: {horas}, minutos: {minutos}, Segundos: {segundosInput}")