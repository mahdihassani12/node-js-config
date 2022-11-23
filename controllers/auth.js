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
exports.registerCheckout = async  (req, res, next) => {
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const response = await user.create(
            { 
                email   : email, 
                password: password,
                username: username
            }
        );

        if(response){
            res.redirect('/login');
        }else{
            res.redirect('/');
        }
        

};

