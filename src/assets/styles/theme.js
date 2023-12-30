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
                "rotateGradient 1s infinite ease-in, borderRadius 3s infinite linear",
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
                    "linear-gradient(to left bottom, #ff8a00, #e52e71, #1e90ff)",
                },
                "9%": {
                  backgroundImage:
                    "linear-gradient(to left center, #ff8a00, #e52e71, #1e90ff)",
                },
                "18%": {
                  backgroundImage:
                    "linear-gradient(to left top, #ff8a00, #e52e71, #1e90ff)",
                },
                "27%": {
                  backgroundImage:
                    "linear-gradient(to top left, #ff8a00, #e52e71, #1e90ff)",
                },
                "36%": {
                  backgroundImage:
                    "linear-gradient(to top center, #ff8a00, #e52e71, #1e90ff)",
                },
                "45%": {
                  backgroundImage:
                    "linear-gradient(to top right, #ff8a00, #e52e71, #1e90ff)",
                },
                "54%": {
                  backgroundImage:
                    "linear-gradient(to right top, #ff8a00, #e52e71, #1e90ff)",
                },
                "63%": {
                  backgroundImage:
                    "linear-gradient(to right center, #ff8a00, #e52e71, #1e90ff)",
                },
                "72%": {
                  backgroundImage:
                    "linear-gradient(to right bottom , #ff8a00, #e52e71, #1e90ff)",
                },
                "81%": {
                  backgroundImage:
                    "linear-gradient(to bottom right, #ff8a00, #e52e71, #1e90ff)",
                },
                "90%": {
                  backgroundImage:
                    "linear-gradient(to bottom center, #ff8a00, #e52e71, #1e90ff)",
                },
                "100%": {
                  backgroundImage:
                    "linear-gradient(to bottom left, #ff8a00, #e52e71, #1e90ff)",
                },
              },
            },
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.grid": {
            "&:hover": {
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
          },
        },
      },
    },
  },
});

export default theme;
