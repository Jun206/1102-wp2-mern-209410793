import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_93, BigSidebar_93, SmallSidebar_93 } from '../../components';

const SharedLayout_93 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_93 />
        <BigSidebar_93 />
        <div>
          <Navbar_93 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_93;

/*
const SharedLayout_93 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
