import React from 'react'
import Tyler from '../images/tyler_profile_110317.png'
import Button from '../components/Button'

export default () => (

<article class="mw9 mw8-ns center pt3">
  <section class="flex flex-column flex-row-ns mw9  pb6 center">
      <p className="db pa3 ph6-l mv3 mv4-ns f5 f4-ns lh-copy w-25">
        LEADERSHIP
      </p>
      <div class="aspect-ratio aspect-ratio--8x5 w-90 center">
        <div class="aspect-ratio--object img bg-center contain shadow-4" style={{backgroundImage:`url(${Tyler})`}}></div>
      </div>
    <ul class="list pl0 pl6-m pl7-l tl">
      <li class="pa3 pa4-ns">
        <b class="db f3 mb1">Tyler Schmidt</b>
        <span class="f5 db lh-copy measure">
          Pylon is a modular organization. Teams form on a per-project basis.
          All teams are best-in-class and selected based on their specific set of skills.
        </span>
      </li>
      <li className="pa3 pa4-ns"></li>
    </ul>
    <Button />
    </section>
  </article>

)
