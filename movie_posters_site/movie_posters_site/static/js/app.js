import { IndexPage } from "./index.js";
// this is the actual script that will be run in all html files
// think of it like a master class that initializes all pages and determines which logic to run from that
class App {
    index = new IndexPage();
    constructor() {
        console.log("Initializing javascript logic...");
    }
}
const app = new App();
//# sourceMappingURL=app.js.map