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
    app.post('/registered',function (req, res) {
    
            // SQL query to insert the new user into the registration table
            let sqlquery = "INSERT INTO registration (email, username, password) VALUES (?,?,?)";
            
            // Data to be inserted into the table
            let newrecord = [req.body.email, req.body.username, req.body.password];
    
            // Execute SQL query to store the data in the database
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error('Error saving to database:', err.message);
                } else {
                    // Constructing the result message for the response
                    result = 'Hello '+ req.body.username + ' '+' you are now registered!  We will send an email to you at ' + req.body.email
                    res.send(result)
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
                    return res.send('Login successful');
                } else {
                    // Authentication failed
                    return res.send('Invalid username or password');
                }
            });
        });
    

            app.post('/meal-plans', (req, res) => {
                const diet = req.body.diet;
            
                // Query the database for meals matching the diet preference
                const query = 'SELECT * FROM meals WHERE Diet_type = ?';
                db.query(query, [diet], (err, results) => {
                    if (err) throw err;
            
                    // Render the meal plans page with the retrieved data
                    res.render('MealsShown.ejs', { meals: results });
                });
            });
            

    app.get('/badges', (req, res) => {
        const badges = [
            { name: "Good Job", image: "/images/good-job.png" },
            { name: "Level Up", image: "/images/badges/level-up.png" },
            { name: "I'm Proud of You", image: "/images/badges/proud-of-you.png" }
        ];
        
    });
    
    
}

