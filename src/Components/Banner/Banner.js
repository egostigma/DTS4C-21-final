// import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <Carousel>
      {
      props.data ? 
      props.data.map((item, index) => {
        const backdrop = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
        const urlShow  = `/movie-selected/${item.id}`
        return (
          <Carousel.Item key={index}>
            <Link style={{color:"white"}} to={urlShow}>
              <section className="featured" style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${backdrop})`
              }}>
                  <div className="featured--vertical">
                      <div className="featured--horizontal">
                          <div className="featured--name">{item.original_title}</div>
                          <div className="featured--description">{item.overview}</div>
                      </div>
                  </div>
              </section>
            </Link>
          </Carousel.Item>
        );
      })
      :
      <div></div>
      }
    </Carousel>
  );
};

export default Banner;
