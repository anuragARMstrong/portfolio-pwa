import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container white-text-container text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>
              <img src={process.env.PUBLIC_URL + 'images/mashup-icon.svg'} alt="" />
              <a className="fa-icon fa-icon-2x" href="https://facebook.com/" title="">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://twitter.com/" title="">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://dribbble.com/" title="">
                <i className="fa fa-dribbble"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/" title="">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://vimeo.com/" title="">
                <i className="fa fa-vimeo"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
