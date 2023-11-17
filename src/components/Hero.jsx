import React from "react";
import Image1 from "../images/pic1.webp";
import Image2 from "../images/pic2.jpg";
import Offers from "./Offers";
import Card from "./Card";

function Hero() {
  return (
    <div className='ubg-primary color-white'>
      <div
        id='hero-section'
        className='d-flex m-5 justify-content-center align-items-center'
      >
        <div className='hero-text-section d-flex mr-5'>
          <p>
            Indulge in a symphony of flavors at our artisanal bakery. Welcome to
            a world where the aroma of freshly baked wonders captivates your
            senses. Our master bakers craft each creation with passion, using
            only the finest ingredients to ensure every bite is pure delight.
            From flaky croissants to decadent cakes, experience the epitome of
            taste and craftsmanship. Whether it's a special occasion or a
            craving for the extraordinary, our bakery offers a haven for your
            palate. Elevate your moments with the magic of our oven-fresh
            delights. Your journey to exceptional taste begins here.
          </p>
        </div>
        <div className='hero-pictures-section d-flex flex-column'>
          <img className='hero-images' src={Image1} alt='' />
          <img
            id='hero-section-second-image'
            className='hero-images ml-5 '
            src={Image2}
            alt=''
          />
        </div>
      </div>
      <div className=''>
        <h1>Our Offerings</h1>
        <div className='d-flex flex-wrap justify-content-center'>
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
          <Card img={Image1} name={"Barfi"} price={1200} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
