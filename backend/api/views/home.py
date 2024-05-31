from django.http import HttpResponse
def index(req):
    return HttpResponse("<h1>Home page of API</h1>")