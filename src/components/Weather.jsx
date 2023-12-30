import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider, Grid, Skeleton } from "@mui/material";
import { LocationOn, Navigation } from "@mui/icons-material";

const Weather = () => {
  const [ipApiData, setIpApiData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        // Get user's current location details using ipapi.co
        const ipApiUrl = "https://ipapi.co/json/";
        const ipApiResponse = await fetch(ipApiUrl);
        const ipApiData = await ipApiResponse.json();
        setIpApiData(ipApiData);
        console.log(ipApiData);

        const { latitude, longitude } = ipApiData;

        // Use the obtained latitude and longitude in the OpenWeatherMap API URL
        const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=97126b801be582d0a3df07a82ebbd8de`;

        // Make a request to the OpenWeatherMap API
        const weatherApiResponse = await fetch(openWeatherMapApiUrl);
        const weatherData = await weatherApiResponse.json();

        setWeatherData(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, []);

  return (
    <Box>
      {weatherData && (
        <Grid
          className="grid"
          container
          width={"70%"}
          p={2}
          m={"0 auto"}
          sx={{ background: "#000", borderRadius: "4px" }}
        >
          <Grid
            item
            xs={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography variant="h5">{weatherData.visibility} m</Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography ml={1}>Visibility</Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography variant="h5">
                  {weatherData.main.pressure} mb
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography ml={1}>Pressure</Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography variant="h5">
                  {weatherData.main.humidity}%
                </Typography>
              </Box>
              <Box>
                <Typography ml={1}>Humidity</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography variant="h5">
                  {weatherData.main.feels_like} &deg;C
                </Typography>
              </Box>
              <Box>
                <Typography ml={1}>Feels Like</Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography variant="h4">
                  {weatherData.main.temp} &deg;C
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <LocationOn />
                <Typography ml={1}>
                  {ipApiData.city},{ipApiData.country_code}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            position={"relative"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              // position={"relative"}
            >
              <Navigation
                sx={{
                  position: "absolute",
                  fontSize: "30px",
                  left: 8,
                  top: 12,
                  transform: `rotate(${weatherData.wind.deg}deg)`,
                }}
              />
              <Typography variant="h6">
                {weatherData.wind.speed} km/h
              </Typography>
              <Typography variant="">Wind</Typography>
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Box
                sx={{
                  background: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="weatherIcon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h5" ml={2}>
                  {weatherData.weather[0].main}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Weather;
