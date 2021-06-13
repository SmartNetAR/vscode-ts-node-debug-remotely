import * as express from 'express';
import { YEAR } from './constants';
const app = express();
const port = process.env.SERVER_PORT || 8089;

app.get('/', function(req, res){
  let a = YEAR;
  a += 30;
  const calculator = 3 + a;
  res.send({calculator})
})

app.listen(port, ()=> console.log(`listening on port ${port}`))