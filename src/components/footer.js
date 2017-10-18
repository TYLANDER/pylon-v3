import React from 'react'


//the footer component. Unstyled.
export default () => (
<footer className="pa4 pa5-l black-70 bt b--black-10">
  <div className="mb4-l cf">
    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 className="f5 f4-l fw6">SF</h4>
      <span className="f7 f6-l db black-70">3440 20th St.</span>
      <span className="f7 f6-l black-70">San Francisco, CA 94110 </span>
      <a className="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
        +1 804-519-7677
      </a>
    </article>
    <article className="mb4 mb0-ns w-100 w-50-l fr">
      <a className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:tyler@pylon.design" >
        hello@pylon.design
      </a>
    </article>
  </div>
  <div className="dt dt--fixed w-100" >
    <div className="dn dtc-ns v-mid">
      <p className="f7 black-70 dib pr3 mb3">
        Copyright © Pylon 2049
      </p>
    </div>
  </div>
</footer>
)
