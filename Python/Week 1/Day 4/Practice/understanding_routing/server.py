from flask import Flask
app=Flask(__name__)



@app.route('/')
def hello():
    return "Hello World!"


@app.route('/dojo')
def dojo():
    return "Dojo"


@app.route('/say/flask')
def say():
    return "Hi Flask!"


@app.route('/say/michael')
def name():
    return "Hi Michael!"



@app.route('/say/jhon')
def jhon():
    return "Hi Jhon!"



@app.route('/repeat/35/hello')
def rep():
    return "hello"*35



@app.route('/repeat/<int:num>/bye')
def repeat(num):
    return "bye"*num




@app.route('/repeat/99/<dogs>')
def dog(dogs):
    return dogs*99



@app.errorhandler(404)
def page_not_found(e):
    return 'Sorry! No response. Try again.', 404



if __name__=="__main__": 
    app.run(debug=True) 