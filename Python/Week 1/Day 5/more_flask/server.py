from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def index():
    users=[
        {'name':'john','age':35},
        {'name':'Sarah','age':20},
        {'name':'Alex','age':15},
        {'name':'Amelia','age':50},
        {'name':'James','age':30},
        {'name':'Eric','age':20}
    ]
    return render_template("index.html", users=users)
    
@app.route('/circle')
def circle():
    return render_template("circles.html")


@app.route('/circle/<color>')
def change_color(color):
    return render_template("circles.html",color=color)


@app.route('/circle/<color>/<int:number>')
def change_color_and_number(color,number):
    return render_template("circles.html",color=color,number=number)




if __name__=="__main__":
    app.run(debug=True,port=5001)
