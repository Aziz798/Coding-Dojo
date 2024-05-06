from flask_app.config.mysqlconnection import connectToMySQL


class Movie:
    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.year = data["year"]
        self.filmmaker_id = data["filmmaker_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def getall(cls):
        query = "SELECT * FROM movies;"
        result = connectToMySQL("filmmaker_db").query_db(query)
        movies = []
        for row in result:
            movies.append(cls(row))
        return movies

    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO movies (title,year,filmmaker_id) 
                VALUES (%(title)s , %(year)s , %(filmmaker_id)s);
                """
        return connectToMySQL("filmmaker_db").query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = """
                SELECT * FROM movies WHERE id = %(id)s;
                """
        result = connectToMySQL("filmmaker_db").query_db(query, data)
        return cls(result[0])

    @classmethod
    def get_movies_by_filmmaker_id(cls, data):
        query = """
                SELECT * FROM movies JOIN filmmakers
                ON movies.filmmaker_id = %(filmmaker_id)s 
                WHERE filmmakers.id= %(filmmaker_id)s;
                """
        result = connectToMySQL("filmmaker_db").query_db(query, data)
        movies = []
        for row in result:
            movies.append(cls(row))
        return movies

    @classmethod
    def update_movie(cls, data):
        query = """
                UPDATE movies SET title = %(title)s , year = %(year)s
                WHERE id = %(id)s;
                """
        return connectToMySQL("filmmaker_db").query_db(query, data)

    @classmethod
    def delete_movie(cls, data):
        query = """
                DELETE FROM movies WHERE id = %(id)s;
                """
        return connectToMySQL("filmmaker_db").query_db(query, data)
