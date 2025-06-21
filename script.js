async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "331189de4a1f4777a3d53626252106";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = `
      🌍 <strong>${data.location.name}</strong><br>
      🌡️ Temp: <strong>${data.current.temp_c}°c</strong><br>
      💧 Feels like: ${data.current.feelslike_c}°C<br>
      🌥️ Condition: ${data.current.condition.text}
    `;

    document.getElementById("weatherResult").innerHTML = result;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "❌ Couldn't find city!";
  }
}
