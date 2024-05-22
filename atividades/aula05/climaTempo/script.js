document.getElementById('check-weather').addEventListener('click', function (event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = ' ';
    const url = ' ';

    fetch(url)
        .then(response => response.jason())
        .then(data => {
            const weatherDescription = data.weather[0].description;

            const temperature = data.main.temp;
            document.getElementById('weather-result').innerHTML = `
            <h2>${city}<h2>
            <p>Condições: ${weatherDescription}<p>
            <p>Temperatura: ${temperature}<p>
            `;
        })

})