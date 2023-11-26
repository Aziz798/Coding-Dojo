from flask_app.config.mysqlconnection import connectToMySQL
class User:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.email=data_dict['email']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
    
    @classmethod
    def get_all(cls):
        query="SELECT * FROM users1.users;"
        db_result=connectToMySQL('users1').query_db(query)
        all_users=[]
        for user in db_result:
            user=cls(user)
            all_users.append(user)
        return all_users
    
    @classmethod
    def create(cls,data_dict):
        query="""INSERT INTO  users1.users (first_name,last_name,email)
                VALUES
                (%(first_name)s,%(last_name)s,%(email)s);
            """
        db_result=connectToMySQL('users1').query_db(query,data_dict)
        return db_result
    @classmethod
    def update(cls,data):
        query ="UPDATE users1.users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('users1').query_db(query,data)
    
    @classmethod
    def delete(cls, data):
        query  = "DELETE FROM users1.users WHERE id = %(id)s;"
        return connectToMySQL('users1').query_db(query, data)
    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM users WHERE id = %(id)s";
        result = connectToMySQL('users1').query_db(query,data)
        return cls(result[0])