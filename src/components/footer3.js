import React from 'react'


//the footer component. Unstyled.
export default () => (
<footer className="pv5 w-100 center bg-dark-gray sans-serif lh-copy">
  <div className="mw8-m mw9-l center ph5-l">
    <div className="cf pa3">

    <section className="fl w-100 w-40-ns mb4 mb0-ns">
      <span className="f7 f6-l near-white">Reach Out</span><br />
      <a className="near-white f2  fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:tyler@pylon.design" >
        hello@pylon.design
      </a>
    </section>
    <section className="fr w-100 w-40-ns mr4-m mr5-l mb4 pr0-ns">
      <span className="f7 f6-l near-white">Offices</span><br />
      <span className="f7 f6-l db near-white pv3 mt2 mb4 mb0-l">3440 20th St. <br />#105<br />San Francisco, CA 94110</span>
    </section>
  </div>
  <section className="mw8-m mw9-l center" >
    <div className="pa3">
      <p className="f7 near-white">
        Copyright © 2049 Pylon all rights reserved. <br />Constructing additional Pylons since 2015.
      </p>
    </div>
</section>
</div>
</footer>
)
