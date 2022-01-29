import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

// COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={'App'}
          leftChild={
            <MyButton
              text={'왼쪽 버튼'}
              onClick={() => alert('왼쪽 버튼 클릭')}
            />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('오른쪽 버튼 클릭')}
            />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={'성공버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'positive'}
        />
        <br />
        <MyButton
          text={'취소버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'negative'}
        />
        <br />
        <MyButton text={'일반버튼'} onClick={() => alert('버튼 클릭')} />
        <br />
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
