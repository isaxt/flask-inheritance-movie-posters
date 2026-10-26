# FLASK INHERITANCE MOVIE POSTERS

This is a website that utilizes a movie poster API and is hosted with flask (ordered in a similar format to django).

## HOW TO GET STARTED

### 1. Create a virtual environment 

*WINDOWS*
```
> python -m venv [name]
```
*MAC*
```
> python3 -m venv [name]
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

### 5. Get an API_KEY/API_READ_ACCESS_TOKEN from tmdb 

*Link to register for api key is here: https://www.themoviedb.org/settings/api/request*

### 6. Create an .env file

1. Create an .env file anywhere you want, though it is recommended to do it at **root/movie_posters_site/** *(the directory you're currently in)*, where the **manage.py file** is located *(see the directory structure below)*.

2. Add the following two keys to the env file *(these are case-sensitive)*:

    ```
    API_KEY=[YOUR API KEY]
    AUTH_TOKEN=[YOUR API READ ACCESS TOKEN]
    ```

3. Do not worry about configuring anything else related to the .env file. All the logic has already been set up. Just make sure you have a working a api key and read key from the movie db site.

### 7. Run the server 

*WINDOWS*
```
> python manage.py runserver
```
*MAC*
```
> python3 manage.py runserver
```

### 8. Update JS files (if needed)

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
