import sys
# import app from views because that's how we'll run the server via manage.py
from views import app
from typing import Any

# there are the commands we can put in the terminal to run them
COMMANDS: dict[str,Any] = {
    # in terminal type: python manage.py runserver
    # this runs the flask server
    "runserver": app.run(port=3000, debug=True)
}

# terminal--> any argument

if (__name__ == "__main__"):
    # if there are any commands in the terminal
    if (len(sys.argv) > 0):
        # execute that command (if it exists)
        # else just throw a warning in the console
        try:
            COMMANDS[sys.argv[0]]
        except KeyError as e:
            print(
                "***This command doesn't currently exist***",
                "Update COMMANDS to include the requested command",
                sep="/n"
            )