
import https from 'https';
import chalk from 'chalk';



const getJoke= () => {
    const url= 'https://www.official-joke-api.appspot.com/random_joke';
    https.get(url, (res) => {
        let data= '';
        //receives the data in the form of junk
        res.on('data', (chunk) =>{
            console.log('ChunK received:', chunk);
            data += chunk;
        });

        // ends the response
        res.on('end', () => {
            const joke= JSON.parse(data);
            console.log('After conversion of data into object:', joke);
            console.log(`Random ${joke.type} Joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue(`${joke.punchline}`));
        });

        //if error occurs while receiving data
        res.on('error', (error) => {
            console.log('Error:', error.message);    
        });

    })
}

//function call
getJoke();
