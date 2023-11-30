from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.user import User

@app.route('/')
def home():
    return render_template('index.html')

@app.post('/result')
def create():
    if not User.validate(request.form):
        return redirect('/')
    session['name']=request.form['name']
    new_user_id = User.creation(request.form)
    return redirect(f"/result/{new_user_id}")

@app.route('/result/<int:id>')
def get_thr_user(id):
    the_user=User.get_one_user({"id":id})
    return render_template("result.html",the_user=the_user)
