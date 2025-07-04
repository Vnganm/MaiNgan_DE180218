import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const News = () => {
  // Mảng dữ liệu tin tức
  const newLists = [
    { 
      id: 1, 
      title: 'Woman bakes expletive-laden pies to get a rise out of her grandmother in annual tradition', 
      description: '"What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition," wrote Jess Lydon.', 
      images: 'https://static.independent.co.uk/2025/01/22/11/hormone-health-main.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp' 
    },
    { 
      id: 2, 
      title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', 
      description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', 
      images: 'https://danviet.ex-cdn.com/files/f1/upload/2-2017/images/2017-06-13/149734275885539-image021_avek.jpg' 
    },
    { 
      id: 3, 
      title: 'Burger King is testing a new breakfast sandwich', 
      description: 'This is a win for the flatbread fans.', 
      images: 'https://llct.1cdn.vn/2024/07/18/consosukien.vn-pic-news-nam_2024-_kinh-te-bao-chi-so-xu-huong-tat-yeu-phat-trien-nen-bao-chi-hien-dai.jpg' 
    },
    { 
      id: 4, 
      title: 'Popeyes permanently adds chicken wings to its menu', 
      description: 'And you can get them in five different flavors.', 
      images: 'https://www.gbnews.com/media-library/old-man-looking-at-a-laptop-man-holding-car-keys-and-a-man-holding-uk-cash.jpg?id=61114014&width=800&height=532&quality=90&coordinates=0%2C0%2C0%2C0' 
    },
    { 
      id: 5, 
      title: 'Top salmon with a sizzling mix of aromatics and spices', 
      description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', 
      images: 'https://ichef.bbci.co.uk/news/1024/branded_news/ca91/live/e9e97420-7a09-11ef-b282-4535eb84fe4b.png' 
    },
    { 
      id: 6, 
      title: '80 Christmas dinner ideas for the ultimate holiday feast', 
      description: 'Build the perfect Christmas menu with these delicious recipes.', 
      images: 'https://images2.thanhnien.vn/zoom/686_429/Uploaded/dotuan/2021_04_16/madsnissen_ZYVF.jpg' 
    },
    { 
      id: 7, 
      title: 'How to make the easiest prime rib roast for the holidays', 
      description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', 
      images: 'https://static.independent.co.uk/2025/01/22/11/hormone-health-main.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp' 
    },
    { 
      id: 8, 
      title: 'Turn leftover turkey into a flavorful Waldorf salad', 
      description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', 
      images: 'https://cdn-images.vtv.vn/zoom/554_346/2019/6/19/hoanghaq-194054851-1560906543239478008120.jpg' 
    },
  ];

  return (
    <Container className="news-container">
 <h1 style={{ color: 'red' }}>News of the day</h1>

      
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {newLists.map((news) => (
          <Col key={news.id}>
            <Card className="h-100 news-card">
              <Card.Img 
                variant="top" 
                src={news.images} 
                alt={news.title}
                className="news-image"
              />
              <Card.Body>
                <Card.Title className="news-title">{news.title}</Card.Title>
                <Card.Text className="news-description">{news.description}</Card.Text>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;