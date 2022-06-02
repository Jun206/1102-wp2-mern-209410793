import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_xx from "./pages/Landing_xx";
import {
  Landing_xx,
  Dashboard_xx,
  Register_xx,
  Error_xx,
  TestFetchUseCors_xx,
} from './pages';
import styled from 'styled-components';

function App_xx() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard_xx />} />
        <Route path='/landing' element={<Landing_xx />} />
        <Route path='/register' element={<Register_xx />} />
        <Route path='/testcors' element={<TestFetchUseCors_xx />} />
        <Route path='*' element={<Error_xx />} />
      </Routes>
      {/* <Landing_xx /> */}
    </BrowserRouter>
  );
}

export default App_xx;
