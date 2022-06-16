import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_xx, BigSidebar_xx, SmallSidebar_xx } from '../../components';

const SharedLayout_xx = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_xx />
        <BigSidebar_xx />
        <div>
          <Navbar_xx />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_xx;

/*
const SharedLayout_xx = () => {
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
