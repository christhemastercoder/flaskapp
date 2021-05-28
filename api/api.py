from flask import Flask
import time
import pyodbc as po
from dbConnector import p1, p2, p3
app = Flask(__name__)

@app.route('/time')
def get_curr_time():
    return {'time' : time.time()}

@app.route('/')
def origin():
    return 'hello world'

@app.route('/staff1')
def get_staff():
    return p1

@app.route('/staff2')
def get_staff2():
    return p2

@app.route('/staff3')
def get_staff3():
    return p3

