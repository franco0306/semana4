import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = ({ src, alt }) => {
  return <img src={src} className="d-block w-80" alt={alt} />;
};

const Main = () => {
  return (
    <main>
      <div className="container text-center">
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://hmperu.vtexassets.com/arquivos/ids/4178345-600-900?v=638387495980070000&width=600&height=900&aspect=true"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://hmperu.vtexassets.com/arquivos/ids/4245761-600-900?v=638420365518100000&width=600&height=900&aspect=true"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              src="https://hmperu.vtexassets.com/arquivos/ids/3944547-600-900?v=638321962462900000&width=600&height=900&aspect=true"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default Main;
