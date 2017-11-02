import React from 'react'



export default () => (
<div className="w-100">

  <header className='mw8-m mw9-l center ph5-l pt6'>
      <div className='cf pa3' >
        <div className="fl w-50-l  mt0 mv5-ns mb5 fw4 f4 f3-ns v-mid-ns">
          <h1 className="dib pr4-m pr6-ns f-5 fw6 bt bb bw2 mv0 mv3-m lh-title">Utility for End Users</h1>
            <h4 className="f4 f4-ns lh-copy fw4 black-50 mt0 mv3 near-black measure-narrow">
              Pylon is a global design and innovation consultancy based in San Francisco. Design is the way we add value to the world.
            </h4>
            <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">We solve problems with teams of smart creatives.</h4>
        </div>
      <div class="fr w-50-l mt0 mb4 mb5-l v-mid-ns">
          <img src={require('../images/about_hero@2x.png')} class="w-100 mw7 w6-ns o-85" alt="smileyface"/>
      </div>
    </div>
  </header>
</div>
)
