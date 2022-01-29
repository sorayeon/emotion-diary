import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <img src={process.env.PUBLIC_URL + '/assets/emotion1.png'} alt="행복" />
        <img src={process.env.PUBLIC_URL + '/assets/emotion2.png'} alt="좋음" />
        <img src={process.env.PUBLIC_URL + '/assets/emotion3.png'} alt="보통" />
        <img src={process.env.PUBLIC_URL + '/assets/emotion4.png'} alt="우울" />
        <img src={process.env.PUBLIC_URL + '/assets/emotion5.png'} alt="나쁨" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
