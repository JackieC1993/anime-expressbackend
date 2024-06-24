# Backend
-our backends are made up of servers and databases

#Setup
- create the folder where express server live
- npm init-y
- npm install express dotenv
- If you dont have it install nodemon ` npm install nodemon -g"
- Setup our file directories
    -controllers
    - data
- Other files to create:
    - app.js
    - server.js
    - controllers/animes.js
    - data/animes
    - .env  
-update the star script with `nodemon server.js`

## Client
- a client makes request to the server
- server receive requests and responds to clients

How does the server receive request?
- Client request using URLs

-POST: Create data, make a new user account
-GET: Read data, see details of the user account
-PUT/PATCH: Update data, make changes to the user account
-DELETE: Destroy data, delete the user account