from mysqlconnection import connectToMySQL
class Book:
    def __init__(self,data_dict):
        self.id=data_dict["id"]
        self.title=data_dict["title"]
        self.author=data_dict["author"]
        self.description=data_dict["description"]
        self.pages=data_dict["pages"]
        self.cover=data_dict["cover"]
        self.price=data_dict["price"]
        self.genre=data_dict["genre"]
        self.is_available=data_dict["is_available"]
        self.created_at=data_dict["created_at"]
        self.updated_at=data_dict["updated_at"]

    # CRUD QUERIES = classmethods
    @classmethod
    def get_all(cls):
        query="SELECT * FROM books;"
        db_result=connectToMySQL("fullstack_db").query_db(query)
        all_books=[]
        for row in db_result:
            book=Book(row)
            all_books.append(book)
        return all_books
    @classmethod
    def create(cls,data):
        query="""INSERT INTO books(title,author,description,pages,cover,price,genre,is_available)
                VALUES
                (%(title)s,%(author)s,%(description)s,%(pages)s,%(cover)s,%(price)s,%(genre)s,%(is_available)s)
        """
        db_result=connectToMySQL("fullstack_db").query_db(query)