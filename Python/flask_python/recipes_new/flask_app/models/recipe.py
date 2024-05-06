from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Recipe:
    def __init__(self,data):
        self.id=data['id']
        self.user_id=data['user_id']
        self.name=data['name']
        self.description=data['description']
        self.instructions=data['instructions']
        self.date=data['date']
        self.under=data['under']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.owner=data['first_name']

    @classmethod
    def get_all_recipes_with_maker(cls):
        query="""SELECT recipes.*, users.first_name
                FROM recipes
                JOIN users ON users.id = recipes.user_id;"""
        result=connectToMySQL(DATABASE).query_db(query)
        all_recipes=[]
        for recipe in result:
            all_recipes.append(Recipe(recipe))
        return all_recipes
    
    @classmethod
    def create_new_recipe(cls,data):
        query="""INSERT INTO recipes(name,user_id,description,instructions,date,under) VALUES
                (%(name)s,%(user_id)s,%(description)s,%(instructions)s,%(date)s,%(under)s)"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<2:
            is_valid=False
            flash("Name is required")
        if len(data['description'])<10:
            is_valid=False
            flash("Description is atleast 10")
        if data['date']=='':
            is_valid=False
            flash("Party Date is required")
        return is_valid
    