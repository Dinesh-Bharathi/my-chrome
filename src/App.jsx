import { Box } from "@mui/material";
import React from "react";
import BackgroundImage from "./assets/images/backgrondOne.jpg";
import Clock from "./components/Clock";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          top: 0,
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Drawer />
        <Clock />
        <SearchBar />
        <Weather />
      </Box>
    </Box>
  );
};

export default App;
