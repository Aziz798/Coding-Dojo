from flask import Flask,render_template,redirect,request
from book_model import Book
app=Flask(__name__)

@app.route('/')
def dashboard():
    books=Book.get_all()
    print("+"*10,books,"+"*10)
    return render_template('index.html',books=books)

@app.route('/books/new')
def new_book():
    return render_template("new_book.html")

@app.route('/books/create',methods=['post'])
def create():
    print('+*'*11,request.form,'*'*10)
    data={
        'title':request.form['title'],
        'author':request.form['author'],
        'pages':request.form['pages'],
        'price':request.form['price'],
        'genre':request.form['genre'],
        'description':request.form['description'],
        'cover':request.form['cover'],
    }
    if 'is_available' in request.form:
        data['is_available']=1
    else:
        data['is_available']=0
        book.create(data)
    return redirect('/books/new')


if __name__=='__main__':
    app.run(debug=True,port=1337)