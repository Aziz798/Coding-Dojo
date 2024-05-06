from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.party import Party

@app.route('/parties/new')
def new_party():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_party.html')
@app.post('/parties/create')
def create_party():
    if Party.validate(request.form):
        data={**request.form,'user_id':int(session['user_id'])}
        db_return=Party.create(data)
        return redirect("/dashboard")
    return redirect("/parties/new")
