import React from 'react';

export default function Projects() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4">
            {/* <img src={process.env.PUBLIC_URL + '/images/img-02.jpg'} className="img-responsive" alt="" /> */}
            <img
              src="https://armstrongltd.in/assets/images/product/automated-storage-and-retrieval-system/mother-baby.jpg"
              className="img-responsive"
              alt=""
            />
            <h3 className="h5">ASRS Project</h3>
            <p>December 2020</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://armstrongltd.in/assets/images/product/automated-storage-and-retrieval-system/radio-shuttle.jpg"
              className="img-responsive"
              alt=""
            />
            <h3 className="h5">Project 2</h3>
            <p>January 2022</p>
          </div>
          <div className="col-md-4">
            <img src="https://armstrongltd.in/assets/images/product/automated.jpg" className="img-responsive" alt="" />
            <h3 className="h5">Project 3</h3>
            <p>February 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
