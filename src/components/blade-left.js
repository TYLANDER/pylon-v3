import React from 'react';


export default () => (
  <section class="mw9 center sans-serif ph3-ns pv4">
    <article class="">
        <div class="flex flex-column flex-row-ns">
          <div class="w-100 mb4 mb0-ns w-50-ns ph3 pr3-ns">
            <h1 class="f1 mt0 lh-title">MuscleButter Left</h1>
            <p class="f4 f6-ns lh-copy mv0">Web Design & Development</p>
            <p class="f4 f5-l lh-copy measure">
              InterSpan is a workforce staffing company dedicated to providing good jobs to light industrial workers.
              InterSpan needed a full brand overhaul, and a new system for handling inbound job applications.
              Pylon created a new tech stack for InterSpan by integrating Google Cloud Engine for secure database management.
            </p>
          </div>
          <div class="w-100 w-50-ns ph3 pl5-ns">
            <img src={require('../images/Musclebutter_macbook_07May17.png')} class="shadow-4" alt="Interspan"></img>
          </div>
        </div>
    </article>
  </section>
)
