import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY

app.use(cors());
// Option 2: Allow Custom Origins
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Backend for the booklisting app!');
});

app.use('/books', booksRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
