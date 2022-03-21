import React from 'react';

export default function WorkExperience() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Work</h2>
        <div className="work-experience">
          <small className="date">2021-Present</small>
          <h3 className="h5 date-title">
            Software developer -{' '}
            <a href="https://armstrongltd.in/" title="Armstrong Automation">
              Armstrong Automation
            </a>
          </h3>

          <p>Handling ASRS project. Developing | Developing | Maintaining | Testing ASRS Software modules.</p>
        </div>

        <div className="work-experience">
          <small className="date">2020-2021</small>
          <h3 className="h5 date-title">
            Web developer -{' '}
            <a href="https://vouchagram.com/" title="Vouchagram India">
              Vouchagram India
            </a>
          </h3>

          <p>Developing | Maintaining Multiple banks and business's voucher portals, Loyalty point redemption etc.</p>
        </div>
      </div>
    </div>
  );
}
