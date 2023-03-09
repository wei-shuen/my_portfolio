import React from 'react';
import Logo from './icon/logo.js';
import Menu from './icon/menu.js';
import Portrait from '../image/portrait.png';


const Home = () => {
  return (
    <div>
      {/* header */}
      <header className="header">
        <div className="header_logo">
          <Logo width={32} height={32} />
        </div>
        <h1 className="header_title">WEI-SHUEN</h1>
        <div className="header_menu">
          <Menu width={32} height={32} />
        </div>
      </header>

      {/* brief */}
      <section className="brief">
        <div className="brief_portrait">
          <img className="img_portrait" src={Portrait} alt="protrait" />
        </div>
        <div className="brief_content">
          <p className="brief_welcome">Hello!</p>
          <h2 className="brief_name">I am Wei-Shuen.</h2>
          <p className="brief_description">A front-end developer & UI/UX designer with a sensibility and rationality mindset.</p>
        </div>
      </section>
      
      {/* content */}

      {/* footer */}
    </div>
  );
};

export default Home;