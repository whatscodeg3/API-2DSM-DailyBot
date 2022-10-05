import mysql.connector

db_connection = mysql.connector.connect(host="localhost", user="root", passwd="thiago123", database="midall")
cursor = db_connection.cursor()


def select(sql):
    #sql = ("SELECT id, conteudo, link, associadoId FROM processos")
    cursor.execute(sql)
    for (id, conteudo, link, associadoId) in cursor:
        return [id, link, associadoId]

def update(sql, valor, valor2):
    # sql = ("update associados set sobrenome = %s"
    #     "where id=%s")
    valor = valor
    return cursor.execute(sql,(valor,valor2))

# sql = ("update associados set sobrenome = %s"
#         "where id=%s")

# valor = "aug"
# valor2 = 2
# cursor.execute(sql,(valor,valor2))
# print(cursor.rowcount, "record updated.")
# print("\n")

  
cursor.close()
db_connection.commit()
db_connection.close()