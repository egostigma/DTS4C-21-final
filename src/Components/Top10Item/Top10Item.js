import { Card, Col, Row } from "react-bootstrap";
import { CardImage } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Top10Item.scss";

const Top10Item = (props) => {
  const poster = `https://image.tmdb.org/t/p/original/${props.data.poster_path}`;
  const urlShow  = `/movie-selected/${props.data.id}`

  return (
    <div className="d-none d-sm-block">
      <Link to={urlShow} style={{color:"white"}}>
      <div className="cardTop10">
        <div className="left">
          <p className="chart">{props.chartNumber}</p>
        </div>
        <div className="right">
          <img
            src={poster}
            className="card-img"
            alt="..."
          />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Top10Item;
