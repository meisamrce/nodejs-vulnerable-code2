const express = require('express');
const app = express();
app.use(async (req,res,next) => {
  try{
      const origin = (typeof req.headers.origin !== 'undefined') ?  req.headers.origin : 'https//seccode.ir';
      res.setHeader('Access-Control-Allow-Origin',origin);
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
      next();
  }
  catch(e){
      res.status(500).json({"error":e.toString()});
  }
});


app.get('/', (req, res) => {
  res.json({"data":req.query});
});

app.listen(3000);
console.log('Listening on port 3000...');
