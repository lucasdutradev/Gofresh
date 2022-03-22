import React from "react";
import Carousel from "react-bootstrap/Carousel";
import QuotationMarks from "../../images/quotationMarks.svg";

const CarouselContainer = () => {
  return (
    <Carousel className="Carousel" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Aspas"
        />
        <Carousel.Caption>
          <h3>Ce qu'en pense Stéphanie</h3>
          <p>
            Ce qu'en pense StéphanieCe qu'en pense StéphanieCe qu'en pense
            Stéphanie
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={QuotationMarks} alt="Aspas" />
        <Carousel.Caption>
          <h3>Ce qu'en pense Stéphanie</h3>
          <p>
            Ce qu'en pense StéphanieCe qu'en pense StéphanieCe qu'en pense
            Stéphanie
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={QuotationMarks} alt="Aspas" />
        <Carousel.Caption>
          <h3>Ce qu'en pense Stéphanie</h3>
          <p>
            Ce qu'en pense StéphanieCe qu'en pense StéphanieCe qu'en pense
            Stéphanie
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
