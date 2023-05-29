import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popup from './components/Popup';
import Navbar from './components/Navbar';
import Books from './components/Books';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import Catagories from './components/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Catagories />} />
      </Routes>
      <Popup />
      <AddBook />
      <Footer />
    </Router>
  );
}

export default App;
