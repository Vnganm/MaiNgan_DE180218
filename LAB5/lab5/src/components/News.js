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
      images: 'https://s.abcnews.com/images/Lifestyle/250524_abcnl_11a_julie_wainwright_book1_hpMain_16x9_608.jpg' 
    },
    { 
      id: 3, 
      title: 'Burger King is testing a new breakfast sandwich', 
      description: 'This is a win for the flatbread fans.', 
      images: 'https://www.gbnews.com/media-library/old-man-looking-at-a-laptop-man-holding-car-keys-and-a-man-holding-uk-cash.jpg?id=61114014&width=800&height=532&quality=90&coordinates=0%2C0%2C0%2C0' 
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
      images: 'https://static.independent.co.uk/2025/01/22/11/hormone-health-main.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp' 
    },
    { 
      id: 6, 
      title: '80 Christmas dinner ideas for the ultimate holiday feast', 
      description: 'Build the perfect Christmas menu with these delicious recipes.', 
      images: 'https://www.gbnews.com/media-library/old-man-looking-at-a-laptop-man-holding-car-keys-and-a-man-holding-uk-cash.jpg?id=61114014&width=800&height=532&quality=90&coordinates=0%2C0%2C0%2C0' 
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
      images: 'https://s.abcnews.com/images/Lifestyle/250524_abcnl_11a_julie_wainwright_book1_hpMain_16x9_608.jpg' 
    },
  ];

  return (
    <Container className="news-container">
 <h1 style={{ color: 'red' }}>News</h1>

      
      <Row xs={1} md={2} lg={3} className="g-4">
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