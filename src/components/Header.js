import React from 'react';

export default function Header() {
  return (
    <header className="white-text-container section-container">
      <div className="text-center">
        <h1>I am Anurag</h1>
        <p>Software Developer</p>
        <p>
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
    </header>
  );
}
