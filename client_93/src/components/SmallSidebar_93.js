import Wrapper from '../assets/wrappers/SmallSidebar_93';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_93';

import Logo_93 from './Logo_93';
import NavLinks_93 from './NavLinks_93';

const SmallSidebar_93 = () => {
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
            <Logo_93 />
          </header>
          <NavLinks_93 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_93;
