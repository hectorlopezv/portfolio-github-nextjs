import { Card } from "../Card";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Component } from "react";

export class SliderCards extends Component {
  render() {
    this.props.settings["desktop"].items =
      this.props?.cards?.length >= 2 ? 4 : 2;
    return (
      <div>
        <Carousel
          arrows={this.props.cards?.length > 1}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable={this.props.cards?.length > 2 ? true : false}
          focusOnSelect={false}
          infinite={this.props.cards?.length > 1}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={this.props.settings}
          showDots={false}
          sliderClass=""
          slidesToSlide={this.props.cards?.length > 2 ? 2 : 1}
          swipeable={this.props.cards?.length > 2}
        >
          {this.props.cards?.map((card) => (
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
      </div>
    );
  }
}
