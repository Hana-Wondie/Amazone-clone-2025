import classes from "../CarouselEffect/Carousel.module.css"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../CarouselEffect/Images/images.js"
function CarouselEffect() {
  return (
    <>
      <div>
        <Carousel 
        autoPlay = {true}
        infiniteLoop = {true}
        showIndicators = {false}
        showThumbs = {false}
        >
            {
                img?.map((images) => (
                    <img src= {images} alt="" />
                ))
            }
        </Carousel>
        <div className= {classes.hero_img}></div>
      </div>
    </>
  );
}

export default CarouselEffect
