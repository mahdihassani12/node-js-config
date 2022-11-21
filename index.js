const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const sequelize = require("./utils/db");

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3003;

const home = require("./routes/home");
app.use(home);

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
});