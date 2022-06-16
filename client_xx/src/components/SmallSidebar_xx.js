import Wrapper from '../assets/wrappers/SmallSidebar_xx';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_xx';

import Logo_xx from './Logo_xx';
import NavLinks_xx from './NavLinks_xx';

const SmallSidebar_xx = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_xx />
          </header>
          <NavLinks_xx toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_xx;
