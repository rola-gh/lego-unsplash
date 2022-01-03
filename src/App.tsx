import Header from './Components/Common/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home'
import SinglePhotoPage from './Views/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:keyword' element={<></>}/>
        <Route path='/photo/:id' element={<SinglePhotoPage />}/>
      </Routes>
    </div>
  );
}
export default App;