import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb', extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
