from flask import Flask, Blueprint

# create our app to allow us to host the site over here
# this will be imported in the other python files
app = Flask(__name__)

# a good practice is to use blueprints for views routing over the app object itself (even though it's like an alias for app)
app_bp = Blueprint("main", __name__)

# load the views here, you have to do it before registering the blueprint
from . import views, views_api

# now register the blueprint in the app
app.register_blueprint(app_bp)