import React from 'react';


export default () => (
  <section class="mw9 center sans-serif ph3-ns pv4 mb6">
    <article class="">
        <div class="flex flex-column flex-row-ns">
          <div class="w-100 mb4 mb0-ns w-50-ns ph3 pl5-ns">
            <h1 class="f3 fw5 f1-ns mt0  lh-title">Muscle Butter</h1>
            <p class="f4 f6-ns ttu lh-copy mv0">Design & Development</p>
            <p class="f6  lh-copy measure">
               This site promotes MuscleButter, Alex Schmidt's movement & manual therapy practice in SOMA, San Francisco.
            </p>
              <a className="f4 f6-ns lh-copy purple link hover-light-purple" href="https://www.themusclebutter.com/">Visit Webstie ></a>
          </div>
          <div class="w-100 w-50-ns ph3 pl5-ns">
            <a href="https://www.themusclebutter.com/"><img src={require('../images/Musclebutter_macbook_07May17.png')} class="shadow-4" alt="Interspan"></img></a>
          </div>
        </div>
    </article>
  </section>
)
