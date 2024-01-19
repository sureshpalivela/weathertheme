function setThemeBasedOnTime() {
    const currentHour = new Date().getHours();
    const themeStyle = document.getElementById('theme-style');

    if (currentHour >= 6 && currentHour < 18) {
        // Daytime, use light theme
        themeStyle.href = 'light-theme.css';
    } else {
        // Nighttime, use dark theme
        themeStyle.href = 'dark-theme.css';
    }
}

// Function to set the theme based on weather conditions
function setThemeBasedOnWeather(weatherCondition) {
    const themeStyle = document.getElementById('theme-style');

    if (weatherCondition === 'clear sky') {
        themeStyle.href = 'sunny-theme.css';
    } else if (weatherCondition.includes('rain')) {
        themeStyle.href = 'rainy-theme.css';
    } else {
        themeStyle.href = 'default-theme.css';
    }
}

// Call the functions to set the initial theme
setThemeBasedOnTime();

// Fetch weather information from the server
fetch('/weather')
    .then(response => response.json())
    .then(data => setThemeBasedOnWeather(data.weatherCondition))
    .catch(error => console.error('Error fetching weather:', error));

