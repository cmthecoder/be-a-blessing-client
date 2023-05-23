import Carousel from "react-bootstrap/Carousel";
import photos from "../utils/carouselPhotos";

const CarouselContainer = () => {
  return (
    <Carousel
      controls={false}
      fade={true}
      pause={false}
      // className="max-w-[1000px] mx-auto flex flex-col justify-center h-full"
      className="w-screen"
    >
      {photos.map((photo) => {
        return (
          <Carousel.Item interval={9000} key={photo}>
            <img className="d-block w-100" src={photo} alt="First slide" />
            <Carousel.Caption>
              <h1>BE A BLESSING</h1>
              <p>SPREAD THE LOVE.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselContainer;
