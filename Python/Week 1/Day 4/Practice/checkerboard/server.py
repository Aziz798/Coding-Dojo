from flask import Flask,render_template
app = Flask(__name__)


@app.route('/')
def cherker():
    return render_template("index.html")


@app.route('/<int:x>')
def display(x):
    return render_template("index1.html",x=x)


@app.route('/<int:x>/<int:y>')
def display_again(x,y):
    return render_template("index2.html",x=x,y=y)


@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def change_color(x,y,color1,color2):
    return render_template("index3.html",x=x,y=y,color1=color1,color2=color2)

if __name__=="__main__":
    app.run(debug=True, port=3500)
