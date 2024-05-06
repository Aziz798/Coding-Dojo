from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
class Pie:
    def __init__(self,data):
        self.id=data['id']
        self.user_id=data['user_id']
        self.name=data['name']
        self.filling=data['filling']
        self.crust=data['crust']
        self.votes=data['votes']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.owner=""

    @classmethod
    def create(cls,data):
        query="""INSERT INTO pies (user_id,name,filling,crust)
            VALUES (%(user_id)s,%(name)s,%(filling)s,%(crust)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all_pies(cls):
        query="SELECT * FROM pies;"
        result=connectToMySQL(DATABASE).query_db(query)
        all_pies=[]
        for pie in result:
            all_pies.append(cls(pie))
        return all_pies

    @classmethod
    def get_all_pies_with_poster(cls):
        query="SELECT pies.*,first_name,last_name FROM pies JOIN users ON pies.user_id=users.id ORDER BY votes;"
        result=connectToMySQL(DATABASE).query_db(query)
        print(result)
        all_pies=[]
        for pie in result:
            parti=cls(pie)
            parti.owner=pie['first_name']+" "+pie['last_name']
            all_pies.append(parti)
        return all_pies
    

    @classmethod
    def add_likes(cls,data):
        query='update pies SET votes=votes+1 WHERE id=%(id)s;'
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_by_id(cls,data):
        query="""SELECT pies.*,first_name,last_name FROM pies JOIN users ON pies.user_id=users.id WHERE pies.id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        all_pies=result[0]
        if result:
            return all_pies
        return None

    @classmethod
    def get_all_user_pies(cls,data):
        query="""SELECT pies.*,first_name,last_name FROM pies JOIN users ON pies.user_id=users.id WHERE pies.id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        all_pies=[]
        if result:
            for pie in result:
                parti=cls(pie)
                parti.owner=pie['first_name']+" "+pie['last_name']
            return all_pies
        return None


    @classmethod
    def update(cls,data):
        query="""UPDATE pies SET name=%(name)s,filling=%(filling)s,crust=%(crust)s
                WHERE id=%(id)s; """
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def destroy(cls,data):
        query="DELETE FROM pies WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    

    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<2:
            is_valid=False
            flash("Pie Name is required")
        if len(data['filling'])<2:
            is_valid=False
            flash("Pie Fillings is required")
        if len(data['crust'])<3:
            is_valid=False
            flash("Pie Crust isrequired")
        return is_valid