# Movie Finder
Movie Finder is an online Movies/Series/Episodes finder using the OMDB API.

In addition to viewing the details, filters such as year range, title types are provided.

This project is created using,\
Frontend/Client - ReactJS, Styled components\
Backend/Server - ExpressJS

## Prerequisites
Node version : `node >= 12.22`

OMDB API Key: This can be obtained from [https://www.omdbapi.com](https://www.omdbapi.com/apikey.aspx)

## Setup

The project consists of two directories `api` and `client`

### Starting Server
Once in the `api` folder of the project run,

#### `npm install`
This will install the required dependencies for the ExpressJS app

Once the dependencies are installed run,
#### `npm run start`
This will start the local ExpressJS server. By default the server will be running on port `9000`. This can be changed in the `index.js` file.

### Starting Client

Once in the `client` folder of the project run,

#### `npm install`
This will install the required dependencies for the React app.

Once the dependencies are installed run,
#### `npm run start`
This will start the React dev server. By default the server will be running on port `3000`. The app can be viewed by visiting the url [http://localhost:3000/](http://localhost:3000/)

#### `npm run build`

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!