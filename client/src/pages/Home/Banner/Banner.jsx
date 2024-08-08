import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/D8vXmMt/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/xq185mx/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/LQbhV0W/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/Z1Hj0HC/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/nQsZf88/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/6wpn9p8/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
