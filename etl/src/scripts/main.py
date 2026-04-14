import pandas as pd
import sys
import os

# Adiciona a pasta 'src' ao caminho de busca do Python
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import transformacao as t # script com as etapas de transformação de dados

# Abrido o arquivo CSV
medicamentos = pd.read_csv("../data/TA_RESTRICAO_MEDICAMENTO.csv", encoding="latin1", sep=';',  on_bad_lines='skip')

# Limpeza

medicamentosLimpos = t.filtrar_dados_inicial_medicamento(medicamentos)

medicamentosLimpos = t.padronizar_dados_generico(medicamentosLimpos)

medicamentosLimpos = t.finalizar_dados_medicamento(medicamentosLimpos)


