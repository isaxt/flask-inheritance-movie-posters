## FLASK INHERITANCE MOVIE POSTERS

This is a website that utilizes a movie poster API and is hosted with flask (ordered in a similar format to django).

### HOW TO GET STARTED

**Create a virtual environment** 
`> python -m venv [name]`

**Run the environment**
[windows - git bash]`> source [name]/scripts/activate ` | [mac - bash]`> source [name]/bin/activate `

**Install python lib requirements**
[windows - git bash]`> pip install -r requirements.txt ` | [mac - bash]`> pip3 install -r requirements.txt`

**Go into the site directory**
`> cd movie_posters_site`

**Run the server**
[windows - git bash]`> python manage.py runserver` | [mac - bash]`> python3 manage.py runserver`

**Update JS files (if needed)**
[one time update]`> npx tsc` | [continuous update] `> npx tsc --watch`

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