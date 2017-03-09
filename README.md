# ProgressBar
This is a responsive progressbar project. The project is developed using AngularJs and reads JSON form the given endpoints using $htp and $q service of AngularJs.
Below are the project components:
#1: ProgessBar.html : HTML view template
#2: app.js : It holds Controller and Factory definations.
#3: gulpfile.js: It has defination for gulp task for js minification and creating a webserver.

Steps to Run the application:
#1: Clone the application from GITHub using below URL: 
https://github.com/poonammeghnani/ProgressBar.git

#2: Install Node and Gulp on your machine if not present already.

#3: Install GULP minify module using below command on the terminal
npm install gulp-minify
To test minification, run below command to see minified js in build/js folder:
gulp compress

#4: Install GULP connect module for connecting to WebServer usiing below command on the terminal:
npm install --save-dev gulp-connect

#5: To start server, run below command on the terminal:
gulp

#6: To view application once the server is UP, hit below URL in the browser:
http://localhost:8080/WebContent/pages/ProgressBar.html
