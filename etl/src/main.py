import pandas as pd
import unicodedata # biblioteca para transformar em ASCII, removendo caracteres especiais
# Abrido o arquivo CSV
medicamentos = pd.read_csv("data/TA_RESTRICAO_MEDICAMENTO.csv", encoding="latin1", sep=';',  on_bad_lines='skip')

# Limpeza

# Filtrando apenas medicamentos de uso não hospitalar
print(medicamentos[medicamentos["ST_RESTRITO_HOSPITAL"].str.lower() != "sim"])
medicamentosLimpos = medicamentos[medicamentos["ST_RESTRITO_HOSPITAL"].str.lower() != "sim"]

# Removendo campos nulos
print(medicamentosLimpos[medicamentos["NO_PRODUTO"].notna()])
medicamentosLimpos = medicamentosLimpos[medicamentosLimpos["NO_PRODUTO"].notna()]

print(medicamentosLimpos['DS_DESTINACAO'].str.lower().unique())

# Removendo todos os medicamentos cujo o uso não seja comercial e institucional ou a coluna não esteja vazia
print(medicamentosLimpos[medicamentosLimpos["DS_DESTINACAO"].str.lower().isin(["comercial", "institucional"]) | medicamentosLimpos["DS_DESTINACAO"].isna()])
medicamentosLimpos = medicamentosLimpos[medicamentosLimpos["DS_DESTINACAO"].str.lower().isin(["comercial", "institucional"]) | medicamentosLimpos["DS_DESTINACAO"].isna()]


# Removendo acentos e padronizand capitalização
def removerAcentos(texto):
    processado = unicodedata.normalize('NFD', texto)
    limpo = "".join(c for c in processado if unicodedata.category(c) != 'Mn').lower()
    return limpo

print(medicamentosLimpos["NO_PRODUTO"].apply(removerAcentos))

# palavras = [ "teste" ]

# Removendo registros que tem certas palavras

# Ignore
# print(medicamentosLimpos['DS_DESTINACAO'].str.lower().unique())
# print(medicamentosLimpos.columns)
# print(medicamentosLimpos[medicamentosLimpos["NO_PRODUTO"] == "ABLOK"][["NO_PRODUTO", "DS_CONCENTRACAO", "DS_FORMA_FISICA"]])
# print("Total de linhas atuais:", len(medicamentosLimpos))
# print("Total de nomes únicos:", medicamentosLimpos["NO_PRODUTO"].nunique())