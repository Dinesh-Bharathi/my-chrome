import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Skeleton } from "@mui/material";

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
    // <div>
    //   <Typography variant="h4" sx={{ color: "#fff" }}>
    //     {weatherData?.main?.temp} °C
    //     {weatherData && (
    //       <img
    //         src={`https://openweathermap.org/img/wn/20n.png`}
    //         alt="icon"
    //         style={{ background: "#fff" }}
    //       />
    //     )}
    //     {weatherData?.weather[0].description}
    //   </Typography>
    // <Typography variant="h6">
    //   {ipApiData?.city}, {ipApiData?.region}
    // </Typography>
    // </div>
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid
          item
          xs={4}
          sx={{ background: "#000", borderRadius: "4px" }}
          p={2}
        >
          {weatherData ? (
            <>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                {weatherData?.main?.temp} °C
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
                  alt="icon"
                />
                <Typography>{weatherData?.weather[0].main}</Typography>
              </Box>
              <Typography variant="h6">
                {weatherData.name},{" "}
                {weatherData.name !== ipApiData?.city && ipApiData?.city} -{" "}
                {weatherData.sys.country}
                {/* {ipApiData?.city}, {ipApiData?.region} */}
              </Typography>
            </>
          ) : (
            <>
              <Skeleton
                width={"100%"}
                height={40}
                variant="text"
                sx={{ background: "#444444" }}
                animation="wave"
              />
              <Skeleton
                width={"100%"}
                height={40}
                variant="text"
                sx={{ background: "#444444" }}
                animation="wave"
              />
              <Skeleton
                width={"100%"}
                height={40}
                variant="text"
                sx={{ background: "#444444" }}
                animation="wave"
              />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Weather;
