# cs465-fullstack
CS-465 Full Stack Development with MEAN

ARCHITECTURE

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The frontend development within the project utilized multiple differnt styles and code.We used Express HTML for the original face fo the site, and then moved to handlebars to improve the speed of the site. Since HTML is static, the interaction between the front and the backend databases are not available unlike with Javascript which can update and and dynamics to the webpage. This was important because we needed to get information from MongoDB so that the page could be updated with new trip information.

Why did the backend use a NoSQL MongoDB database?

Using NoSQL MongoDB as a database meant that modifying our schema was easier when it came to things like changing the functionality and scale at a faster pase. THis is because of the nature of the database which is non-relational.

FUNCTIONALITY

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON provides the system a way to format data that Javascript is able to read and convert it into an actual object. Because of this, we can intertwine both front and backend parts together and letting data/objects to then be stored within the database and use it again in situations where the frontend is requesting data. In general, storing data within a system allows it to not only be saved but it also lets it be pulled again for multiple reasons.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

An example of code that was refactored for the sake of efficiency and functionality is the trip card component. Looking at both the trip cand and trip list we see that having seperate components rendering the same information just causes the system to be dragged down, but having two components that render seperately and contribute to the whole project, the functionality of the site is improved. This causes a decreases in application size as well as quicker development that leads to less errors. 

TESTING

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security.

Being able to test endpoints of the API will allow for the system to be more secure due to the fact that it may test something that you havent thought of while testing it locally. Using tools that can test the Postman request from HTTP is huge in this sense. 

Explain your understanding of methods, endpoints, and security in a full stack application.

WIthin a full stack application, methods are the reason for dynamic functionality. Methods such as GET, POST, PUT, and DELETE, which can be found within our project that is in the repository, let the requests modify, retrive, and delete data from the database. These methods get performed by the backend of the project to accomplish the requests. When talking about Endpoints, which are the results of the methods, need to be tested so that the function and data display is checked as well as throw errors are accounted for properly. Finally, security, which is a seperate layer of the code that is added, protects the site and application from unauthorized users who are trying to access/modify the database. 

REFLECTION

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Taking this course has helped my understanding of both web/full stack development as well as the languages used to create these systems. The only interaction I have had wtih web development is working with HTML to create a very basic front end web page that had a very slight amount of javacript within it. Although I still have questions about full stack development I have been able to understand a little more about both what I want to do when I get my career as well as improving on everything that I have learned during my time here at school. It also gives me a sense of hope due to the fact that we learned how to use different components of code that is linked together to achieve a finished and polished product.
