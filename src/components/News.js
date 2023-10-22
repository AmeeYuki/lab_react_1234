import React, { useContext } from "react";
import { Row } from "react-materialize";
import { Card, Container, Paper, Typography } from "@mui/material";
import { NewFilmData } from "../shared/ListNewsFilm";
import "../assets/css/newFilm.css";
import { ThemeContext } from "./ThemeContext";

export default function News() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <div className="pt-5 pb-5" style={themeStyle}>
      <Container>
        {NewFilmData.map((film) => (
          <Paper elevation={3} style={themeStyle}>
            <Row>
              <div className="col-md-4">
                <img src={film.image} alt="" />
              </div>
              <div className="col-md-7">
                <Typography variant="h5" gutterBottom>
                  <b>{film.title}</b>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <b>Year:</b> {film.year} | <b>Nation:</b> {film.nation}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Detail:</b> {film.info}
                </Typography>
              </div>
            </Row>
          </Paper>
        ))}
      </Container>
    </div>
  );
}
