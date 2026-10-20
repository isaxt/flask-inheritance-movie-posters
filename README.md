# FLASK INHERITANCE MOVIE POSTERS

This is a website that utilizes a movie poster API and is hosted with flask (ordered in a similar format to django).

## HOW TO GET STARTED

### 1. Create a virtual environment 

```
> python -m venv [name]
```

### 2. Run the environment 

*WINDOWS*
```
> source [name]/scripts/activate 
```
*MAC*
```
> source [name]/bin/activate 
```

### 3. Install python lib requirements 

*WINDOWS*
```
> pip install -r requirements.txt 
``` 
*MAC*
``` 
> pip3 install -r requirements.txt 
``` 

### 4. Go into the site directory 

```
> cd movie_posters_site
```

### 5. Run the server 

*WINDOWS*
```
> python manage.py runserver
```
*MAC*
```
> python3 manage.py runserver
```

### 6. Update JS files (if needed)

*One time update*
```
> npx tsc
```
*Continuous update*
```
> npx tsc --watch
``` 

## PROJECT STRUCTURE

The project is built like this (miscellaneous things are omitted for clarity):

```
root/
├── movie_posters_site/
│   ├── movie_posters_site/         # Actual flask site with views, api views, and other .py files
│   │   ├── static/
│   │   │   ├── css/                # CSS style sheets
│   │   │   ├── decals/             # Assets
│   │   │   ├── js/                 # Compiled JavaScript, declarations, and source maps
│   │   │   └── ts/
│   │   ├── templates/              # Template files that are served
│   │   ├── __init__.py
│   │   ├── app.py                  # Inits flask instance
│   │   ├── views.py                # Standard url routes
│   │   └── views_api.py            # Api url routes
│   ├── manage.py                   # Server starter + terminal command executioner
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── requirements.txt
```
