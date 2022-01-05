const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8181;
var cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports.app = app
require("./controllers/TourismController")
