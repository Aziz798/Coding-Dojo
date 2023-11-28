from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models.dojo import Dojo
class Ninja:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.age=data_dict['age']
        self.dojo_id=data_dict['dojo_id']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
        self.row={}
    @classmethod
    def get_all_ninjas(cls):
        query="SELECT * FROM new_dojos_and_ninjas.ninjas;"
        result_db=connectToMySQL(DATABASE).query_db(query)
        all_ninjas=[]
        for ninja in result_db:
            all_ninjas.append(Ninja(ninja))
        return all_ninjas
    
    @classmethod
    def create_ninja(cls,data):
        query="""INSERT INTO new_dojos_and_ninjas.ninjas(first_name,last_name,age,dojo_id)
                    VALUES(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);"""
        result_db=connectToMySQL(DATABASE).query_db(query,data)
        return result_db
    
    @classmethod
    def ninjas_with_dojo(cls,data):
        query="""SELECT * FROM ninjas  WHERE dojo_id = %(id)s;"""
        result_db=connectToMySQL(DATABASE).query_db(query,data)
        print(result_db)
        ninjas_in_the_dojo=[]
        for ninja in result_db:
            ninjas_in_the_dojo.append(cls(ninja))
        return ninjas_in_the_dojo
    # @classmethod
    # def get_dojos_name(cls):
    #     query='SELECT id,name FROM new_dojos_and_ninjas.dojos; '
    #     result=connectToMySQL(DATABASE).query_db(query)
    #     print('😁😁'*5,result)


    #     return 