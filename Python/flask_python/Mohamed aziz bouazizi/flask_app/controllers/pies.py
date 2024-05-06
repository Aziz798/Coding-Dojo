from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.pie import Pie


@app.route('/dashboard')
def dashboard():
    if not 'user_id' in session:
        return redirect('/')
    all_pies=Pie.get_all_pies()
    return render_template('dashboard.html', all_pies=all_pies)

@app.post('/pies/create')
def creation_of_pies():
    if Pie.validate(request.form):
        data={**request.form,'user_id':int(session['user_id'])}
        db_return=Pie.create(data)
        return redirect("/dashboard")
    return redirect("/dashboard")

@app.post('/delete/<int:id>')
def deletion(id):
    Pie.destroy({'id':id})
    return redirect('/dashboard')

@app.route('/pies')
def get_the_pies():
    the_pies=Pie.get_all_pies_with_poster()
    print(the_pies)
    
    return render_template("pies.html",the_pies=the_pies)

@app.route('/show/<int:id>')
def show_the_pie(id):
    the_pie=Pie.get_by_id({'id':id})
    
    return render_template('show_the_pie.html',the_pie=the_pie)
@app.post("/add_like/<int:id>")
def add_the_lke(id):
    Pie.add_likes({"id":id})
    return redirect('/pies')


@app.route('/edit/<int:id>')
def edit_the_pie(id):
    the_pie=Pie.get_by_id({'id':id})
    return render_template('edit_the_pie.html',the_pie=the_pie)

@app.post('/pie/edit/<int:id>')
def edition(id):
    Pie.update({'id':id,**request.form})
    return redirect ('/dashboard')