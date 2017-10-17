import React from 'react'


//may want to add the <Link> Class here...
export default () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l ph5 sans-serif">
    <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
      <svg src=".../public/images/Golden_Purple_101317" className="dib w2 h2 br-100" alt="Pylon"></svg>
    </a>
    <div className="db dtc-l v-mid w-100 w-75-l tl tr-l">
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/" title="Home">Home</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/work" title="Work">Work</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/about" title="About">About</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/blog" title="Blog">Design Pattern</a>
      <a className="link dim dark-gray f5-l fw2 dib mr3 mr4-l" href="/swiss" title="Swiss">SwissHome</a>
    </div>
  </nav>
)
