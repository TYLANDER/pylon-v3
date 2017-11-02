import React from 'react'
import Background from '../images/portal_raster.jpg'

const divStyle = {
  backgroundImage: `url(${Background})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default () => (
<header className='sans-serif'>
  <div className='cover bg-center bg-top vh-75 mt2 mt0-ns' style={divStyle}>
  </div>
</header>
)
