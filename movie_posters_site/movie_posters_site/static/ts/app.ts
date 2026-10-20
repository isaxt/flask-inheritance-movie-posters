import {IndexPage} from "./index.ts";

// this is the actual script that will be run in all html files
// think of it like a master class that initializes all pages and determines which logic to run from that
class App {
    private index: IndexPage = new IndexPage();
    
    constructor() {
        console.log("Initializing javascript logic...");
    }
}

const app: App = new App();