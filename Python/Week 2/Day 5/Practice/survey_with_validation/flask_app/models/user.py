from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class User:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.name=data_dict['name']
        self.location=data_dict['location']
        self.language=data_dict['language']
        self.comment=data_dict['comment']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']

    @classmethod
    def get_one_user(cls,data):
        query="SELECT * FROM users WHERE id=%(id)s;"
        result=connectToMySQL(DATABASE).query_db(query,data)
        print(result)
        user = cls(result[0])
        return user
    
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<3:
            flash('Name too short.')
            is_valid=False
        if len(data['comment'])<10:
            flash('Comment to Short')
            is_valid=False
        return is_valid
    
    @classmethod
    def creation(cls,data):
        query= """INSERT INTO users (name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)