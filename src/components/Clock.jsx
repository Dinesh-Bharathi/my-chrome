import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FlippingTypography = motion(Typography);

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [flippingMinute, setFlippingMinute] = useState(
    currentTime.getMinutes()
  );
  const flippingAnimationControls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date();
      const previousMinute = flippingMinute;
      const currentMinute = newTime.getMinutes();

      setCurrentTime(newTime);

      // Check if a minute is crossed
      if (currentMinute !== previousMinute) {
        // Trigger the flipping animation
        flippingAnimationControls.start({
          rotateX: [0, 360],
          transition: { duration: 0.5, type: "spring", stiffness: 50 },
        });

        // Set the flipping minute after animation completes
        setTimeout(() => {
          setFlippingMinute(currentMinute);

          // Trigger the blinking effect
          flippingAnimationControls.start({
            scale: [1, 0.8, 1],
            transition: { duration: 0.3, repeat: 1, repeatType: "reverse" },
          });
        }, 500);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [flippingMinute, flippingAnimationControls]);

  const currentHour = currentTime.getHours();
  const ampm = currentHour >= 12 ? "PM" : "AM";
  const displayHour =
    currentHour > 12 ? currentHour - 12 : currentHour === 0 ? 12 : currentHour;
  const formattedMinute =
    flippingMinute < 10 ? `0${flippingMinute}` : flippingMinute;
  const formattedSeconds =
    currentTime.getSeconds() < 10
      ? `0${currentTime.getSeconds()}`
      : currentTime.getSeconds();

  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = currentTime.toLocaleDateString("en-US", optionsDate);

  return (
    <Box p={3}>
      <FlippingTypography variant="h2" animate={flippingAnimationControls}>
        {displayHour}:{formattedMinute}:{formattedSeconds} {ampm}
      </FlippingTypography>
      <Typography variant="h6">{formattedDate}</Typography>
    </Box>
  );
};

export default Clock;
