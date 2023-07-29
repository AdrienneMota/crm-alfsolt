import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';

import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
