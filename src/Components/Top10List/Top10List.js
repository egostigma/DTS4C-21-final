import React from "react";
import Top10Item from "../Top10Item/Top10Item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Top10List = (props) => {
  return (
    <div className="list">
      <span className="listTitle">{props.title}</span>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {props.data ? (
          props.data.map((item, index) => {
            return (
              <Top10Item chartNumber={index + 1} data={item} key={index} />
            );
          })
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default Top10List;
