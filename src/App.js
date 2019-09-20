import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Project1 from './components/Project1.jsx'
import Project2 from './components/Project2.jsx'
import Project3 from './components/Project3.jsx'
import Project4 from './components/Project4.jsx'
import Contact from './components/Contact.jsx'

let windowX;
let windowY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'about',
      transform: 0,
      windowX: 0,
      windowY: 0
    };
    this.updateWindow = this.updateWindow.bind(this);
  }
  

  listenScrollEvent = e => {
    let scrollTop = window.scrollY;
    console.log(scrollTop)
    if (window.scrollY > 4185) {
      this.setState({
        active: 'contact',
        transform: scrollTop - 4185})
    } else if (window.scrollY > 3500) {
      this.setState({
        active: 'project4',
        transform: scrollTop - 3500})
    } else if (window.scrollY > 2785) {
      this.setState({
        active: 'project3',
        transform: scrollTop - 2785})
    } else if (window.scrollY > 2095) {
      this.setState({
        active: 'project2',
        transform: scrollTop - 2095})
    } else if (window.scrollY > 1395) {
      this.setState({
        active: 'project1',
        transform: scrollTop - 1395})
    } else if (window.scrollY > 690) {
      this.setState({
        active: 'stack',
        transform: scrollTop - 690})
    } else {
      this.setState({
        active: 'about',
        transform: scrollTop})
    } 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener('resize', this.updateWindow);

    windowX = window.innerWidth
    windowY = window.innerHeight
    console.log("windowX", windowX)
    console.log("windowY", windowY)
    this.setState({
      windowX,
      windowY
    })
  }

  updateWindow() {
    let updateX = window.innerWidth;
    let updateY = window.innerHeight;
    console.log("windowX", updateX)
    console.log("windowY", updateY)
    if (this.state.windowX !== updateX || this.state.windowY !== updateY) {
      this.setState({
        windowX: updateX,
        windowY: updateY
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener('resize', this.updateWindow);
  }
  
  render() {
    let num = this.state.transform;
    let num2 = 100 / num;
    if (num2 < .25) { num2 = 0} 
    let top;
    let right = 0;
    if (this.state.windowX > 1280) {
      right = (this.state.windowX-1280)/2 
    } else {
      right = 0;
    }
    let style = {
      trans: {
        zIndex: -1,
        transform: "translateY(" + num + "px)",
        opacity: num2
      },
      nav: {
        top: top,
        right: right
      }
    };

    return (
      <div className="centerFlex">

        <div className="App">
          <div style={style.nav} className="fixedNav">
            <Nav activeLink={this.state.active}/>
          </div>
          <div id="about" className="about container">
            <div>
              <div className="title">
                {this.state.active === "about" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>Brooke Kullberg</h1> : <h1>Brooke Kullberg</h1>}
              </div>
              <div className="flexAbout z">
                <About />
              </div>
            </div>
          </div>
          <div id="stack" className="stack container">
            <div>
              {this.state.active === "stack" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>Stack</h1> : <h1>Stack</h1>}
              <div className="z">
                <Stack/>
              </div>
            </div>
          </div>
          <div id="projects" className="project1 container">
            <div>
              {this.state.active === "project1" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>Voces</h1> : <h1>Voces</h1>}
              <div className="z">
                <Project1 />
              </div>
            </div>  
          </div>
          <div className="project2 container">
            <div>
              {this.state.active === "project2" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>PDX Field Guide</h1> : <h1>PDX Field Guide</h1>}
              <div className="z">
                <Project2 />
              </div>
            </div>
          </div>
          <div className="project3 container">
            <div>
              {this.state.active === "project3" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>iovation Clone</h1> : <h1>iovation Clone</h1>}
              <div className="z">
                <Project3 />
              </div>
            </div>
          </div>
          <div className="project4 container">
            <div>
              {this.state.active === "project4" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>Assassins</h1> : <h1>Assassins</h1>}
              <div className="z">
                <Project4 window={this.state.windowX}/>
              </div>
            </div>
          </div>
          <div id="contact" className="contact container">
            <div>
              {this.state.active === "contact" ? <h1 style={style.trans} onScroll={this.listenScrollEvent}>Contact</h1> : <h1>Contact</h1>}
              <div>
                <Contact />
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
