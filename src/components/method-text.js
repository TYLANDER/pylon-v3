import React from 'react'

//I should add in reference links here to relevant books or concepts that I use in design. Maybe Image assets on Desktop but that's beyond the scope of an MVP.
export default () => (
    <section class="flex flex-column flex-row-ns mw9 center">
        <p className="db pa3 ph6-l mv2 mv4-ns f6 ttu tracked gray lh-copy w-25">
          METHOD
        </p>
      <ul class="list pl0 pl6-m pl7-l tl">
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">Define the Problem</b>
          <span class="f6 tracked db lh-copy measure">
            Scoping<br />
            Human Centered Research<br />
            Persona & User Journey Creation<br />
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">
          Generate Ideas
          </b>
          <span class="f6 tracked db lh-copy measure">
          Human-Centered insights inform strategy<br />
          Identify ideas through the constraints of the problem<br />
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">
            Collaborative Review
          </b>
          <span class="f5 db lh-copy measure">
          Workshop ideas<br />
          Decide on a single direction
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">
            Rapid Prototyping
          </b>
          <span class="f6 tracked db lh-copy measure">
            Wireframes<br />
            Tachyons (Functional CSS)<br />
            Atomic Design System<br />
            Interactive Prototype
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">
            Review, Refine, Reiterate
          </b>
          <span class="f6 tracked db lh-copy measure">
            Discuss design with stakeholders<br />
            Integrate feedback; seek approvals<br />
            Reiterate if necessary
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f6 ttu tracked mb1">
            Production
          </b>
          <span class="f6 tracked db lh-copy measure">
          Choose the right tech stack for the experience<br />
          Set up the development environment, and assemble team<br />
          Develop, test and deploy the app<br />
          [High Five!]</span>
        </li>
      </ul>
      </section>
)
