import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';

import Home from './Pages/Home';
import Singup from './Pages/Singup';
import Singin from './Pages/Singin';
import CreatContact from './Pages/CreateContact';
import ContactDetails from './Pages/ContactDetails';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Singup/>}></Route>
        <Route path='/signin' element={<Singin/>}></Route>
        <Route path='/createcontact' element={<CreatContact/>}></Route>
        <Route path='/createcontact/:id' element={<CreatContact/>}></Route>
        <Route path='/contactdetails/:id' element={<ContactDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
