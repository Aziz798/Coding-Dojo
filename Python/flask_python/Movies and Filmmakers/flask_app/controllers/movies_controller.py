from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.movie_model import Movie
from flask_app.models.filmmaker_model import Filmmaker


@app.route("/movies")
def getmovies():
    return render_template(
        "movies.html", movies=Movie.getall(), filmmakers=Filmmaker.getall()
    )


# Action route
@app.route("/create/movie", methods=["POST"])
def create_movie():
    data = {
        "title": request.form["title"],
        "year": request.form["year"],
        "filmmaker_id": request.form["filmmaker_id"],
    }
    movie_id = Movie.save(data)
    return redirect("/movies")


# display route
@app.route("/movie/<int:movie_id>")
def show_movie(movie_id):
    data = {"id": movie_id}
    movie = Movie.get_by_id(data)
    data2 = {"id": movie.filmmaker_id}
    filmmaker = Filmmaker.get_by_id(data2)
    return render_template("movie.html", movie=movie, filmmaker=filmmaker)


# Action route
@app.route("/movie/<int:movie_id>/edit")
def edit_movie_render(movie_id):
    data = {"id": movie_id}
    movie = Movie.get_by_id(data)
    return render_template("edit_movie.html", movie=movie)


# Action route
@app.route("/movie/<int:movie_id>/edit/submit", methods=["POST"])
def edit_movie(movie_id):
    data = {**request.form, "id": movie_id}
    Movie.update_movie(data)
    data2 = {"id": movie_id}
    movie = Movie.get_by_id(data2)
    data3 = {"id": movie.filmmaker_id}
    filmmaker = Filmmaker.get_by_id(data3)
    return render_template("movie.html", movie=movie, filmmaker=filmmaker)
