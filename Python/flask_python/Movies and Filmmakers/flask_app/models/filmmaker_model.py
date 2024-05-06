from flask_app.config.mysqlconnection import connectToMySQL


class Filmmaker:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def getall(cls):
        query = """SELECT * FROM filmmakers;"""
        result = connectToMySQL("filmmaker_db").query_db(query)
        filmmakers = []
        for row in result:
            filmmakers.append(cls(row))
        return filmmakers

    @classmethod
    def save(cls, data):
        query = """INSERT INTO filmmakers (name) VALUES (%(name)s);"""
        return connectToMySQL("filmmaker_db").query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = """
                SELECT * FROM filmmakers WHERE id = %(id)s;
                """
        result = connectToMySQL("filmmaker_db").query_db(query, data)
        return cls(result[0])
