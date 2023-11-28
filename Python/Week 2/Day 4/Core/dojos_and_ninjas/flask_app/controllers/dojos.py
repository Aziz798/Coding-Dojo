from flask_app import app
from flask import render_template,redirect,request,session
from flask_app.models.dojo import Dojo

@app.route('/')
def reroute():
    return redirect('/dojos')


@app.get('/dojos')
def dojos():
    all_dojos=Dojo.get_all_dojos()
    return render_template('dojos.html',all_dojos=all_dojos)

@app.post('/create/dojo')
def create_dojo():
    data={'name':request.form['name']}
    Dojo.create_dojo(data)
    return redirect('/dojos')

@app.route("/ninjas")
def add_ninjas():
    dojos_name=Dojo.get_all_dojos()
    return render_template('ninjas.html',dojos_name=dojos_name)

