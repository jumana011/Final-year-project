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
    app.get('/Mealplan',function(req,res){
        res.render('Mealplan.ejs', AppData)
    });
    app.get('/Exercises',function(req,res){
        res.render('Exercises.ejs', AppData)
    });
    app.get('/badges',function(req,res){
        res.render('badges.ejs', AppData)
    });
    app.get('/Messages',function(req,res){
        res.render('Messages.ejs', AppData)
    });
    //Link: https://blog.logrocket.com/natural-language-processing-node-js/

    app.post('/Motivational-Messages',function(req,res){
        var natural = require('natural');
        var tokenizer = new natural.WordTokenizer();
        responseType=req.body.response_type;
        if (responseType == "tough") {
            res.send(tokenizer.tokenize("Dont let them prove you wrong"))
            
        } else if (responseType == "kind") {
            res.send(tokenizer.tokenize("come on you can do it"))
        }
    });
    app.post('/Exercise-videos',function(req,res){
        res.send("exercise videos");
    });
    app.post('/registered',function (req, res) {

            // SQL query to insert the new user into the registration table
            let sqlquery = "INSERT INTO registration (email, username, password) VALUES (?,?,?)";

            if (!req.body.username & !req.body.password & !req.body.email) {
                return res.send('Invalid, please enter your details');
            }
            // Data to be inserted into the table
            let newrecord = [req.body.email, req.body.username, req.body.password];
    
            // Execute SQL query to store the data in the database
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error('Error saving to database:', err.message);
                } else {
                    
                    result = 'Hello '+ req.body.username + ' '+' you are now registered!  We will send an email to you at ' + req.body.email
                    res.send(result + " " + '<a href="/login">login</a>')
                }
            });
        });
    
        app.post('/loggedin', function (req, res) {
            const username = req.body.username;
            const password = req.body.password;
            // Validate input
            if (!username || !password) {
                return res.send('you need to input your username and password');
            }
            
            // SQL query to select the password for the user from the database
            let sqlquery = "SELECT password FROM registration WHERE username = ?";
            db.query(sqlquery, [username], (err, result) => {
                if (err) {
                    console.error('Database error:', err.message);
                    return res.send('error');
                }
        
                if (result.length === 0) {
                    // If no user is found
                    return res.send('User not found');
                }
        
                const storedPassword = result[0].password;
        
                // Compare the provided password with the stored password
                if (password == storedPassword) {
                    // Authentication successful
                    return res.send('Login successful' + " "+ '<a href="/">Home</a>');
                } else {
                    // Authentication failed
                    return res.send('Invalid username or password');
                }
            });
        });
    

            app.post('/meal-plans', (req, res) => {
                const { diet, meal } = req.body;
                
                // Query the database for meals matching the diet preference
                const query = 'SELECT * FROM meals WHERE Diet_type = ? AND meal_type = ?';
                db.query(query, [diet,meal], (err, results) => {
                    if (err) throw err;
            
                    // Render the meal plans page with the retrieved data
                    res.render('MealsShown.ejs', { meals: results });
                });
            });
            

    app.get('/badgesAchieved', (req, res) => {
        const badges1 = [
            { name: "Good Job", image: "/images/good-job.png" },
            { name: "Level Up", image: "/images/level-up.png" },
            { name: "I'm Proud of You", image: "/images/proud-of-you.png" }
        ];
        for (let i = 0; i < 3; i++) {
            
            console.log(badges1);
          }
        
    });
    
    
}

