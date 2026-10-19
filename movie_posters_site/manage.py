import sys
from app import app
from typing import Any

COMMANDS: dict[str,Any] = {
    "runserver": app.run(port=3000, debug=True)
}

if (__name__ == "__main__"):
    if (len(sys.argv) > 0):
        COMMANDS[sys.argv[0]]