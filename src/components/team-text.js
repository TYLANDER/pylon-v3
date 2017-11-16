import React from 'react'
import Team from '../images/astronauts_raster.jpg'

export default () => (
<div>
  <article class="mw9 mw8-ns center">
    <div class="aspect-ratio aspect-ratio--16x9 mb0">
      <div class="aspect-ratio--object img bg-center cover" style={{backgroundImage:`url(${Team})`}}></div>
    </div>
  </article>
    <section class="flex flex-column flex-row-ns mw9 pb4 pb6-ns center">
        <p className="pa3 ph6-l  f5 lh-copy w-25">
          TEAM
        </p>
      <ul class="list tl">
        <li class="pa3 pa4-ns">
          <b class="db f3 mb3">World Class Creatives</b>
          <span class="f5 db lh-copy measure">
            Pylon is a modular organization. Teams form on a per-project basis.
            All teams are best-in-class and selected based on their specific set of skills.
          </span>
        </li>
      </ul>
      </section>
</div>
)
