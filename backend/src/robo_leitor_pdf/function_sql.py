SQL_ATUALIZA_SOLICITACAO = 'UPDATE solicitacao SET tipo=%s, descricao=%s, data_solicitacao=%s where id = %s'
SQL_BUSCA_SOLICITACAO = 'SELECT id_solicitacao, categoria_solicitacao, descricao_solicitacao, data_abertura FROM solicitacoes INNER JOIN categoria_solicitacoes ON solicitacoes.fk_categoria_solicitacao = categoria_solicitacoes.id_categoria_solicitacao'

class SolicitaDao:
    def __init__(self, db):
        self.__db = db


    def listar(self):
        cursor = self.__db.connection.cursor()
        cursor.execute(SQL_BUSCA_SOLICITACAO)
        # solicitacoes = (cursor.fetchall())
        # print(solicitacoes[0])
        solicitacoes = traduz_solicitacoes(cursor.fetchall())
        return solicitacoes


def traduz_solicitacoes(solicitacoes):
    def cria_solicitacao_com_tupla(tupla):
        return Solicita(tupla[1], tupla[2], tupla[3], id=tupla[0])
    return list(map(cria_solicitacao_com_tupla, solicitacoes))
