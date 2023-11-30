from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.book import Book

@app.route('/books')
def show_books():
    books_all=Book.get_all_books()
    return render_template('books.html',books_all=books_all)

@app.post('/create/book')
def new_book():
    data={
        'title':request.form['title'],
        'num_pages':request.form['num_pages']
    }
    Book.create_book(data)
    return redirect('/books')