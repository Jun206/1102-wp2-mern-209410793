import { useAppContext } from '../context/appContext_xx';
import NavLinks from './NavLinks_xx';
import Logo from '../components/Logo_xx';
import Wrapper from '../assets/wrappers/BigSidebar_xx';

const BigSidebar_xx = () => {
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

export default BigSidebar_xx;
