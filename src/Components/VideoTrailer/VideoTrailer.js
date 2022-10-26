// import { Container } from "react-bootstrap";
import "./VideoTrailer.scss";

export default function VideoTrailer(props) {
  const youtubeURL = `https://www.youtube.com/embed/${props.youtubeId.key}`
  return (
    <div className="featured">
        <div className="videoContainer">
        <iframe
            title={props.title}
            width="100%"
            height="100%"
            src={youtubeURL}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write encrypted-media; gyroscope; picture-inpicture"
            allowFullScreen
        />
        </div>
    </div>
  );
}
