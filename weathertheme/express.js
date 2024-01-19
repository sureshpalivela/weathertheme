const express = require('express');
const app = express();

const weatherApiKey = '022540227c98d577cd5f3dfdcb48a1f5';


app.get('/weather', (req, res) => {
    
    const weatherData = {
        weatherCondition: 'clear sky',
    };

    res.json(weatherData);
});

const port = 3000;
app.listen(port, () => console.log('Server running on port ${port}'));