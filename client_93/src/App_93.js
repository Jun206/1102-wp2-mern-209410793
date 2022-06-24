import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_93 from "./pages/Landing_93";
import {
  Landing_93,
  Register_93,
  Error_93,
  ProtectedRoute_93,
  TestFetchUseCors_93,
  TestFetchUseProxy_93,
} from './pages';

import {
  AddJob_93,
  AllJobs_93,
  Profile_93,
  Stats_93,
  SharedLayout_93,
} from './pages/dashboard';

import styled from 'styled-components';

function App_93() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute_93>
              <SharedLayout_93 />
            </ProtectedRoute_93>
          }
        >
          <Route index path='profile' element={<Profile_93 />} />
          <Route path='stats' element={<Stats_93 />} />
          <Route path='add-job' element={<AddJob_93 />} />
          <Route path='all-jobs' element={<AllJobs_93 />} />
        </Route>
        <Route path='/landing' element={<Landing_93 />} />
        <Route path='/register' element={<Register_93 />} />
        <Route path='/testcors' element={<TestFetchUseCors_93 />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_93 />} />
        <Route path='*' element={<Error_93 />} />
      </Routes>
      {/* <Landing_93 /> */}
    </BrowserRouter>
  );
}

export default App_93;
