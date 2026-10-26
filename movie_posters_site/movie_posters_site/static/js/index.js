import {} from "./movie_data.js";
export class IndexPage {
    userPrompt = null;
    createdElements = [];
    constructor() {
        this.init();
    }
    // umbrella function to initialize everything for the index page
    init() {
        // FIELD INITIALIZATIONS
        // create a user prompt element that instructs the user on what to do and assign it to our user prompt field
        this.initUserPromptField();
        // ELEMENT INITIALIZATIONS
        // init the movie queries input form
        this.initMovieQueriesInputForm();
    }
    // initializes the movie queries input form 
    initMovieQueriesInputForm() {
        const movieQueriesInputForm = document.querySelector(".queries__input-form");
        if (movieQueriesInputForm === null) {
            console.warn("Movie queries input form doesn't exist");
            return;
        }
        // add the submit event listener to the discover button
        // NOTE: submit event listeners only appear in a form and has to be applied to the form itself, not the inputs/buttons on it
        movieQueriesInputForm.addEventListener("submit", async (ev) => {
            // prevent page refresh
            ev.preventDefault();
            // remove the user prompt (if it exists)
            this.removeUserPrompt();
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
        const movieResultsContainer = document.querySelector(".movies-content__results");
        if (movieResultsContainer === null) {
            console.warn("Movie results container doesn't exist");
            return;
        }
        // remove current movie results first, if any
        this.clearCurrentMovieResults();
        // iterate through each movie discover result
        results.forEach((result) => {
            // ts compiler requires this in any callback function I guess
            if (movieResultsContainer === null)
                return;
            // create an individual movie results container for each result
            // the container has the movie poster + title coupled with its language + an overview/description of the movie
            const movieResultContainer = document.createElement("div");
            const movieImage = document.createElement("img");
            const movieTitle = document.createElement("strong");
            const movieDescription = document.createElement("div");
            // add the corresponding styling for each element
            movieResultContainer.classList.add("results__result-container");
            movieImage.src = "https://image.tmdb.org/t/p/original" + result.poster_path;
            movieTitle.innerHTML = result.title + ` (${result.original_language})`;
            movieDescription.innerHTML = result.overview;
            // group and put the elements into the DOM
            movieResultContainer.append(movieImage, movieTitle, movieDescription);
            movieResultsContainer.append(movieResultContainer);
            // add the container to our created elements array
            this.createdElements.push(movieResultContainer);
        });
    }
    // clears the current movie results
    clearCurrentMovieResults() {
        // iterate through all the created elements and remove them to scrap them for garbage collection
        this.createdElements.forEach((el) => el.remove());
        // remove complete reference of these movie result elements so they can be garbage collected
        this.createdElements = [];
    }
    // on page load, create a prompt that instructs users what to do on the home page and assign it to the corresponding field
    initUserPromptField() {
        // get the parent container that holds all of the elements related to movies (e.g. movie results, querying, etc)
        const moviesContentContainer = document.querySelector(".movies-content");
        if (moviesContentContainer === null) {
            console.warn("The parent movies content container doesn't exist");
            return;
        }
        // create a user prompt element
        const userPrompt = document.createElement("aside");
        // add the styling
        userPrompt.classList.add("movies-content__user-prompt");
        userPrompt.innerHTML = "Click the discover button to see movie recommendations. Enjoy!";
        // append the element to the parent container
        moviesContentContainer.append(userPrompt);
        // assign the user prompt to our field
        this.userPrompt = userPrompt;
    }
    // removes the user prompt (if it exists) and sends it to garbage collection
    removeUserPrompt() {
        if (this.userPrompt === null) {
            console.log("User prompt has not been initialized or has already been destroyed", "Ignore this message if had already been initialized");
            return;
        }
        // remove the item from the DOM
        this.userPrompt.remove();
        // set our reference back to null
        this.userPrompt = null;
    }
}
//# sourceMappingURL=index.js.map