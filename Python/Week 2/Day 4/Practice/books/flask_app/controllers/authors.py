from flask_app import app
from flask import render_template ,redirect,request,session
from flask_app.models.author import Author

@app.route('/')
def home():
    return redirect('/authors')


@app.route('/authors')
def show_authors():
    authors_all=Author.get_all_authors()
    return render_template('authors.html',authors_all=authors_all)

@app.post('/create/author')
def new_author():
    data={
        'name':request.form['name']
    }
    Author.create_author(data)
    return redirect('/authors')

