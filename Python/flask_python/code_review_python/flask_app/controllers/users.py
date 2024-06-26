from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt=Bcrypt(app)

@app.route('/')
def index():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template('index.html')

@app.post('/users/create')
def create_user():
    if(User.validate(request.form)):
        pw_hash=bcrypt.generate_password_hash(request.form['password'])
        data={
            **request.form,
            'password':pw_hash
        }
        user_id=User.create_user(data)
        session['user_id']=user_id
        return redirect('/dashboard')
    return redirect('/')

@app.post('/users/login')
def login():
    user_from_db=User.get_by_email({'email':request.form['email']})
    if(user_from_db):
        if not bcrypt.check_password_hash(user_from_db.password,request.form['password']):
            flash('Invalid Password','log')
            return redirect('/')
        session['user_id']=user_from_db.id
        return redirect('/dashboard')
    flash('Invalid Email','log')
    return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')