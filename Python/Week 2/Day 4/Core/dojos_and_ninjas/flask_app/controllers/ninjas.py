from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.ninja import Ninja



@app.post('/create/ninja')
def creating():
    data={
        'dojo_id':request.form['dojo_id'],
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'age':request.form['age']
    }
    Ninja.create_ninja(data)
    redirect('/ninjas')

@app.route('/dojos/<int:id>')
def ninjas_in_the_dojo(id):
    data={'id':id}
    print(data)
    ninjas_in_here=Ninja.ninjas_with_dojo(data)
    return render_template("ninjas_in_the_dojo.html",ninjas=ninjas_in_here)

