from datetime import datetime
from pathlib import Path

import pandas as pd
from flask import render_template

from .app import app_bp

# create our url routes and their logic here

# home page
@app_bp.route("/")
def index() -> str:
    return render_template("index.html")

# about page
@app_bp.route("/about")
def about() -> str:
    return render_template("about.html")

# ratings page
@app_bp.route("/ratings")
def ratings() -> str:
    return render_template("ratings.html")

# tickets page
@app_bp.route("/tickets")
def tickets() -> str:
    return render_template("tickets.html")



