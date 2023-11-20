from flask import Flask , render_template

app = Flask(__name__)    



@app.route('/play/<color>/<number>')
def leveltwo(color,number):
        return render_template("boxes.html",color=color,number=number)



if __name__=="__main__":   
        app.run(debug=True)    