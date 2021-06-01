import pyodbc as po

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

def addPerson(name, age, position):
    last_id = cursor.execute("SELECT MAX(id) FROM [People].[dbo].[Staff]")
    # command = "INSERT INTO [People].[dbo].[Staff] (namee, id, position, age) VALUES('{name}', 10, '{positione}', {agee})".format(namee=name, positione=position, agee=age)
    names = str(name)
    positions = str(position)
    cursor.execute("INSERT INTO [People].[dbo].[Staff] (name, id, position, age) VALUES('" + names + "', 10, '" + positions + "', " + str(age) + ")")
 
    # cursor.execute("INSERT INTO [People].[dbo].[Staff] (name, id, position, age) VALUES('will', 10, 'temp', 20)")
  
    cnxn.commit()
    return


# def removePerson(id):

