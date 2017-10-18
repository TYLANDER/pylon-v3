import React, { Component } from 'react';
import Nav from '../components/nav'
import TitleText from '../components/title-text'


export default () => (
    <div className="mw9 center sans-serif">
      <Nav />
        <header className="tl ph6-l mv6">
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h2 className="f2 f3-m 3-l fw3 black-50 mt0 mv3 near-black">
          Pylon designs products with intrinsic value.
        </h2>
        <h2 className="f2 f3-m 3-l fw3 black-50 lh-copy mv3 near-black">We solve problems with teams of smart creatives.</h2>
      </header>
      <main className="pa3 pt6-ns ph6-l sans-serif">
        <p className="f4 lh-copy measure">
          WHAT WE DO
        </p>
      </main>
      <section className="center ph6-l">
      <div className="cf center">
        <div className="fl w-100 w-20-ns tc pv5 bg-black-05">
          Option 1
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-10">
          Option 2
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-20">
          Option 3
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-10">
          Option 4
        </div>
      </div>
      <div className="cf center ph6-l">
        <div className="fl w-100 w-20-ns tc pv5 bg-black-05">
          Option 5
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-10">
          Option 6
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-20">
          Option 7
        </div>
        <div className="fl w-100 w-20-ns tc pv5 bg-black-10">
          Option 8
        </div>
      </div>
    </section>
    <main className="pa3 pt6-ns ph6-l sans-serif">
      <p className="f4 lh-copy measure">
        METHOD
      </p>
    </main>
    <TitleText />
    </div>
)
