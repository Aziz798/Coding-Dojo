from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Rcp:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instructions=data["instructions"]
        self.date=data["date"]
        self.under=data["under"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.user_id=data["user_id"]
        self.poster={}


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM rcps JOIN users ON users.id=rcps.user_id;"
        results = connectToMySQL(DATABASE).query_db(query)
        rcps= []
        print(results)
        for rcp in results:
            # rcpi=cls(rcp)
            # rcp.first_name=rcp['first_name']
            rcps.append(rcp)
        print("********recipes*********",rcps)
        return rcps
    

    @classmethod
    def save(cls, data):
        query = "INSERT INTO rcps (name,description,instructions,date,under,user_id) VALUES (%(name)s,%(description)s,%(instructions)s,%(date)s,%(under)s,%(user_id)s);"

        # comes back as the new row id
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    @classmethod
    def update(cls,data):
        query = """UPDATE rcps 
                SET name=%(name)s,description=%(description)s,instructions=%(instructions)s, date=%(date)s,under=%(under)s
                WHERE id = %(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
    

    @classmethod
    def get_name_user_id(cls,data):
        query=""" 
                SELECT first_name FROM users LEFT JOIN rcps ON rcps.user_id = users.id WHERE user_id=%(user_id)s ;
                """
        result= connectToMySQL(DATABASE).query_db(query,data)
        print(cls(result[0]))
        if result:
            return cls(result[0])
        return None

    @classmethod
    def get_by_id_rcp(cls,data):
        query="SELECT * FROM rcps WHERE id=%(rcp_id)s;"
        result= connectToMySQL(DATABASE).query_db(query,data)
        print(result,"😊")
        print("****RECIPE****",cls(result[0]))
        #if len(result)<1:
            #return False
        return cls(result[0]) 
    
    @classmethod
    def delete(cls,data):
        query  = "DELETE FROM rcps WHERE id = %(id)s;"
        data = {"id": data}
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_name_user_id(cls,data):
        query=""" 
                SELECT first_name FROM users LEFT JOIN rcps ON rcps.user_id = users.id WHERE user_id=%(user_id)s ;
                """
        result= connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None 
    @classmethod
    def get_name_of_poster(cls,data):
        query="SELECT first_name FROM users JOIN rcps ON users.id=rcps.user_id WHERE rcps.user_id=%(user_id)s;"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return()


    @staticmethod
    def validate_rcp(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("name Required !", "reg")
        if len(data["description"]) < 1:
            flash("descrption Required !")
            is_valid = False
        if len(data["instructions"]) < 1:
            flash("instructions Required !")
            is_valid = False    
        
        return is_valid
    