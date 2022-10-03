import requests


url = 'http://localhost:7071/processos/'
headers = {"Content-Type": "application/json; charset=utf-8"}

data={
    'conteudo':'contAAAAAAAA',
    'idUsuario':'1'
}

r=requests.post(url, headers=headers, json=data)

print("Status Code", r.status_code)
print("JSON Response ", r.json())

