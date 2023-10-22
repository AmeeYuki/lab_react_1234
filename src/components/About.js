import React, { useContext } from "react";
import { Container, Paper, Typography, colors } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  const styleTheme = {
    color: theme.color,
    backgroundColor: theme.backgroundColor,
  };

  return (
    <div style={styleTheme} className="pt-5 pb-5">
      <Container>
        <Paper elevation={3} style={styleTheme}>
          <Typography variant="h4">About Us</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ac nisl laoreet luctus. Aenean ac ullamcorper mauris. Nulla
            facilisi. Integer vel efficitur purus. Cras volutpat metus eget
            pellentesque. Sed scelerisque sapien in ante finibus, eget egestas
            purus tristique. Sed facilisis nunc et justo consectetur, in blandit
            tortor hendrerit. Sed a orci nec nisl volutpat mattis. Phasellus
            volutpat vel sem nec dignissim. Vivamus tincidunt quam vel congue.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
