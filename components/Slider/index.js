import { Card } from "../Card";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Component } from "react";

export class SliderCards extends Component {
  render() {
    return (
      <>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={this.props.settings}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {this.props.cards.map((card) => (
            <div key={card.title}>
              <Card
                src={card.imageSrc}
                title={card.title}
                info={card.info}
                git={card.repo}
                demo={card.demo}
              />
            </div>
          ))}
        </Carousel>
      </>
    );
  }
}
