# Summary
GUI that takes a book title input by the user, searches for matches using the Open Library API, and displays the results to the user.

# Get Started
1. Run the following command to install dependencies:

	`npm install`

2. To start the application, run:

	`npm start`

	and in the browser, go to:

	`http://localhost:1234/`

# Notes
- bundled using parcel.js
- incorporated RxJS Observables to avoid getting stale data (wrapped each fetch request in an Observable to make it feasible to subscribe and unsubscribe from desired/undesired fetch requests)
- used *redux thunk* middleware to have fetch request within action creators
- used *lodash* *debounce* method to only send fetch request after user has stopped typing for 300ms
- utilized *react-virtualized* to render list and *react-loading* for the loading animation
- application is responsive in desktop, mobile, and table viewports
