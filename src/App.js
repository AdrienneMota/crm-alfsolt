import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';

import Home from './Pages/Home';
import Singup from './Pages/Singup';
import Singin from './Pages/Singin';
import CreatContact from './Pages/CreateContact';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/singup' element={<Singup/>}></Route>
        <Route path='/singin' element={<Singin/>}></Route>
        <Route path='/createcontact' element={<CreatContact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
