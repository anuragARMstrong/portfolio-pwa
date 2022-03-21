import React from 'react';

export default function ProjectSlider() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Projects</h2>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              {/* <img src={process.env.PUBLIC_URL + '/images/img-05.jpg'} className="img-responsive" alt="..." /> */}
              <img
                src="https://armstrongltd.in/assets/images/product/automated-storage-and-retrieval-system/radio-shuttle.jpg"
                className="img-responsive"
                alt="..."
              />
              <div className="carousel-caption">
                <h3 className="h5">MotherBaby Shuttle</h3>
                <p>2021</p>
              </div>
            </div>
            <div className="item">
              <img src="https://armstrongltd.in/assets/images/product/automated.jpg" className="img-responsive" alt="..." />
              <div className="carousel-caption">
                <h3 className="h5">Stacker Crane</h3>
                <p>2022</p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://armstrongltd.in/assets/images/product/automated-storage-and-retrieval-system/mother-baby.jpg"
                className="img-responsive"
                alt="..."
              />
              <div className="carousel-caption">
                <h3 className="h5">Automatic storage and retrieval system</h3>
                <p>2022</p>
              </div>
            </div>
          </div>

          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
