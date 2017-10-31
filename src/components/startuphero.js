import React from 'react'
import ReactDOM from 'react-dom'
import Background from '../images/portal_raster.jpg'
import { CSSTransition } from 'react-transition-group';
import '../css/index.css'
const duration = 300;

const divStyle = {
  backgroundImage: `url(${Background})`,
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
<CSSTransition in={inProp} timeout={duration}>
  {(state) => (
  <div className='cover bg-center bg-top vh-75 vh-90-l mt0 mt0-ns' style={{
        ...divStyle, ...transitionStyles[state]
      }}>
    <div className='pb5 pb6-m pb7-l pt2 ph2' >
      <div className="tc mt0 mt4-ns ph4 ph5-m ph6-l content-center"></div>
    </div>
  </div>
  )}
</CSSTransition>
);

class StartupHero extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 5000)
  }
  render() {
    return (
      <Fade in={this.state.show}>
        <div className='greeting'>Hello world</div>
      </Fade>
    )
  }
}

ReactDOM.render(<StartupHero />, document.getElementById('root'))

export default StartupHero;
