module.exports = function(app, AppData) {

    // Handle our routes
    app.get('/',function(req,res){
        res.render('index.ejs', AppData)
    });
    app.get('/register',function(req,res){
        res.render('register.ejs', AppData)
    });
    app.get('/login',function(req,res){
        res.render('login.ejs', AppData)
    });
    
}
