import React from 'react'
import dr_manhattan from '../images/dr_m.jpg'
import Button from './Button'

export default () => (
  <header className='tc pv4 pv5-ns'>
    <img src={dr_manhattan} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6 mid-gray'>Tyler Schmidt</h1>
    <h2 className='f6 gray fw2 ttu tracked'>San Francisco</h2>
    <Button />
  </header>
);
