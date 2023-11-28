from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Dojo:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.name=data_dict['name']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']

    @classmethod
    def get_all_dojos(cls):
        query="SELECT * FROM new_dojos_and_ninjas.dojos;"
        result_db=connectToMySQL(DATABASE).query_db(query)
        all_dojos=[]
        for dojo in result_db:
            all_dojos.append(cls(dojo))
        return all_dojos
    @classmethod
    def create_dojo(cls,data):
        query="INSERT INTO dojos (name) VALUES (%(name)s);"
        result_db=connectToMySQL(DATABASE).query_db(query,data)
        return result_db

