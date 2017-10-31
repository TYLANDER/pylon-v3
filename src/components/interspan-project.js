import React from 'react'

export default () => (
  <div>
  <article class="bg-white sans-serif">
    <div>
      <img class="vh-75 contain bg-center o-50 bg-black" src={require('../images/Hero.png')} alt='manhattan_header'></img>
    </div>
    <div class="ph4 ph5-m ph6-l">
      <div class="pv5 f4 f2-ns measure center">
        <h1 class="fw6 f1 fl w-100 black-70 mt0 mb3">Interspan Resources</h1>
        <p class="db lh-copy black-70 sans-serif fw3 mv0 f4 f3-m f2-l measure">
        We fully redesigned the Interspan job application flow - from front end UI to back end database setup. We migrated Interspan to a Google cloud instance over a locally-hosted server. Effectively moving Interspan to the 20th Century.
        </p>
      </div>
      <div class="cf mw8 center">
        <div class='fl w-33 w-50-m w-33-l pr2 pr2-l'>
          <img class="pv6 cover bg-center" src={require('../images/dr_m.jpg')} alt="Cover Center"></img>
        </div>
        <div class='fl w-33 w-50-m w-33-l ph3 pr0-m ph3-l'>
          <img class="pv6 cover bg-center" src={require('../images/dr_m.jpg')} alt="Cover Center"></img>
        </div>
        <div class='fl w-33 w-100-m w-33-l pl2 pl0-m pl2-l mt4-m'>
          <img class="pv6 cover bg-center" src={require('../images/dr_m.jpg')} alt="Cover Center"></img>
        </div>
      </div>
      <div class="measure f3 center mv5 black-70">
        <h1 class="fw6 f3">The subtitle for the project</h1>
        <p class="lh-copy measure f4 f3-ns black-70">
          Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.
        </p>
        <p class="lh-copy measure f4 f3-ns black-70 baskerville">
          The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.
        </p>
      </div>
      <img src={require('../images/dr_m.jpg')} alt="Cover Center" class="db w-100"></img>
      <blockquote class="mh0 pr0 mt5">
        <p class="f2 f1-l fw1 mv0 tc lh-title baskerville">
          “I remember going up to that McDonald's and getting my damn McRib. When I first got there.”
        </p>
        <p class="tc f6 gray">
          Michael Jordan
        </p>
      </blockquote>
      <div class="measure f4 f3-ns center mv5 black-70">
        <p class="lh-copy measure f3 black-70">
          There's an unspoken shadow over the stories about that town house on Essex Drive. James Jordan remodeled the basement for his son. Did all the work himself, because he'd never let Michael pay for something he could do on his own. The first winter, while Michael was out of town for the All-Star Game, his pipes froze. His dad ripped out the walls, replacing the pipes himself, patching and repainting when he finished. He spent two weeks fixing his son's home. James and Mike -- that's where all this nostalgia has been headed, from the moment it began.
        </p>
        <div class="aspect-ratio aspect-ratio--16x9 mv5">
          <iframe src="https://www.youtube.com/embed/LAr6oAKieHk" class="aspect-ratio--object" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title='jordan'></iframe>
        </div>
      </div>
    </div>
  </article>
  <section class="cf mt5 pv5 bt b--black-05 ph6-l">
    <h1 class="tc f5 ttu fw6 tracked mb4">Other Projects</h1>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
    <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
    <a href="#0" class="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
    <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
    <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
      <img class="grow cover bg-center pv5 pv6-l" src={require('../images/dr_m.jpg')} alt="Other Projects"></img>
    </a>
  </section>
</div>
)
