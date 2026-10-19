## FLASK INHERITANCE MOVIE POSTERS

This is a website that utilizes a movie poster API and is hosted with flask (ordered in a similar format to django).

### HOW TO GET STARTED

**Create a virtual environment** <br>
`> python -m venv [name]`

**Run the environment** <br>
[windows - git bash]`> source [name]/scripts/activate ` <br>
[mac - bash]`> source [name]/bin/activate `

**Install python lib requirements** <br>
[windows - git bash]`> pip install -r requirements.txt ` <br>
[mac - bash]`> pip3 install -r requirements.txt` 

**Go into the site directory** <br>
`> cd movie_posters_site` <br>

**Run the server** <br>
[windows - git bash]`> python manage.py runserver` <br>
[mac - bash]`> python3 manage.py runserver` 

**Update JS files (if needed)** <br>
[one time update]`> npx tsc` <br>
[continuous update] `> npx tsc --watch` 

### STRUCTURE
The project is built like this (miscellaneous things are omitted for clarity):

```
root/ 
├── movie_posters_site/
│   ├── static/
|   |   ├── js/
|   |   ├── ts/
|   |   └── css/
│   ├── templates/
│   ├── manage.py
│   └── views.py
├── README.md
└── requirements.txt
```