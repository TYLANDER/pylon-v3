import React from 'react'


export default () => (
<header className="headroom self-start w-100 z-max bg-black bb b--dark-gray headroom--top headroom--not-bottom code">
  <div className="mw8-m mw9-l center pa3 ph5-l">
    <div className="cf">
      <div className="fl w-100 w-20-ns pa0 ma0">
        <a href="/">
          <ul className="list w-100 pa0 ma0">
            <li className="dib mb0 mr2 mr4-l f4 f4-ns off-white pa1 code" style={{background: 'linear-gradient(135deg, #3200ff, #8c70ff)'}}>Pylon</li>
          </ul>
        </a>
      </div>
      <div className="fl w-100 w-80-ns pl2-ns pt3 pt0-ns tr-ns off-white">
        <ul className="list w-100 pa0 ma0 mt1">

            <li className="dib mb1 mr3 mr4-ns f6 f5-ns fw2"><a className="ttc underline-hover link near-white no-underline" href="/about/">about</a></li>
            <li className="dib mb1 mr3 mr4-ns f6 f5-ns fw2"><a className="ttc underline-hover link near-white no-underline" href="/method/">method</a></li>
            <li className="dib mb1 mr3 mr4-ns f6 f5-ns fw2"><a className="ttc underline-hover link near-white no-underline" href="/work/">work</a></li>

        </ul>
      </div>
    </div>
  </div>
</header>
)
