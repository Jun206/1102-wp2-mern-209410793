import { useAppContext } from '../context/appContext_93';
import NavLinks from './NavLinks_93';
import Logo from '../components/Logo_93';
import Wrapper from '../assets/wrappers/BigSidebar_93';

const BigSidebar_93 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_93;
