import React from 'react'
import Tyler from '../images/tyler_profile_110317.png'
import Button from '../components/Button'

export default () => (

<article class="mw9 mw8-ns center pt3">
  <section class="mw9 pb6 center">
      <p className="db pa3 ph6-l mv3 mv4-ns f5 f4-ns lh-copy w-25">
        LEADERSHIP
      </p>
      <div class="aspect-ratio aspect-ratio--8x5 mw6 center">
        <div class="aspect-ratio--object img bg-center cover shadow-4" style={{backgroundImage:`url(${Tyler})`}}></div>
      </div>
    <ul class="list pl0 pl6-m pl7-l tl">
      <li class="pa3 pa4-ns">
        <b class="db f3 mb1">Tyler Schmidt</b>
        <span class="f5 db lh-copy measure">
          Tyler Schmidt has been a UX Design practicioner for the past 8 years. Now managing Pylon, Tyler manages a distributed team of best in class creatives to provide impactful solutions for modern brands. Tyler believes design is a way to add value in this world.
        </span>
      </li>
      <li className="pa3 pa4-ns"></li>
    </ul>
    <Button/>
    </section>
  </article>

)
