import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import PizzaCarousel from './components/Carousel';
import Menu from './components/Menu';
import BookTable from './components/BookTable';

function App() {
  return (
    <div>
      <Header />
      <PizzaCarousel />
      <Menu />
      <BookTable />
    </div>
  );
}

export default App;