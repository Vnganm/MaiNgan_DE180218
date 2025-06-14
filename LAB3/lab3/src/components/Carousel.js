import { Carousel } from 'react-bootstrap';

const PizzaCarousel = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/pizza1.png"
          alt="Neapolitan Pizza"
          style={{ 
            height: '450px', 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <Carousel.Caption>
          <h3 className="fs-2">Neapolitan Pizza</h3>
          <p className="fs-4">Try the most authentic Italian pizza!</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/pizza2.png"
          alt="Delicious Variety"
          style={{ 
            height: '450px', 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <Carousel.Caption>
          <h3 className="fs-2">Delicious Variety</h3>
          <p className="fs-4">Fresh, hot, and ready to serve.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/pizza3.png"
          alt="Book Your Table"
          style={{ 
            height: '450px', 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <Carousel.Caption>
          <h3 className="fs-2">Book Your Table</h3>
          <p className="fs-4">Enjoy your meal with family and friends.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;