import readline from "readline";

const BASE_URL= 'https://api.openweathermap.org/data/2.5/';
const API_KEY= 'cffcdd95cd826d802e6b3efe99856534';

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//define getWeather function
async function getWeather(city) {
    const url= `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        //get response from server
        const response= await fetch(url);
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }

        //print weather information
        const weatherData= await response.json();
        console.log('\nWeather Details:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} degree celsius`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}`);
    }
    catch(error) {
        console.log('Error:', error.message);
    }
}

//get city name from user
rl.question('Enter the city name:', async (city) => {
    await getWeather(city);
    rl.close();
});
