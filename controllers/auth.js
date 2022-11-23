exports.login = (req, res, next) => {
    res.render('Login.ejs', {title: "Login"});
};

exports.register = (req, res, next) => {
    res.render('Register.ejs', {title: "Register"});
};