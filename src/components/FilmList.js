import React, { useContext } from "react";
import { Paper, Container, Card, colors } from "@mui/material";
import { FilmData } from "../shared/ListOfFilms";
import { Row } from "react-materialize";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

function FilmList() {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <div className="pt-4 pb-4" style={themeStyle}>
      <Container>
        <h4>
          <b>List of Film</b>:
        </h4>{" "}
        <hr />
        <Paper style={themeStyle}>
          <Row>
            {FilmData.map((film) => (
              <div className="col-md-6" key={film.id}>
                <Card style={themeStyle}>
                  <Row>
                    <div className="col-5 col-md-7">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="img-film"
                      />
                    </div>
                    <div className=" col-7 col-md-5">
                      <div className="title">
                        <h5>
                          <b>Name:</b> {film.title}{" "}
                        </h5>
                        <p>
                          <b>Year:</b> {film.year}
                        </p>
                        <p>
                          <b>Nation</b>: {film.nation}
                        </p>
                      </div>
                      <div
                        className=""
                        onClick={() => {
                          setFilm(film);
                        }}
                      >
                        <a
                          style={{ color: "white", fontSize: "15px" }}
                          href="#popup1"
                          id="openPopUp"
                        >
                          <button className="btn btn-dark">
                            <b>View Detail</b>
                          </button>
                        </a>
                      </div>
                      <Link to={`detail/${film.id}`}>
                        <p>
                          <button className="mt-3 btn btn-dark">
                            View more
                          </button>
                        </p>
                      </Link>
                    </div>
                  </Row>
                </Card>
              </div>
            ))}
            <Card>
              <div id="popup1" className="overlay ">
                <div className="popup container mt-5">
                  <div className="row">
                    <div className="col-4">
                      <img src={film.image} alt={film.title} />
                    </div>

                    <div className="col-8">
                      <h4>{film.title}</h4>

                      <p style={{ fontSize: "15px" }} className="content">
                        {film.info}
                      </p>

                      <a href="#">
                        <button
                          className="close btn-danger"
                          style={{
                            backgroundColor: "red",
                            fontSize: "20px",
                            color: "white",
                          }}
                        >
                          Close
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Row>
        </Paper>
      </Container>
    </div>
  );
}

export default FilmList;
