# Hot Restaurant: Restaurant backend app using Node and Express Server

### Overview

Hot Restaurant needs an application to accept reservations. The app has a home page, a reserve form page and a tables page which lists the tables and who is reserved at them. The restaurant can accept a limited number of reservations (say 5), once those are full, then anyone who fills out the form goes to the waitlist.

The restaurant also has an api which provides json data for tables and waitlist reservations, and accepts json post data to create new reservations. 

### Before You Begin

* Check out [this demo version of the site](http://hot-restaurant.herokuapp.com/). Use this as a model for how we expect your assignment look and operate.

* Inside the `HotRestaurant` root folder, organize your directories so it matches the following (<em>of course node_modules folder and package.json file are created using npm init and npm install</em>):

  ```
  HotRestaurant root directory
    - app
      - data
        - tableData.js
        - waitinglistData.js
      - public
        - home.html
        - reserve.html
        - tables.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

* Today you will be building a Node / Express based web applications for handling reservation requests. 

  * Your application will be made up of two parts: 1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.

  * Spend the time necessary to map this application out. Consider the concepts we've covered in class so far: 

    * Servers
    * Routing
    * APIs
    * AJAX (GET and POST Requests)

  * You should be referencing the code from the previous Star Wars application.


  * Note: We know this is a hard activity. We know you aren't yet comfortable with Node or Express. But push yourself. The best way to learn is to push through the discomfort and BUILD! Ask for help when you need it. We're here to help you through the process.

  * **Bonus:**

    * If by some miracle you finish early, feel encouraged to work on any one of these additional tasks to take your application to the next level.

      * Add code to your server so that it "counts" every time a person visits any of the pages. Display a running count on the website. 

      * Add buttons for "checking off" individuals from the reservation list. Once this happens, the next person on the waitlist should be addd to the main reservation list.

      * Add a button for sending emails to individuals on the wait-list letting them know they have a table ready. You will need to use node-mailer or a similar npm package to make this work. (A hard task, but very cool).

      * Add a button for sending text messages to individuals on the wait-list letting them know they have a table ready. You will need to use the Twilio library to make this work. (A hard task, but very cool). 