from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Book:
    def __init__(self,data):
        self.id=data['id']
        self.title=data['title']
        self.num_pages=data['num_pages']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def get_all_books(cls):
        query='SELECT * FROM books;'
        result=connectToMySQL(DATABASE).query_db(query)
        all_books=[]
        for book in result:
            all_books.append(cls(book))
        return all_books
    @classmethod
    def create_book(cls,data):
        query="""INSERT INTO books (title,num_pages) VALUES(%(title)s,%(num_pages)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    