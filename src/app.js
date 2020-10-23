import express from 'express';
import routes from "./routes/routes.js"

var app = express();

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

routes(app);

app.listen(8000, function () {
    console.log('Listening to Port 8000');
  });