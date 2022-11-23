const user = require("../model/User");

// Render login template
exports.login = (req, res, next) => {
    res.render('Login.ejs', {title: "Login"});
};

// Render Register template
exports.register = (req, res, next) => {
    res.render('Register.ejs', {title: "Register"});
};

// Process login
exports.loginCheckout = (req, res, next) => {
    
};

// Process Register
exports.registerCheckout = (req, res, next) => {
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log("Username :", username, " Email : ", email, " Password : ", password);

};

