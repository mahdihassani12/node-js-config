const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const sequelize = require("./utils/db");
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret:"thisismysectrectcodewithmahdi!",
  cookie:{
    sameSite: 'strict'
  }
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3003;

const home = require("./routes/home");  
const auth = require("./routes/auth");
app.use(home);
app.use(auth);

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