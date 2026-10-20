from typing import Any
from requests import get, Response
from random import randint
from .app import app_bp

# NOTE: API_KEY and AUTH_TOKEN (api read access token) are no longer working so replace these with your api key and api read access token
API_KEY = "471b9bab6cbed0461c913e67dfd55d33"
AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzFiOWJhYjZjYmVkMDQ2MWM5MTNlNjdkZmQ1NWQzMyIsIm5iZiI6MTc5MjQ0NjcwMy43NTUsInN1YiI6IjZhZDY5MGVmZWQzMWM3YmNmZjA4ZmVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oGoRILUy6FlRNvm_VW2gfb33_SOcUayJvXENmf5t_Q4"
# these routes are going to be url routes that we can request to talk directly to the movie api
# these are different from the standard views, which display the static pages (like index)
@app_bp.route("/api/discover", methods=["GET"])
def discover_movies() -> Any:
    page_num: int = randint(0, 500)
    res: Response = get(
        url = "https://api.themoviedb.org/3/discover/movie", 
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {AUTH_TOKEN}"
        },
        params = {
            "page": page_num
        }

        # if you're passing headers, it requires the api read access token (e.g. see above)
        # if you're passing params, it requires the api key (looks like this: params = {"api_key": API_KEY})
    )
    return res.json()
