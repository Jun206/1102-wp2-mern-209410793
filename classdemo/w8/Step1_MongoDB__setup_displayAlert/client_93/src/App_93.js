import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Dashboard_93, Landing_93,Register_93,Error_93} from "./pages";
import styled from "styled-components";




function App_93() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard_93/>} />
        <Route path='/landing' element={<Landing_93/>} />
        <Route path='/register' element={<Register_93/>} />
        <Route path='*' element={<Error_93/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App_93;
