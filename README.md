Before Executing!
npm install to install all the required node_modules into the project directory. 
npm run build:prod to bundle the project into a bundle.js file which will be located in /public/dist/
npm run dev-server 
(temporary, this will be hosted on either heroku or aws soon)

Available Scripts
In the project directory, you can run:

npm start
node server/server.js Runs the app from the node server.js file. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run dev-server
Runs the front-end only on http://localhost:8080. Page will reload with edits.

npm run build:dev
Builds the app in developer mode (larger bundle.js but faster build time. Includes dev dependencies).

npm run build:prod
Builds the app in production mode (smaller bundle.js but longer build time. Does not include dev dependencies).

About the App

React.js web application that utilizes the Webpack asset bundler, Redux, MongoDB.

Webpack is an asset bundler that allows us to execute a single javascript file (bundle.js) that includes all of the app dependencies, styles, and components. Rather than having an index.html that has to load multiple scripts and styles, it only has to load the bundle.

Redux is a simple way to store the state of the application while keeping all the components loosely coupled. By using redux, the application doesn't have to pass properties around from component to component. Redux also allows the app to continue displaying information to the user even when connection is lost. Instead of making multiple queries to the database to retrieve expenses, the application only needs to make one and store the results in the redux "store".

MongoDB is the database service I chose to house all the application users and their expenses. I picked Mongoose because it allows for easy to understand schema validation/authentication and database queries. Upon logging in, the expenses are pulled from the particular user from the database and stored in the redux store.


