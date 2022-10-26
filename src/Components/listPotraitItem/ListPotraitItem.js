import { Link } from "react-router-dom";
import "./ListPotraitItem.scss";

export default function ListPotraitItem({ data }) {
  const poster = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const urlShow = `/movie-selected/${data.id}`;

  return (
    <Link to={urlShow} style={{ color: "white" }}>
      <div className="listPotraitItem">
        <img src={poster} alt="" />
      </div>
    </Link>
  );
}
