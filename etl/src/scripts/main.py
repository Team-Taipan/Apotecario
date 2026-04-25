import pandas as pd
import sys
import os

# Adiciona a pasta 'src' ao caminho de busca do Python
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import transformacao as t # script com as etapas de transformação de dados

# Abrido o arquivo CSV
medicamentos = pd.read_csv("../data/TA_RESTRICAO_MEDICAMENTO.csv", encoding="latin1", sep=';',  on_bad_lines='skip')

# Limpeza

# Limpeza no DataFrame Geral
medicamentosLimpos = t.filtrar_dados_inicial_medicamento(medicamentos)
medicamentosLimpos = t.padronizar_dados_generico(medicamentosLimpos)
medicamentosLimpos = t.finalizar_dados_medicamento(medicamentosLimpos)

# Sessão para campos unicos em Tabelas Especificas
medicamentosUnicos = t.criar_dados_unicos_tabelas_e_gerar_id(medicamentosLimpos, "NO_PRODUTO", "ID_PRODUTO")

PrincipiosUnicos = t.criar_dados_unicos_tabelas_e_gerar_id(medicamentosLimpos, "NO_PRINICIPIO_ATIVO", "ID_PRINCIPIO_ATIVO")

FormasUnicas = t.criar_dados_unicos_tabelas_e_gerar_id(medicamentosLimpos, "DS_FORMA_FISICA", "ID_FORMA_FISICA")

ConcentracoesUnicas = t.criar_dados_unicos_tabelas_e_gerar_id(medicamentosLimpos, "DS_CONCENTRACAO", "ID_CONCENTRACAO")

# Para caso precisarmos consultar (metodo para remover dados duplicados e metodos para remover o antigo index do DataFrame) usados na função:
# REF: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html
# REF: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.reset_index.html

print(medicamentosUnicos)
print(PrincipiosUnicos)
print(FormasUnicas)
print(ConcentracoesUnicas)