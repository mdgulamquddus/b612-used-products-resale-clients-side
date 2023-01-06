import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.ilrinnovato.it/pimages/LED-LG-ZERO-ORE-55UP75006LF-Smart-TV-55-Pollici-4K-Ultra-HD-Tele-extra-big-2814-879.jpg"
          className="w-full max-h-screen"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.ilrinnovato.it/pimages/LED-LG-ZERO-ORE-55UP75006LF-Smart-TV-55-Pollici-4K-Ultra-HD-Tele-extra-big-2812.jpg"
          className="w-full max-h-screen"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.ilrinnovato.it/pimages/LG-OLED-2021-NUOVO-SIGILLATO-77C16LA-77-TV-4K-Uhd-SMART-TV-WIFI--extra-big-2256.jpg"
          className="w-full max-h-screen"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://media.ldlc.com/r374/ld/products/00/05/95/54/LD0005955490.jpg"
          className="w-full max-h-screen"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
