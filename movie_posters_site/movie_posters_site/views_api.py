from typing import Any
from requests import get, Response
import os
from random import randint
from .app import app_bp

# these routes are going to be url routes that we can request to talk directly to the movie api
# these are different from the standard views, which display the static pages (like index)
@app_bp.route("/api/discover", methods=["GET"])
def discover_movies() -> Any:
    page_num: int = randint(0, 500)
    res: Response = get(
        url = "https://api.themoviedb.org/3/discover/movie", 
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {os.getenv("AUTH_TOKEN")}"
        },
        params = {
            "page": page_num
        }

        # if you're passing headers, it requires the api read access token (e.g. see above)
        # if you're passing params, it requires the api key (looks like this: params = {"api_key": API_KEY})
    )
    return res.json()
