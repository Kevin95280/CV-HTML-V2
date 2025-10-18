import express from 'express';
import router from './app/router.js';

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.set('views', './app/views/');

app.use(express.static('./public'));
app.use(router);

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.listen(port, () => {
  console.log(`app sur http://localhost:${port}/`);
});
