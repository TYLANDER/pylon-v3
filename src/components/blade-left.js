import React from 'react';


export default () => (
  <section class="mw9 center sans-serif ph3-ns pv4 mb6">
    <article class="">
        <div class="flex flex-column flex-row-ns">
          <div class="w-100 mb4 mb0-ns w-50-ns ph3 pl5-ns">
            <h1 class="f1 mt0 lh-title">MuscleButter</h1>
            <p class="f4 f6-ns lh-copy mv0">Design & Development</p>
            <p class="f4 f5-l lh-copy measure">
               This site was launched to promote Alex Schmidt's manual therapy practice, MuscleButter, a bodywork studio in SOMA, San Francisco.
            </p>
              <p className="f4 f6-ns lh-copy purple link hover-light-purple" href="https://www.themusclebutter.com/">Visit Webstie ></p>
          </div>
          <div class="w-100 w-50-ns ph3 pl5-ns">
            <img src={require('../images/Musclebutter_macbook_07May17.png')} class="shadow-4" alt="Interspan"></img>
          </div>
        </div>
    </article>
  </section>
)
