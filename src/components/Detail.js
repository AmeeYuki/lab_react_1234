import { useParams } from "react-router-dom";
import { FilmData } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import React from "react";

export default function Detail() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };

  const userName = useParams();
  const film = FilmData.find((film) => {
    return film.id == userName.id;
  });

  return (
    <div style={themeStyle}>
      <div className="container pt-4 pb-4" style={themeStyle}>
        <div className="row">
          <div className="col-md-4 img-detail">
            <img src={film.image} alt="" />
          </div>
          <div className="col-md-8">
            <h4>
              <b>{film.title}</b>
            </h4>
            <hr />
            <h6>
              <b>Nation: </b>
              {film.nation}
            </h6>
            <h6>
              <b>Year: </b>
              {film.year}
            </h6>
            <p>{film.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
