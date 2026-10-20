from datetime import datetime
from pathlib import Path

import pandas as pd
from flask import render_template

from .app import app_bp

# create our url routes and their logic here
@app_bp.route("/")
def index() -> str:
    return render_template("index.html")



