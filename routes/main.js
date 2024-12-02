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
    app.post('/meal-plans', (req, res) => {
        const { diet } = req.body;
        const mealPlans = {
            keto: [{ name: "Keto Plan", description: "High fat, low carb meals." }],
            vegetarian: [{ name: "Vegetarian Plan", description: "Plant-based meals." }],
            balanced: [{ name: "Balanced Plan", description: "Well-rounded meals for all needs." }]
        };
        res.render('mealPlans.ejs', { mealPlans: mealPlans[diet] });
    });
    
}

