from datetime import datetime
from pathlib import Path

import pandas as pd
from flask import Flask, render_template, json

# create our app to allow us to host the site
app = Flask(__name__)

# create our url routes and their logic here
@app.route("/", methods=["GET","POST"])
def index() -> str:
    return render_template("index.html")

