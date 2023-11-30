from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.user import User
from flask_app.models.rcp import Rcp



#Display route dashboard
@app.route("/rcps")
def dash():
    # ! Route Guard
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    session["user_email"] = "a@a.com"
    all_rcps=Rcp.get_all()
    
    # thename=Book.gt_name_user_id(data)
    return render_template("dashboard.html", loggedin_user=loggedin_user, all_rcps=all_rcps)


#display route addnew
@app.route('/rcps/new')
def display_addnew():
    return render_template("addnew.html")

#ACTION ROUTE create new we just add another s hee and in the addnew page 
@app.route('/rcpss', methods=["POST"] )
def create_rcp():
    print(request.form)
    if not Rcp.validate_rcp(request.form):
        return redirect("/rcps/new")
    rcp_data={**request.form,"user_id":session["user_id"]}
    Rcp.save(rcp_data)
    return redirect('/rcps')







#display route edit 
@app.route('/rcps/edit/<int:id>' )
def display_edit_book(id):
    session["rcp.id"]=id
    return render_template("edit.html")


# action route edit
@app.route('/rcps/edit', methods=["POST"])
def edit():
    data={
        "id":session["rcp.id"],
        **request.form,
        "user_id":session["user_id"]
    }
    Rcp.update(data)
    return redirect("/rcps")




@app.route('/delete/rcps/<int:id>')
def delete_book(id):
    Rcp.delete(id)
    return redirect('/rcps')






#display route viewone 
@app.route('/rcps/<int:id>')
def view_one(id):
    loggedin_user = User.get_user_by_id({"id": session["user_id"]})

    food=Rcp.get_by_id_rcp({"rcp_id":id})
    print(food.__dict__)
    poster = User.get_user_by_id({"id": food.user_id})
    return render_template('viewone.html',food=food,loggedin_user=loggedin_user, poster=poster)
