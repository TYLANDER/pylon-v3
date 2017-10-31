import React from 'react';


export default () => (
  <section class="mw9 center sans-serif ph3-ns pv4 mb6">
    <article class="">
        <div class="flex flex-column flex-row-ns">
          <div class="pr3-ns mb4 mb0-ns w-100 w-50-ns ph3 pl5-ns">
            <a class="" title="interspan hero" href="/interspan">
              <img src={require('../images/Hero.png')} class="db link dim shadow-4" alt="Interspan"></img>
            </a>
          </div>
          <div class="w-100 w-50-ns ph3 pl5-ns">
            <h1 class="f1 mt0 lh-title">Interspan Right</h1>
            <p class="f4 f6-ns lh-copy mv0">Web Design & Development</p>
            <p class="f4 f5-l lh-copy measure">
              InterSpan is a workforce staffing company dedicated to providing good jobs to light industrial workers.
              InterSpan needed a full brand overhaul, and a new system for handling inbound job applications.
              Pylon created a new tech stack for InterSpan by integrating Google Cloud Engine for secure database management.
            </p>
          </div>
        </div>
    </article>
  </section>
)
