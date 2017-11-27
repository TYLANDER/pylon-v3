import React from 'react'
import Team from '../images/astronauts_raster.jpg'


export default () => (
<div className="w-100">
<article class="mw9 mw8-ns pt6 pt4-ns center">
<div class="aspect-ratio aspect-ratio--16x9 mb0">
<div class="aspect-ratio--object img bg-center cover" style={{backgroundImage:`url(${Team})`}}></div>
</div>
</article>
  <header className='mw8-m mw9-l center ph3 ph5-l pb6'>
    <div className='cf mt0'>
      <div className="fl dib w-100 w-40-l mt0-m mv5-ns mb5 fw4 f4 f3-ns v-mid-ns pr0 pr4-m">
        <h1 className="dib f-4 f-5-ns fw5 bt bb bw2 mv2 mv3-m  lh-title">We Believe in Intrinsic Value</h1>
          <p className="dib f6 tracked fw4 measure-wide  lh-copy">
            We are a digital design and innovation studio.<br />
            We solve problems with teams of smart creatives.<br />
            We accecpt payment in cryptocurrency.
          </p>
      </div>
    </div>
  </header>
</div>
)
