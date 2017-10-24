import React from 'react'
import Background from '../images/portal_raster.jpg'

const divStyle = {
  backgroundImage: `url(${Background})`,
  opacity: '0.87',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default () => (
<header className='bb b--light-gray sans-serif'>
  <div className='cover bg-center bg-top vh-75 vh-90-l' style={divStyle}>
    <div className='pb5 pb6-m pb7-l pt2 ph2' >
      <div className="tc mt0 mt4-ns ph4 ph5-m ph6-l content-center">
      </div>
    </div>
  </div>
</header>
)
