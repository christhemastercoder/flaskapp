from flask import Flask, request
import time
import pyodbc as po
# from dbConnector import p1, p2, p3
import user_db as DB

app = Flask(__name__)

@app.route('/time')
def get_curr_time():
    return {'time' : time.time()}

@app.route('/')
def origin():
    return 'hello world'

# @app.route('/staff1')
# def get_staff():
#     return p1

# @app.route('/staff2')
# def get_staff2():
#     return p2

# @app.route('/staff3')
# def get_staff3():
#     return p3

@app.route('/staff1')
def get_staff1():
    return DB.getMemDB(1)

@app.route('/staff2')
def get_staff2():
    return DB.getMemDB(2)

@app.route('/staff3')
def get_staff3():
    return DB.getMemDB(3)
    
@app.route('/newPerson', methods = ['POST'])
def add_person():
    name = request.form['name']
    age = request.form['age']
    job = request.form['job']
    id = request.form['id']
    DB.addPerson(name, age, job, id)
    return '', 204

# @app.route('/delPerson', methods = ['DELETE'])
# def remove_person():
#     id = request.form['id']
#     # DB.removePerson(id)
#     return '', 204