import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const AnimatedSearchIcon = motion(SearchIcon);

export default function SearchBar() {
  const [searchText, setSearchText] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (isValidUrl(searchText)) {
      window.open(searchText, "_blank");
    } else {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchText
      )}`;
      window.open(searchUrl, "_blank");
    }
    setSearchText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchText) {
      handleSearch(event);
    }
  };

  const isValidUrl = (text) => {
    try {
      const url = new URL(text);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (error) {
      return false;
    }
  };

  return (
    <Box display={"flex"} justifyContent={"center"} p={5}>
      <Paper
        component="form"
        sx={{
          p: "6px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
          background: "#000",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -3,
            left: -3,
            right: -3,
            bottom: -3,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(to left, #ff8a00, #e52e71, #1e90ff)`,
            backgroundClip: "padding-box",
            borderRadius: "4px",
            zIndex: -1,
            opacity: isFocused ? 1 : 0,
            transition: "opacity 0.3s",
            animation: isFocused
              ? "running-gradient-outline 2s infinite linear, rotateGradient 5s infinite ease-in"
              : "none",
          },
          "&:focus-within::before": {
            opacity: 1,
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
          "@keyframes running-gradient-outline": {
            "0%": {
              boxShadow: "0 0 5px 2px #ff8a00",
            },
            "50%": {
              boxShadow: "0 0 5px 2px #e52e71",
            },
            "100%": {
              boxShadow: "0 0 5px 2px #1e90ff",
            },
          },
        }}
        onSubmit={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <InputBase
          sx={{ ml: 3, flex: 1, color: "#aaa" }}
          placeholder="Search Google or type URL"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            color: "#fff",
            "&:disabled": {
              color: "#aaa",
            },
          }}
          aria-label="search"
          disabled={!searchText.trim()}
        >
          <AnimatedSearchIcon
            animate={
              searchText.trim()
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [55, 360, 55],
                    x: [10, 10, -10, -10, 10, 10],
                    y: [8, 8, 8, -8, -8, 8],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }
                : {
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
            }
          />
        </IconButton>
      </Paper>
    </Box>
  );
}
