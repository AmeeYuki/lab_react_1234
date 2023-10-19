import React from "react";
import { Paper, Container, Card } from "@mui/material";
import { FilmData } from "../shared/ListOfFilms";
import { Row } from "react-materialize";
import { useState } from "react";

function FilmList() {
  const [film, setFilm] = useState([]);
  return (
    <div className="mt-4 mb-4">
      <Container>
        <h4>
          <b>List of Film</b>:
        </h4>{" "}
        <hr />
        <Paper>
          <Row>
            {FilmData.map((film) => (
              <div className="col-md-6" key={film.id}>
                <Card>
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
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          setFilm(film);
                        }}
                      >
                        <a
                          style={{ color: "white", fontSize: "15px" }}
                          href="#popup1"
                          id="openPopUp"
                        >
                          <b>View Detail</b>
                        </a>
                      </button>
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
