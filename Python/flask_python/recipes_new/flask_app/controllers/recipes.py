from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.recipe import Recipe

@app.route('/dashboard')
def dashboard():
    if not 'user_id' in session:
        return redirect('/')
    all_recipes=Recipe.get_all_recipes_with_maker()
    return render_template('dashboard.html', all_recipes=all_recipes)

@app.route('/recipes/new')
def new_recipe():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_recipe.html')

@app.post('/recipes/create')
def creation():
    if Recipe.validate(request.form):
        data={**request.form,'user_id':int(session['user_id'])}
        db_return=Recipe.create_new_recipe(data)
        return redirect("/dashboard")
    return redirect("/recipes/new")