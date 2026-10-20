import {} from "./movie_data.js";
export class IndexPage {
    movieResultsContainer = null;
    createdElements = [];
    constructor() {
        this.init();
    }
    // umbrella function to initialize everything for the index page
    init() {
        this.initMovieResultsContainerField();
        this.initMovieQueriesInputForm();
    }
    // initializes the movieResultsContainer field with a reference to the movie results container element
    initMovieResultsContainerField() {
        const movieResultsContainer = document.querySelector(".movie-results");
        if (movieResultsContainer === null) {
            console.warn("Movie results container doesn't exist");
            return;
        }
        this.movieResultsContainer = movieResultsContainer;
    }
    // initializes the movie queries input form 
    initMovieQueriesInputForm() {
        const movieQueriesInputForm = document.querySelector(".movie-queries__input-form");
        if (movieQueriesInputForm === null) {
            console.warn("Movie queries input form doesn't exist");
            return;
        }
        // add the submit event listener to the discover button
        // NOTE: submit event listeners only appear in a form and has to be applied to the form itself, not the inputs/buttons on it
        movieQueriesInputForm.addEventListener("submit", async (ev) => {
            // prevent page refresh
            ev.preventDefault();
            // intercept the vanilla submit event and manually fetch the data ourselves
            try {
                const response = await fetch("/api/discover", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                    // no need for body
                });
                // convert the response into a json and cast it into our interface for better legibility
                const contents = await response.json();
                // pass the results into our function to display on the page
                this.displayDiscoverMovieResults(contents.results);
            }
            catch (error) {
                console.warn("Failed to get data");
            }
        });
    }
    // displays the movie results from the discover api route
    displayDiscoverMovieResults(results) {
        if (this.movieResultsContainer === null) {
            console.warn("Movie results container field not initialized");
            return;
        }
        // remove current movie results first, if any
        this.clearCurrentMovieResults();
        // iterate through each movie discover result
        results.forEach((result) => {
            // ts compiler requires this in any callback function I guess
            if (this.movieResultsContainer === null)
                return;
            // create an individual movie results container for each result
            // the container has the movie poster + title coupled with its language + an overview/description of the movie
            const movieResultContainer = document.createElement("div");
            const movieImage = document.createElement("img");
            const movieTitle = document.createElement("strong");
            const movieDescription = document.createElement("div");
            // add the corresponding styling for each element
            movieResultContainer.classList.add("movie-results__result-container");
            movieImage.src = "https://image.tmdb.org/t/p/original" + result.poster_path;
            movieTitle.innerHTML = result.title + ` (${result.original_language})`;
            movieDescription.innerHTML = result.overview;
            // group and put the elements into the DOM
            movieResultContainer.append(movieImage, movieTitle, movieDescription);
            this.movieResultsContainer.append(movieResultContainer);
            // add the container to our created elements array
            this.createdElements.push(movieResultContainer);
        });
    }
    // clears the current movie results
    clearCurrentMovieResults() {
        if (this.movieResultsContainer === null) {
            console.warn("Movie results container field not initialized");
            return;
        }
        // removes all inner HTML items
        this.movieResultsContainer.innerHTML = "";
        // then iterate through all the created elements and remove them to scrap them for garbage collection
        this.createdElements.forEach((el) => el.remove());
    }
}
//# sourceMappingURL=index.js.map