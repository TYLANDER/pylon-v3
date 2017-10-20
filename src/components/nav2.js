import React from 'react'


export default () => (
<header class="headroom self-start w-100 accentcolorone z-max bg-white bb b--light-gray headroom--not-bottom headroom--pinned headroom--top sans-serif">
  <div class="mw7-m mw8-l center">
    <div class="cf pa2">
      <div class="fl w-100 w-20-ns content-center-ns">
        <a href="/">
          <div class="mt1">
            <img src={require('../images/purple_triangle@2x.png')}  class="w-15 h2 " alt="Pylon Logo"></img>
          </div>
        </a>
      </div>
      <div class="fl w-80 pl2-m ph3 pt0-ns tr-ns">
        <ul class="list w-100 pt2 ph2 pa0-ns ma0 mt3-ns">

            <li class="dib mb1 mr2 mr4-l f6 f5-ns"><a class="ttc underline-hover link near-black no-underline" href="/about/">about</a></li>

            <li class="dib mb1 mr2 mr4-l f6 f5-ns"><a class="ttc underline-hover link near-black no-underline" href="/work/">work</a></li>

        </ul>
      </div>
    </div>
  </div>
</header>
)
