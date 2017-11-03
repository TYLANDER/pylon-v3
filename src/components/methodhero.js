import React from 'react'



export default () => (
<div className="w-100">

  <header className='mw8-m mw9-l center ph3 ph5-l pt6'>
    <div className='cf' >
      <div className="fl dib w-100 w-40-l mt0-m mv5-ns mb5 fw4 f4 f3-ns v-mid-ns pr0 pr4-m">
        <h1 className="dib f-5 fw6 bt bb bw2 mv0 mv3-m lh-title">Utility to End Users</h1>
          <p className="f4 fw4 measure-wide lh-copy mt0 mv3">
            We identify and solve the right problem through a focus on human-centered design methodologies.
          </p>
          <p className="f4 fw4 measure-wide lh-copy mt0 mv3">Tried and true design sprints.</p>
      </div>
      <div class="fr w-50-l mt0 mb3 mb5-l v-mid-ns">
        <img src={require('../images/about_hero@2x.png')} class="w-100 mw7 w6-ns o-85" alt="smileyface"/>
      </div>
    </div>
  </header>
</div>
)
