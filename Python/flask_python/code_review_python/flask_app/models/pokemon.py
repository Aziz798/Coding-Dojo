from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Pokemon:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.power=data['power']
        self.hp=data['hp']
        self.img=data['img']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.users_id=data['users_id']

    @classmethod
    def get_all_for_user(cls,data):
        query="""SELECT p.* FROM pokemons p JOIN users u ON p.users_id=u.id WHERE u.id=%(users_id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        pokemons=[]
        for pokemon in result:
            pokemons.append(cls(pokemon))
        return pokemons