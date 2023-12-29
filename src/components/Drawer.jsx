import { Facebook, Google, Instagram } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import MuiLogo from "../assets/images/mui.svg";
import GoogleLogo from "../assets/images/google.svg";
import FacebookLogo from "../assets/images/facebook.svg";
import InstagramLogo from "../assets/images/instagram.svg";
import GithubLogo from "../assets/images/github.svg";
import ReactLogo from "../assets/images/react.svg";
import YoutubeLogo from "../assets/images/youtube.svg";
import GoogleMapsLogo from "../assets/images/google-maps.svg";
import GmailLogo from "../assets/images/gmail.svg";
import VerselLogo from "../assets/images/versel.png";

const imageStyles = {
  width: "40px",
  height: "40px",
  objectFit: "cover",
  objectPosition: "center",
};

const Drawer = () => {
  return (
    <Box
      position={"absolute"}
      sx={{
        background: "red",
        height: "70vh",
        top: "20%",
        left: "2em",
        borderRadius: "8px",
        // padding: "0.5em",
        overflowX: "hidden",
        overflowY: "hidden",
        transition: "width 1s linear",
        "&:hover": {
          background: "#111",
          padding: "0.5em 1em",
          width: "100px",
          overflowY: "scroll",
          transitionDelay: "overflowY 1s",
          animation: " borderRadius 3s infinite linear",
          "@keyframes borderRadius": {
            "0%": { boxShadow: "0 0 5px 5px #ff8a00" },
            "50%": {
              boxShadow: "0 0 5px 5px #e52e71",
            },
            "100%": {
              boxShadow: "0 0 5px 5px #1e90ff",
            },
          },
        },
        "&:not(:hover)": {
          background: "#000",
          padding: "0.5em",
          transition: "0.2s linear",
          width: "auto",
        },
        // Customize scrollbar styles
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#111", // Scrollbar color
          borderRadius: " 0 5px 5px 0",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#222", // Track color
          borderRadius: " 0 5px 5px 0",
        },
      }}
    >
      <Box mb={1}>
        <Tooltip title="Google" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://google.com", "_blank")}
          >
            <img src={GoogleLogo} alt="GoogleLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Material UI" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://mui.com/", "_blank")}
            sx={{ padding: "18px" }}
          >
            <img
              src={MuiLogo}
              alt="MuiLogo"
              style={{
                ...imageStyles,
                width: "25px",
                height: "25px",
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="React Dev" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://react.dev/", "_blank")}
          >
            <img src={ReactLogo} alt="ReactLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Versel" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://vercel.com/", "_blank")}
          >
            <img src={VerselLogo} alt="VerselLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Github" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            <img src={GithubLogo} alt="GithubLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Youtube" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
          >
            <img src={YoutubeLogo} alt="YoutubeLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Google Maps" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
          >
            <img
              src={GoogleMapsLogo}
              alt="GoogleMapsLogo"
              style={imageStyles}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Gmail" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://mail.google.com/", "_blank")}
          >
            <img src={GmailLogo} alt="GmailLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Facebook" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <img src={FacebookLogo} alt="FacebookLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box mb={1}>
        <Tooltip title="Instagram" placement="left" arrow>
          <IconButton
            size="large"
            className="drawerBtn"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <img src={InstagramLogo} alt="InstagramLogo" style={imageStyles} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Drawer;
