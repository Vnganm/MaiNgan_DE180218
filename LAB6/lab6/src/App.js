import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import QuizReview from './components/QuizReview';
// Sử dụng default import cho About, named import cho News và Contact
import About from './components/About'; // Default import
import { News } from './components/News';  // Named import
import { Contact } from './components/Contact'; // Named import

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/result" element={<QuizResult />} />
            <Route path="/quiz/review" element={<QuizReview />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;