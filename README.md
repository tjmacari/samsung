# Samsung Smart TV experiment
Simple carousel built in ReactJS/Webpack which allows the user to scroll through Star Wars movies, built for Samsung TVs.  Tested using Tizen Studio Web Simluator Application (Samsung TV).  This web application was built using Webpack, so the deployed code resides in the /dist folder.

To view local copy in /dist folder:
* Navigate to /dist folder
* Execute index.html file

To preview in Tizen Studio Web Simulator Application (Samsung TV):
* Create a new Samsung TV project in Tizen Studio
* Overwrite default files with files from /dist folder
* Right-click on the project in the project viewer
* Run As > Tizen Web Simulator Application (Samsung TV)

To run the code in a local web server:
* Navigate to your terminal
* "npm install" (the dependencies in package.json will be download)
* "npm run start" (will start the web application at localhost:8080)
* In your browser, navigate to localhost:8080 to view the web application

To scroll left/right through the movies:
* Simply use the Left/Right arrows on your Tizen Studio Web Simulator Application remote control, or your keyboard to scroll through the movies.
