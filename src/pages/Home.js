import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';
import ProjectSlider from '../components/ProjectSlider';
import Languages from '../components/Languages';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import About from '../components/About';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="background-color-layer"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/img-11.jpg)` }}
        ></div>
        <main className="content-wrapper">
          {/*---------------Header Section---------- */}
          <Header />

          {/* ----------------Main content---------------- */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <About />
                <Projects />
                <WorkExperience />
                <Education />
                <Languages />
                <ProjectSlider />
                <Social />
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
