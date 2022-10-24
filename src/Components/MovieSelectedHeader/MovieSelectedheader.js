import "./MovieSelectedheader.scss";

export default function MovieSelectedheader(props) {
  const backdrop = `https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`;

  return (
    <div className="featured">
        <img src={backdrop} alt="" />
        <div className="info">
        <h1 className="movieTitle">{props.data.original_title}</h1>
        <p className="desc d-none d-sm-block">{props.data.overview}</p>
        <div className="featured--buttons">
            <a className="featured--watchButton" onClick={props.playMovie}>▶ Play</a>
            <a className="featured--myListButton" href="/">+ My List</a>
        </div>
        </div>
    </div>
  );
}