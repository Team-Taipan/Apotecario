import unicodedata # biblioteca para transformar em ASCII, removendo caracteres especiais

# Removendo acentos e padronizand capitalização
def removerAcentos(texto):
    processado = unicodedata.normalize('NFD', texto)
    limpo = "".join(c for c in processado if unicodedata.category(c) != 'Mn').lower()
    return limpo