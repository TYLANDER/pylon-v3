import React from 'react'



export default () => (
<header className='mw7-m mw9-l center pt6 ph3 ph6-l '>
    <div className='cf' >
      <div className="fl w-50-l  mt0 mv5-ns mb5 fw4 f4 f3-ns v-mid-ns">
        <h1 className="f2 f1-ns">Utility for End Users</h1>
          <h4 className="f4 f4-ns lh-copy fw4 black-50 mt0 mv3 near-black measure-narrow">
            Pylon is a global design and innovation consultancy based in San Francisco. Design is the way we add value to the world.
          </h4>
          <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">We solve problems with teams of smart creatives.</h4>
      </div>
    <div class="fl w-50-l mt0 mb4 mb5-l v-mid-ns">
        <img src={require('../images/about_hero@2x.png')} class="w-100 mw7 w7-ns o-85" alt="smileyface"/>
    </div>
  </div>
</header>
)
