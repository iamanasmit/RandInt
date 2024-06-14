import requests

url = 'http://127.0.0.1:8000/api/get_credentials/'
data = {
    'username': 'newuser',
    'password': 'securepassword'
}

response = requests.post(url, json=data)
print(response.status_code)
print(response.json())
