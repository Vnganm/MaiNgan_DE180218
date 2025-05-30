import React from 'react';

const Exercise3 = () => {
  return (
    <>
      {/* Tiêu đề */}
      <div className="container-fluid bg-light-gray py-5 my-4">
        <h1 className="display-3 fw-bold ms-4">Let's test the grid!</h1>
      </div>

      {/* Nav */}
      <div className="container mb-3">
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" aria-disabled="true" tabIndex={-1}>
            Disabled
          </a>
        </nav>
      </div>

      {/* Grid */}
      <div className="container mb-4">
        <div className="row">
          <div className="col-6 grid-col">First col</div>
          <div className="col-6 grid-col">Second col</div>
        </div>
        <div className="row">
          <div className="col grid-col">col</div>
          <div className="col grid-col">col</div>
          <div className="col grid-col">col</div>
        </div>
        <div className="row">
          <div className="col grid-col">col</div>
          <div className="col grid-col">col</div>
          <div className="col grid-col">col</div>
          <div className="col grid-col">col</div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid bg-footer py-2 mt-4">
        <div className="text-center footer-text">Created by ABC!</div>
      </div>

      {/* CSS nội tuyến bằng style JSX */}
      <style jsx>{`
        .bg-light-gray {
          background-color: #e9ecef;
        }

        .bg-footer {
          background-color: #d3c7b5;
        }

        .grid-col {
          background-color: #ced4da;
          border: 1px solid #adb5bd;
          padding: 10px;
          min-height: 50px;
          text-align: left;
        }

        .footer-text {
          font-size: 2.55rem;
          font-weight: bold;
          color: #343a40;
        }
      `}</style>
    </>
  );
};

export default Exercise3;
