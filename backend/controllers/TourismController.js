const Tourism = require("../models/TourismModel").Tourism
const app = require("../server.js").app
app.get("/",function(request, response) {
    tourism = new Tourism() 
    tourism.findAll(function(err, tourism) {
    console.log('controller')
    if (err)
      response.send(err);

    console.log('res', tourism);
    response.send(tourism); 
  });
});

app.get("/:id",function(req, res) {
  tourism = new Tourism() 
  tourism.findById(req.params.id ,function(err, tourism) {
  console.log('controller')
  if (err)
    res.send(err);

  console.log('res', tourism);
  res.send(tourism);
});
});


app.put("/:id",function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length != 5){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        tourism = new Tourism()
        body = req.body
        console.log(body)
        for(i in body){
            tourism[i] = body[i] 
        }
        tourism.update(req.params.id ,function(err, tourism) {
            if (err)
            res.send(err);
            res.json({ error:false, message: body });
        });
    }
});

app.post("/",function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length != 5){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
      tourism = new Tourism();
       body = req.body
       console.log(body);
       for(i in body){
         tourism[i] = body[i] 
       }
       tourism.create(function(err, tourism) {
        if (err)
        res.send(err);
        res.json({ error:false, message: body });
      });
  }
});
app.delete("/:id",function(req, res) {
  tourism = new Tourism() 
  tourism.delete(req.params.id ,function(err, tourism) {
  console.log('controller')
  if (err)
    res.send(err);

  console.log('res', tourism);
  res.send(tourism);
});
});