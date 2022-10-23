import "./ListPotraitItem.scss";

export default function ListPotraitItem({ data }) {
  const poster = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  return (
    <div
      className="listPotraitItem"
    >
      <img
        src={poster}
        alt=""
      />
    </div>
  );
}
