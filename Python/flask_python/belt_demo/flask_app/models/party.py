from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Party:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.user_id=data_dict['user_id']
        self.title=data_dict['title']
        self.location=data_dict['location']
        self.date=data_dict['date']
        self.all_ages=data_dict['all_ages']
        self.description=data_dict['description']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
        

    @classmethod
    def everything(cls):
        query="SELECT * FROM parties;"
        result=connectToMySQL(DATABASE).query_db(query)
        partiees=[]
        for party in result:
            partiees.append(cls(party))
            return partiees


    @classmethod
    def create(cls,data):
        query="""INSERT INTO parties (user_id,title,location,date,all_ages,description)
            VALUES (%(user_id)s,%(title)s,%(location)s,%(date)s,%(all_ages)s,%(description)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    

    # @classmethod
    # def get_all_parties_with_poster(cls):
    #     query="SELECT parties.*,first_name,last_name FROM  JOIN users ON parties.user_id=belt_demo.users.id;"
    #     result=connectToMySQL(DATABASE).query_db(query)
    #     print("AllParties********",result)
    #     all_parties=[]
    #     for party in result:
    #         parti=cls(party)
    #         parti.owner=party['first_name'] +party['last_name']
    #         all_parties.append(parti)
    #     return all_parties
    

        

    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM parties WHERE id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None


    @classmethod
    def get_all_user_parties(cls,data):
        query="""SELECT * FROM parties WHERE user_id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        user_parties=[]
        for party in result:
            user_parties.append(cls(party))
        return user_parties
    

    @classmethod
    def update(cls,data):
        query="""UPDATE parties SET title=%(title)s,location=%(location)s,date=%(date)s,all_ages=%(all_ages)s,description=%(description)s
                WHERE id=%(id)s; """
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def destroy(cls,data):
        query="DELETE FROM parties WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)


    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['title'])<2:
            is_valid=False
            flash("Party Title is required")
        if len(data['location'])<2:
            is_valid=False
            flash("Party Location is required")
        if len(data['description'])<10:
            is_valid=False
            flash("Party Description is atleast 10")
        if data['date']=='':
            is_valid=False
            flash("Party Date is required")
        return is_valid