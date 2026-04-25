import utils.limpezaUtils as u # script com as funções genericas que nao mexem com o DataFrame


# Filtragem inicial dos Dados
def filtrar_dados_inicial_medicamento(dataFrame) :

   obrigatorias = ["NO_PRODUTO", "DS_FORMA_FISICA"]

    # Filtrando apenas medicamentos de uso não hospitalar
   dataFrame = dataFrame[dataFrame["ST_RESTRITO_HOSPITAL"].str.lower() != "sim"]

   # Filtrar apenas medicamentos com destinação comercial, institucional ou com campos nulos
   dataFrame = dataFrame[dataFrame["DS_DESTINACAO"].str.lower().isin(["comercial", "institucional"]) | dataFrame["DS_DESTINACAO"].isna()]

    # Excluindo as linhas onde as colunas obrigatórias não podem estar vazias
   dataFrame = dataFrame.dropna(subset=obrigatorias)

   return dataFrame


# Padronizar Generico, aplicável a todos os dados
def padronizar_dados_generico(dataFrame):

    colunas = [ "NO_PRODUTO", "NO_PRINICIPIO_ATIVO", "DS_FORMA_FISICA"]

    # obs: o nome comercial do produto vai virar maiscula apenas na funcao finalizar dados
    # Colocando em case minuscula por comotidade manterei lower-case ate lá
    for nomeCol in colunas: 
        dataFrame[nomeCol] = dataFrame[nomeCol].str.lower()

    # Removendo Acentos
    for nomeCol in colunas:
        dataFrame[nomeCol] = dataFrame[nomeCol].apply(u.removerAcentos)

    
    return dataFrame

# Função para preparar os dados finais para o banco
def finalizar_dados_medicamento(dataFrame): 

# O nome comercial dos medicamentos deve ser maisculo
    dataFrame["NO_PRODUTO"] = dataFrame["NO_PRODUTO"].str.upper()

    return dataFrame

# função para remover duplicatas em uma tabela e gerar id
def criar_dados_unicos_tabelas_e_gerar_id(dataFrame, nomeColunaDados, nomeColunaId):


    # Remove registros duplicados na coluna fornecida da tabela
    tabela = dataFrame[[nomeColunaDados]].drop_duplicates().reset_index(drop=True)

    # Cria uma nova coluna ID com IDs incrementais (só será utilizado no Pandas pq no MySQL eu botei a PK pra ser auto generated)
    tabela.insert(0, nomeColunaId, range(1, len(tabela ) + 1))

    return tabela

