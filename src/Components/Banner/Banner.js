import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <Carousel>
      {
      props.data ? 
      props.data.map((item, index) => {
        const backdrop = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
        return (
          <Carousel.Item key={index}>
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
