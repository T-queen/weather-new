import React, {useEffect} from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner'

export default function Weather(props) {
    useEffect(() => {
        function handleResponse(response) {
            alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
        }
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2b1ee82be7aebff078121568f54f3a4c&units=metric`;

        axios.get(apiUrl)
        .then(handleResponse);
}, []); // Add an empty dependency array to fetch data only once when the component is mounted

  return (
    <Audio
  height="80"
  width="80"
  radius="9"
  color="white"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  );
}