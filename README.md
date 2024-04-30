# Cloning and installation- 

After cloning this to your code editor, run npm install inside both- backend as well as the frontend. (cd frontend -> npm install-> cd.. -> cd backend -> npm install)

# Making a .env file in the backend 

Make a .env file in the backend folder and make two variables for the PORT and mongoDBURL in which you can use your own PORT number and mongodb connection url. 

# Frontend- 

To make things easier and clean, for the frontend- I've made a file called "const.jsx" in which you can put the url for the backend server that youre running on. For example- if youre running your backend server in PORT- 3000, usually, the url for the backend will be- http://localhost:3000 

If you're having any further issues or roadblocks while setting up the backend server, you can always use the live hosted backend for the link- https://book-listing-app-0nyt.onrender.com

# How to run frontend and backend

Open two terminals and cd into frontend and backend folder respectively. 
First- To run the backend- you can type "node index.js" 
Once your backend is running you can go ahead an run the frontend by the command- "npm run dev" 


# Technologies used- 

This app runs on React Library with the vite template. For styling, tailwind css was used. BrowseRouter from react-router-dom was used for routing the pages and axios was used to make api calls fromt he frontend. 
For backend- NodeJs, ExpressJs, Mongoose, dotenv for storing variables, cors for setthing up cross platform policy. 

