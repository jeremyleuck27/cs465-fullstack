const fs = require('fs');
//not best practice on practical site
//because you do not want to read file every time use click on site
//BEST PRACTICE on startup, read file and store in cache that can be called
//at anytime
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};