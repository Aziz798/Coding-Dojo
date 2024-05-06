from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.filmmaker_model import Filmmaker
from flask_app.models.movie_model import Movie


@app.route("/")
def index():
    return render_template("index.html", filmmakers=Filmmaker.getall())


# Action route
@app.route("/create/filmmaker", methods=["POST"])
def create_filmmaker():
    data = {"name": request.form["name"]}
    filmmaker_id = Filmmaker.save(data)
    return redirect("/")


# display route
@app.route("/filmmaker/<int:filmmaker_id>")
def show_filmmaker(filmmaker_id):
    data = {"id": filmmaker_id}
    filmmaker = Filmmaker.get_by_id(data)
    data2 = {"filmmaker_id": filmmaker_id}
    filmmaker_movies = Movie.get_movies_by_filmmaker_id(data2)
    return render_template(
        "filmmaker.html", filmmaker=filmmaker, filmmaker_movies=filmmaker_movies
    )
