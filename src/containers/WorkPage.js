import React, { Component } from 'react';
import Nav from '../components/nav'


class WorkPage extends Component {
  render() {
    return (
    <div className="x0 sans-serif">
      <Nav />
        <header className="tl ph6-l mv6">
        <h1 className="f5 f3-m f1-l fw2 black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h2 className="f2 f3-m 3-l fw1 black-50 mt0 mv3 near-black">
          Pylon designs products with intrinsic value.
        </h2>
        <h2 className="f2 f3-m 3-l fw1 black-50 lh-copy mv3 near-black">We solve problems with teams of smart creatives.</h2>
      </header>
      <main className="pa3 pt6-ns ph6-l sans-serif">
        <p className="f4 lh-copy measure">
          WHAT WE DO
        </p>
      </main>
      <section className="SplitRight_1_2-section pt3 pb5">
        <div className="mauto pl4 pr4 max-width-1320px">
          <div className="df flex-wrap-wrap ml-16px mr-16px align-items-center">
            <div className="pl3 pr3 pt2 pb2 sm-order-2 sm-w-50P w-100P"><img className="db max-width-100P h-auto w-100P" src="https://s3-us-west-1.amazonaws.com/c8r-x0/css-grid-2.jpg"></img></div>
            <div className="pl3 pr3 pt2 pb2 w-100P sm-w-50P">
              <h4 className="m0 lh-1p125 fw-700 text-transform-uppercase letter-spacing-0p05em mb2 fs2"><b><small>AVAILABLE NOW</small></b></h4>
              <h2 className="m0 lh-1p125 fw-700 mb3 fs4 md-fs5 xl-fs6">Interspan Resources</h2>
              <h3 className="m0 lh-1p25 fw-500 text-transform-uppercase letter-spacing-p1em mb3 fs2">Full Stack Web Development, Product Design, Systems Deisgn, Consulting, Database Integration</h3>
              <p className="m0">InterSpan is a workforce staffing company that provides good jobs to light industrial workers. They need a system for applying to jobs online, and a full-stack tech overhaul. Pylon brought InterSapn to the cloud -Google Cloud, for hosting, database management and beyond.</p><a className="text-align-center text-decoration-none white-space-nowrap dif vertical-align-middle align-items-center pt2 pb2 pl3 pr3 br-2px white bg-gray letter-spacing-0p08em fs0 text-transform-uppercase mt2 mb2 mr3" href="#">Sign In with GitHub</a></div>
          </div>
        </div>
      </section>
      <div class="dt mw6 center pt0 pb5 pv5-m pv6-ns">
        <div class="db dtc-ns v-mid-ns">
          <img src="http://tachyons.io/img/super-wide.jpg" alt="A bright blue sky" class="w-100 mw7 w5-ns" />
        </div>
        <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
          <p class="lh-copy">
            For desktop, this text is vertically aligned middle, no matter what the height of the image is.
            On mobile, this is a paragraph below an image.
          </p>
        </div>
      </div>
      <section class="mw7 center">
        <h2 class="athelas ph3 ph0-l">News</h2>
        <article class="pv4 bt bb b--black-10 ph3 ph0-l">
          <div class="flex flex-column flex-row-ns">
            <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 class="f3 athelas mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
              <p class="f5 f4-l lh-copy athelas">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic particles instead
                of transistors.
              </p>
            </div>
            <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt="Photo of a dimly lit room with a computer interface terminal."></img>
            </div>
          </div>
          <p class="f6 lh-copy gray mv0">By <span class="ttu">Robin Darnell</span></p>
          <time class="f6 db gray">Nov. 21, 2016</time>
        </article>
      </section>
    </div>
    );
  }
}

export default WorkPage;
