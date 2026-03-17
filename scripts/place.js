// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// WEATHER VALUES
let temperature = 30;
let windSpeed = 10;

// ONE-LINE FUNCTION (REQUIRED ✅)
function calculateWindChill(temp, speed){ return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1); }

// DISPLAY WIND CHILL
let windChillDisplay = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay.textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
  windChillDisplay.textContent = "N/A";
}