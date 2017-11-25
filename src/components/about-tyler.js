import React from 'react'
import Button from '../components/Button'

export default () => (

<article class="mw9 center pv4 mb6">
  <section class="cf">
      <p className="fl w-100 w-25-ns db ttu gray tracked pa3 ph6-l mv3 mv4-ns f6 lh-copy">
        LEADERSHIP
      </p>
        <img src={require('../images/tyler_profile_110317.png')} class=" w-90 w-30-ns ma3 ma4-ns pl4-ns hadow-4" alt="Tyler"></img>
      <ul class="fr w-100 w-75-ns list tl">
        <li class="db pa3 pa4-ns">
          <b class="db f6 ttu tracked mb3">Tyler Schmidt</b>
          <span class="f6 tracked db lh-copy measure">
            Tyler Schmidt has been a UX Design practicioner for the past 8 years. Now managing Pylon, Tyler manages a distributed team of best in class creatives to provide impactful solutions for modern brands. Tyler believes design is a way to add value in this world.
          </span>
        </li>
      </ul>
    </section>
    <Button />
  </article>
)
