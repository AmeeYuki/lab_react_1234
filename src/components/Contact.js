import React, { useContext } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { ThemeContext } from "./ThemeContext";

function Contact() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <div className="pt-4 pb-4" style={themeStyle}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Paper elevation={3} style={themeStyle}>
              <Typography variant="h6">Contact Information</Typography>
              <div>
                <Typography variant="subtitle1">Name: Your Name</Typography>
                <Typography variant="subtitle1">
                  Email: yourname@example.com
                </Typography>
                <Typography variant="subtitle1">
                  Phone: (123) 456-7890
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={3}>
              <Typography variant="h6">Contact Us</Typography>
              <form>
                <TextField label="Your Name" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Message" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
