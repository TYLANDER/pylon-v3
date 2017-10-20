import React from 'react'


//the footer component. Unstyled.
export default () => (
<footer className="mw-100 pa4 pa5-l bg-light-gray">
  <div className="mb4-l flex flex-column flex-row-ns mw9  pt4 pt0-ns center">
    <article className="mb4 mb0-ns w-100 w-50-l fr">
      <span className="f7 f6-l black-80">Reach Out</span><br />
      <a className="black-80 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:tyler@pylon.design" >
        hello@pylon.design
      </a>
    </article>
    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <span className="f7 f6-l black-80 ">Offices</span><br />
      <span className="f7 f6-l db black-80 pv3 mt2 mb4 mb0-l">3440 20th St.<br />San Francisco, CA 94110</span>
    </article>
  </div>
  <div className="dt dt--fixed w-100" >
    <div className="dn dtc-ns v-mid">
      <p className="f7 black-80 pr3 mb3">
        Copyright © 2049 Pylon all rights reserved.
      </p>
    </div>
  </div>
</footer>
)
