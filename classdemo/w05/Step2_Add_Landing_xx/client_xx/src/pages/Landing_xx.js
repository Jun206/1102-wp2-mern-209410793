import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

import styled from 'styled-components'

const Landing_xx = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nobis eum temporibus tempore ad, pariatur tenetur, alias odio
            asperiores voluptatibus sint? Aliquam aliquid commodi nulla.
          </p>
          <a href='#' className='btn btn-hero'>
            Login/Register
          </a>
        </div>
        <div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.main`
  nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
  }

  .page {
      min-height: calc(100vh - var(--nav-height));
      display: grid;
      align-items: center;
  }

  h1 {
      font-weight: 700;

      span {
          color: var(--primary-500);
      }
  }

  p {
      color: var(--grey-600);
  }

  .main-img {
     display: none; 
  }


  @media (min-width: 768px) {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img {
        display: block;
    }
  }


      
`

export default Landing_xx;
