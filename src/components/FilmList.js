import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Grid,
  Avatar,
  Container,
  Card,
} from "@mui/material";
import { FilmData } from "../shared/ListOfFilms";
import { Image } from "@mui/icons-material";
import { Row } from "react-materialize";

function FilmList() {
  return (
    <div>
      <Container>
        <h4>List of Film:</h4> <hr />
        <Paper>
          <div className="row">
            {FilmData.map((film) => (
              <div className="col-md-6 mb-4" key={film.id}>
                <Card>
                  <Row>
                    <div className="col-7 col-md-7">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="img-film"
                      />
                    </div>
                    <div className=" col-5 col-md-5">
                      <h5>Title: {film.title} </h5>
                      <p>Year: {film.year}</p>
                      <p>Nation: {film.nation}</p>
                    </div>
                  </Row>
                </Card>
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default FilmList;
