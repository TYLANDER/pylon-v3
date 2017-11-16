import React from 'react'



export default () => (
<article class="cf ph3 ph5-ns pv5">
  <header class="fn fl-ns w-50-ns pr4-ns">
    <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
      InterSpan Resources
    </h1>
    <h2 class="f3 fw4 dark-gray lh-title">
      Spanning the gap between employer and employee.
    </h2>
    <time class="f6 ttu tracked gray">Design, Consulting & Web Development</time>
  </header>
  <div class="fn fl-ns w-50-ns">
    <p class="f5 lh-copy measure mt0-ns">
      InterSpan Resources is a workforce staffing consultancy based in Chesterfi
      eld Virginia. InterSpan has been providing good jobs since 1996.
      In 2017 InterSpan was in dire need of a website redesign.
      A a company managing 500 employees at any given time, employee data is of upmost concern.
      InterSpan had an old Microsoft SQL Database porting to Microsoft Access on a local network.
      Pylon met with InterSpan to oversee the update of their website, integration of an online job application
      and integration of that application data into the InterSpan employee database.
    </p>
    <img class="db w-100 mt4 mt5-ns" src="http://mrmrs.github.io/photos/010.jpg" alt="dusk skyline above a grassy rockface covered in trees."></img>
    <p>
      "Pylon was able to revamp all of our internal systems. With Tyler's advisement we were able to join the 21st century." -Mike Daugherty, CEO
     </p>
    <p class="f5 lh-copy measure">
      Besides a simple brand refresh and website redesign, we also did a good deal
      to improve the effiency of the HR systems in place at interspan. We are up
      ating the internal database to integrate with modern DB management software.
      We have cut the manual data entry by interspan employees down to almost no
      thing, saving prescious time to focus more on serving InterSpans employees. This was the
      revious job application flow for hiring a new employee at Interspan.
      Interspan Has a monthly job turnover of at least 100 people given the temp
      orary staffing nature of the jobs.
    </p>
    <img class="db w-100 mt4 mt5-ns shadow-4" src={require('../images/Interspan_job_application_flow_41817.png')} alt="Interspan Job Application Flow."></img>
  </div>
</article>
)
