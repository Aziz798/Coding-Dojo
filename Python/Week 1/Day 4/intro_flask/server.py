from flask import Flask ,render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"



# http://127.0.0.1/
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response




# http://127.0.0.1/hello
@app.route('/hello')
def hello():
    return "Hello from server 😍😍"



# http://127.0.0.1/hello/user
@app.route('/hello/user')
def say_hello():
    return "<h1>Hello James 😊😊</h1>"




# http://127.0.0.1/hello/user/<username>
@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>Hello {username} 😊😊</h1>"



# http://127.0.0.1/hello/user/<username>/<times>
@app.route('/hello/user/<username>/<int:times>')
def say_hello_usernamen_times(username,times):
    return f"<h1>Hello {username} 😊😊</h1>"*times





# http://127.0.0.1/hello/user/<username>/<age>
@app.route('/user/<username>/<int:age>')
def user_name(username,age):
    return f"<h1>USERNAME: {username} </br> Age: {age}</h1>"




# http://127.0.0.1/index
@app.route('/index')
def template():
    return render_template("index.html")






# http://127.0.0.1/index/<username>/<age>
@app.route('/index/<username>/<int:age>')
def template_add(username,age):
    users=[
        {'name':'john','age':'35'},
        {'name':'Sarah','age':'20'},
        {'name':'Alex','age':'15'},
        {'name':'Amelia','age':'50'},
        {'name':'James','age':'30'},
        {'name':'Eric','age':'21'}
    ]
    return render_template("index2.html",username=username,age=age,users=users)



if __name__=="__main__":
    app.run(debug=True)
