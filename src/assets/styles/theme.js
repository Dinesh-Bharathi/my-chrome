/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
  },
  "&.box": {},
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.drawerBtn": {
            color: "#fff",
            borderRadius: "8px 0 8px 0 ",
            "&:hover": {
              ".drawerBtnIcon": {
                fontSize: "34px",
                transition: "0.4s ease-in-out",
              },
              "&:not(:hover)": {
                ".drawerBtnIcon": {
                  fontSize: "24px",
                  transition: "0.4s ease-in-out",
                },
              },
              backgroundImage: `linear-gradient(to left, #ff8a00, #e52e71, #1e90ff)`,
              animation:
                "rotateGradient 5s infinite ease-in, borderRadius 3s infinite linear",
              "@keyframes borderRadius": {
                "0%": { boxShadow: "0 0 5px 5px #ff8a00" },
                "50%": {
                  boxShadow: "0 0 5px 5px #e52e71",
                },
                "100%": {
                  boxShadow: "0 0 5px 5px #1e90ff",
                },
              },
              "@keyframes rotateGradient": {
                "0%": {
                  backgroundImage:
                    "linear-gradient(to left, #ff8a00, #e52e71, #1e90ff)",
                },
                "5%": {
                  backgroundImage:
                    "linear-gradient(to top left, #ff8a00, #e52e71, #1e90ff)",
                },
                "10%": {
                  backgroundImage:
                    "linear-gradient(to top right, #ff8a00, #e52e71, #1e90ff)",
                },
                "15%": {
                  backgroundImage:
                    "linear-gradient(to bottom right, #ff8a00, #e52e71, #1e90ff)",
                },
                "20%": {
                  backgroundImage:
                    "linear-gradient(to left bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "25%": {
                  backgroundImage:
                    "linear-gradient(to center bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "30%": {
                  backgroundImage:
                    "linear-gradient(to right bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "35%": {
                  backgroundImage:
                    "linear-gradient(to bottom left, #ff8a00, #e52e71, #1e90ff)",
                },
                "40%": {
                  backgroundImage:
                    "linear-gradient(to center left, #ff8a00, #e52e71, #1e90ff)",
                },
                "45%": {
                  backgroundImage:
                    "linear-gradient(to top left, #ff8a00, #e52e71, #1e90ff)",
                },
                "50%": {
                  backgroundImage:
                    "linear-gradient(to top center, #ff8a00, #e52e71, #1e90ff)",
                },
                "55%": {
                  backgroundImage:
                    "linear-gradient(to top left, #ff8a00, #e52e71, #1e90ff)",
                },
                "60%": {
                  backgroundImage:
                    "linear-gradient(to left top, #ff8a00, #e52e71, #1e90ff)",
                },
                "65%": {
                  backgroundImage:
                    "linear-gradient(to left center, #ff8a00, #e52e71, #1e90ff)",
                },
                "70%": {
                  backgroundImage:
                    "linear-gradient(to left bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "75%": {
                  backgroundImage:
                    "linear-gradient(to right bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "80%": {
                  backgroundImage:
                    "linear-gradient(to center bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "85%": {
                  backgroundImage:
                    "linear-gradient(to bottom left, #ff8a00, #e52e71, #1e90ff)",
                },
                "90%": {
                  backgroundImage:
                    "linear-gradient(to right bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "95%": {
                  backgroundImage:
                    "linear-gradient(to right center, #ff8a00, #e52e71, #1e90ff)",
                },
                "100%": {
                  backgroundImage:
                    "linear-gradient(to right top, #ff8a00, #e52e71, #1e90ff)",
                },
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
