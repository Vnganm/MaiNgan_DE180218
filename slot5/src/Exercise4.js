import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise4 = () => {
  return (
    <>
      <style>{`
        body {
          background-color: #fff;
        }
        .header-bg {
          background-color: #f4a03b;
          padding-bottom: 10px;
          padding-top: 30px;
        }
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .logo {
          max-width: 600px;
          width: 100%;
          background: #fff;
          display: block;
          margin: 0 auto 10px auto;
        }
        .nav-link {
          color: #fff !important;
          font-size: 1rem;
          padding: 0 8px;
          cursor: pointer;
          text-decoration: none;
        }
        .nav-link.active {
          text-decoration: underline;
        }
        .footer {
          background-color: #f4a03b;
          color: #fff;
          text-align: center;
          padding: 12px 0 6px 0;
          position: relative;
          bottom: 0;
          width: 100%;
        }
      `}</style>

      <div className="header-bg pb-2">
        <div className="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/2560px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
            alt="FPT University"
            className="logo my-3"
          />
        </div>

        <nav className="nav justify-content-center mt-2">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </div>

      <div className="container text-center my-5">
        <h4 id="about" className="fw-bold">
          About
        </h4>
        <p>This is the about section of the website.</p>
        <h4 id="contact" className="fw-bold mt-4">
          Contact
        </h4>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </div>

      <div className="footer">&copy; 2023 Website. All rights reserved.</div>
    </>
  );
};

export default Exercise4;
