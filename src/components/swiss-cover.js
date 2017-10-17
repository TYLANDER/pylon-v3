import React from 'react'
import Img from 'react-image'





export default () => (
  <div>
<main className="cf pa3 pa4-m pa5-l mw9 center helvetica">
  <div className="fr w-100 w-80-l">
    <p className="f6">
      cells-interlinked
    </p>
    <h1 className="f2 f1-l lh-title mt0 mb4 mb5-ns">
      Pylon<br className="dn db-ns"/> Product Design and Development</h1>
  </div>
  <div className="f6 lh-copy fl w-100 mb4">
    <div className="fl-ns w-100 w-20-l pr3-m pr5-l">
      <p>
        Year <small className="fw6">2048/49</small>
      </p>
    </div>
    <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Bitcoin Block Size
      </p>
    </div>
    <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Bitcoin Address
      </p>
    </div>
    <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        hello@pylon.design
      </p>
    </div>
    <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        PGP Key
      </p>
    </div>
  </div>
  <img src={require('../images/portal_raster.jpg')} class="db" alt="smileyface"/>
</main>
</div>

)
