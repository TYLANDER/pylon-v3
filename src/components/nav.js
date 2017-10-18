import React from 'react'
import Logo from '../images/blue_logo_101717@2x.png'



//may want to add the <Link> Class here...
export default () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l sans-serif">
    <div className="db v-mid fl">
      <a className="db dtc-l v-mid mid-gray link dim w-10 w-10-l tc tl-l dib mb0-l" href="/" title="Home">
        <img src={Logo} className="dib w2 h2" alt="Pylon"></img>
      </a>
      <a className="link v-mid dim dark-gray f5-l fw2 mr3 mr4-l">Pylon</a>
    </div>
    <div className="db dtc-l v-mid w-100 w-75-l tl tr-l">
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/" title="Home">Home</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/work" title="Work">Work</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/about" title="About">About</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/blog" title="Blog">Design Pattern</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/swiss" title="Swiss">SwissHome</a>
    </div>
  </nav>
)
