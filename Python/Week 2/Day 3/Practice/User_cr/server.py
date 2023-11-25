from flask import Flask,render_template,redirect,request
from users import User
app=Flask(__name__)


@app.route('/')
def direct():
    return redirect('/users')


@app.route('/users')
def users():
    users=User.get_all()
    return render_template('index.html',users=users)



@app.route('/users/new')
def user():
    return render_template('new_user.html')


@app.post("/new_user")
def save():
    data={
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'email':request.form['email']
        }
    User.create(data)
    return redirect('/users')



if __name__=='__main__':
    app.run(debug=True,port=2500)
