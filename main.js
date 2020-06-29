// get this weather api key from weatherstack.com
// email: regadin571@ddlre.com pass: regadin571@ddlre 
const Weather = () => {
    const url = "http://api.weatherstack.com/current?access_key=ccbacd16886481ec9705ced50db8f27f&query=Nepal";
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {

        let output = "";
        // let weather = "./weather.webp"
        /* <img src=${data.current.weather_icons[0]} alt ="icon">
        coming from api
        */
        output += `
        <img src=${data.current.weather_icons[0]} alt ="icon">
        <h3>${data.current.weather_descriptions}</h3>
        <ul>
        <li> Country: ${data.location.country} </li>
        <li> City: ${data.location.name} </li>
        <li> localTime: ${data.location.localtime} </li>
        <li> Temperature: ${data.current.temperature} </li>
        <li> Wind-speed:  ${data.current.wind_speed}  </li>
        <li> Pressure:  ${data.current.pressure}  </li>
        <li> Humidity:  ${data.current.humidity}  </li>
        <li> isDay?:  ${data.current.is_day}  </li>
        </ul>
        
        `

        document.getElementById("show").innerHTML = output;
    })
    .catch((error) => {
        console.error(error);
    }) 
}

Weather();