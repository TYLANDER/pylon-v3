import React from 'react'

import { Link, NavLink } from 'react-router-dom';


export default () => (
  <nav className="dt w-100 border-box pa3 ph5-ns">
    <Link className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
      <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name"></img>
    </Link>
    <div className="dtc v-mid w-75 tr">
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/about" title="About">About</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/work" title="Store">Work</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib" to="https://medium.com/@TylerSchmidt/" title="Blog">Blog</NavLink>
    </div>
  </nav>
)
