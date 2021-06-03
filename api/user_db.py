import pyodbc as po
from flask import jsonify
#Connection Variables
server = '127.0.0.1,1433'
database = 'People'
username = 'sa'
password = '615Laurafc!@'

#Connection string
cnxn = po.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
        server+';DATABASE='+database+';UID='+username+';PWD=' + password)
cursor = cnxn.cursor()


def getMemDB(id):
    cursor.execute("SELECT * FROM [People].[dbo].[Staff] WHERE id="+str(id))
    row = cursor.fetchone()
    res = str(row[0]) + ", " + str(row[1]) + ", " + str(row[2])
    return res

def addPerson(name, age, position, id):
    names = str(name)
    positions = str(position)
    age = str(age)
    ID = str(id)
    cursor.execute("""EXEC dbo.AddEmployee @Name=?, @Position=?, @ID=?, @AGE=?""", (names, positions, ID, age))  
    cnxn.commit()
    return

def getAllPeople():
    cursor.execute("""EXEC dbo.Get_Everybody""")
    data = []
    for row in cursor:
        strform = str(row)
        data.append(strform)
    cnxn.commit()
    for i in data:
        print(i)
    return jsonify(data)


# def removePerson(id):

