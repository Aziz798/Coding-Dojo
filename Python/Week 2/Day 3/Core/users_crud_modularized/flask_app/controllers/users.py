from flask_app import app
from flask import Flask,render_template,redirect,request,session,flash
from flask_app.models.user import User
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

@app.route("/user/edit/<int:id>")
def edit(id):
    data={
        'id':id
    }
    return render_template('edit_user.html',user=User.get_one(data))

@app.route("/user/update", methods=['POST'])
def updated():
    User.update(request.form)
    return redirect('/users')

@app.route('/user/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("one_user.html",user=User.get_one(data))

@app.route("/user/delete/<int:id>")
def ignore(id):
    data={
        'id':id
    }  
    User.delete(data)
    return redirect('/users')