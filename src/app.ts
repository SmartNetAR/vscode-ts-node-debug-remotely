import * as express from 'express';
const app = express()

app.get('/', function(req, res){
  let a = 17;
  a += 4;
  const calculator = 3 + a;
  res.send({calculator})
})

app.listen(3000)