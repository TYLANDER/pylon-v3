import React from 'react'

//I should add in reference links here to relevant books or concepts that I use in design. Maybe Image assets on Desktop but that's beyond the scope of an MVP.
export default () => (
    <section class="flex flex-column flex-row-ns mw9 center">
        <p className="db pa3 ph6-l mv2 mv4-ns f5 f4-ns lh-copy w-25">
          METHOD
        </p>
      <ul class="list pl0 pl6-m pl7-l tl">
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">Define the Problem</b>
          <span class="f5 db lh-copy measure">
            Scoping.<br />
            Human Centered Research<br />
            Persona & User Journey Creation.<br />
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">
          Generate Ideas
          </b>
          <span class="f5 db lh-copy measure">
          Strategic insights inform direction.<br />
          The Void provides ideas.<br />
          Multiple directions explored.
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">
            Design Review
          </b>
          <span class="f5 db lh-copy measure">
          Decide on a single direction.
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">
            Rapid Prototyping
          </b>
          <span class="f5 db lh-copy measure">
            User Journey Mapping<br />
            Wireframes<br />
            Tachyons (Functional CSS)<br />
            Atomic Design System<br />
            Interactive Prototype
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">
            Review, Refine, Reiterate
          </b>
          <span class="f5 db lh-copy measure">
            Discuss design with stakeholders.<br />
            Integrate feedback; seek approvals.<br />
            Reiterate if necessary.
          </span>
        </li>
        <li class="pa3 pa4-ns">
          <b class="db f3 mb1">
            Production
          </b>
          <span class="f5 db lh-copy measure">
          Choose the right tech stack for the experience.<br />
          Set up the development environment, and assemble team.<br />
          Appply a distributed network of developers to finish the repo.<br />
          Test and deploy the app.<br />
          [High Five!]</span>
        </li>
      </ul>
      </section>
)
