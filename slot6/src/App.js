import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container mt-3">
      <h3>Cards Columns</h3>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card border-primary">
            <img
              src="https://static.wixstatic.com/media/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png/v1/fill/w_568,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png"
              className="card-img-top"
              alt="Car 1"
            />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card border-warning">
            <img
              src="https://static.wixstatic.com/media/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png/v1/fill/w_568,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png"
              className="card-img-top"
              alt="Car 2"
            />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card border-danger">
            <img
              src="https://static.wixstatic.com/media/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png/v1/fill/w_568,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f03d58_84301ff2c5384f8597e421c862fa89ae~mv2.png"
              className="card-img-top"
              alt="Car 3"
            />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
