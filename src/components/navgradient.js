import React from 'react'


export default () => (

<header className="headroom self-start w-100 accentcolorone z-max bg-white bb b--dark-gray headroom--top headroom--not-bottom code" style={{background: 'linear-gradient(135deg, #3200ff, #8c70ff)'}}>
  <div className="mw7-m mw8-l center">
    <div className="cf pa3">
      <div className="fl w-100 w-20-ns pa0 ma0">
        <a href="/">
          <ul className="list w-100 pa0 ma0">
            <li className="dib mb0 mr2 mr4-l f4 f5-ns near-white pa1" style={{backgroundColor:'#3200ff'}}>//Pylon</li>
          </ul>
        </a>
      </div>
      <div className="fl w-100 w-80-ns pl2-ns pt3 pt0-ns tr-ns">
        <ul className="list w-100 pa0 ma0 mt1">

            <li className="dib mb1 mr3 mr4-l f6 f5-ns"><a className="ttc underline-hover link near-white no-underline" href="/about/">about</a></li>

            <li className="dib mb1 mr3 mr4-l f6 f5-ns"><a className="ttc underline-hover link near-white no-underline" href="/work/">work</a></li>

        </ul>
      </div>
    </div>
  </div>
</header>
)
