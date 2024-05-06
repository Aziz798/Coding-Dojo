from flask_app import app
from flask import render_template ,redirect,request,flash,session
from flask_app.models.pokemon import Pokemon
from flask_bcrypt import Bcrypt