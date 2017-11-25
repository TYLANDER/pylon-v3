import React from 'react'


export default () => (
<header className="headroom self-start w-100 z-max bg-white bb b--light-gray headroom--top headroom--not-bottom sans-serif">
  <div className="mw8-m mw9-l center pa3 ph5-l">
    <div className="cf">
      <div className="fl w-100 w-20-ns pa0 ma0">
        <a href="/">
          <ul className="list w-100 pa0 ma0">
            <li className="dib mb0 mr2 mr4-l f4 f5-ns white pa1 ttu tracked" style={{background: 'linear-gradient(135deg, #3200ff, #8c70ff)'}}> Pylon</li>
          </ul>
        </a>
      </div>
      <div className="fl w-100 w-80-ns pl2-ns pt3 pt0-ns tr-ns">
        <ul className="list w-100 pa0 ma0 mt1">

            <li className="dib dim mb1 mr3 mr4-ns f5 f6-ns fw3 dark-gray"><a className="ttu tracked link near-black hover-purple no-underline" href="/about/">about</a></li>
            <li className="dib dim mb1 mr3 mr4-ns f5 f6-ns fw3 dark-gray"><a className="ttu tracked link near-black hover-purple no-underline" href="/method/">method</a></li>
            <li className="dib dim mb1 mr3 mr4-ns f5 f6-ns fw3 dark-gray"><a className="ttu tracked link near-black hover-purple no-underline" href="/work/">work</a></li>

        </ul>
      </div>
    </div>
  </div>
</header>
)
