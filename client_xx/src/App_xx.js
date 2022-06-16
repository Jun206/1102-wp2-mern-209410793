import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_xx from "./pages/Landing_xx";
import {
  Landing_xx,
  Register_xx,
  Error_xx,
  ProtectedRoute_xx,
  TestFetchUseCors_xx,
  TestFetchUseProxy_xx,
} from './pages';

import {
  AddJob_xx,
  AllJobs_xx,
  Profile_xx,
  Stats_xx,
  SharedLayout_xx,
} from './pages/dashboard';

import styled from 'styled-components';

function App_xx() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute_xx>
              <SharedLayout_xx />
            </ProtectedRoute_xx>
          }
        >
          <Route index element={<Stats_xx />} />
          <Route path='profile' element={<Profile_xx />} />
          <Route path='add-job' element={<AddJob_xx />} />
          <Route path='all-jobs' element={<AllJobs_xx />} />
        </Route>
        <Route path='/landing' element={<Landing_xx />} />
        <Route path='/register' element={<Register_xx />} />
        <Route path='/testcors' element={<TestFetchUseCors_xx />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_xx />} />
        <Route path='*' element={<Error_xx />} />
      </Routes>
      {/* <Landing_xx /> */}
    </BrowserRouter>
  );
}

export default App_xx;
