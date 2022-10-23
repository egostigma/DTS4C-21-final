import "./ListItem.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListItem({ index ,data}) {
  const [isHovered, setIsHovered] = useState(false);
  const backdrop = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
  const urlShow  = `/movie-selected/${data.id}`
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={backdrop}
        alt=""
      />
      {isHovered ? 
        <>
          <Link to={urlShow}>
            <div className="itemInfo">
              <div className="itemInfoTop">
                <span>{data.original_title}</span>
                <span className="limit">{data.original_language}</span>
                <span>{data.vote_average}</span>
              </div>
              <div className="desc">
                {data.overview.slice(0,100)}
              </div>
              <div className="genre">Action</div>
            </div>
          </Link>
        </>
      :
      <></>
      }
    </div>
  );
}
