from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Like:
    def __init__(self,data):
        self.pie_id=data['pie_id']
        self.user_id=data['user_id']

    @classmethod
    def get_piesi(cls,data):
        query="SELECT *FROM likes WHERE user_id=%(id)s"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result