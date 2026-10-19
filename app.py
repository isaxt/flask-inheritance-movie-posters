from datetime import datetime
from pathlib import Path

import pandas as pd
from flask import Flask, render_template, request

app = Flask(__name__)


if __name__ == "__main__":
    app.run(debug=True, port=2000)