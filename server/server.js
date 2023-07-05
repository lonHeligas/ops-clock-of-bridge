const express = require('express');
const fs = require('fs');

const PORT = 3003;
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.get('/', (req,res) => { 
  res.status(200).send(
    require('../public/data/trainingtimes.json')
  )
})




app.post('/', (req, res) => {  
  const incomingEvent = req.body;
  const data = require('../public/data/trainingtimes.json');
  data.training.push(incomingEvent);    
  console.log(data);
  fs.writeFileSync('../public/data/trainingtimes.json', JSON.stringify(data, null, 2))
  res.status(201).send(
    req.body
  );
});




app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
