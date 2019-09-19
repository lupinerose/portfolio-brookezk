import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Project1 from './components/Project1.jsx'
import Project2 from './components/Project2.jsx'
import Project3 from './components/Project3.jsx'
import Contact from './components/Contact.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'about',
      transform: 0
    };
  }
  

  listenScrollEvent = e => {
    let scrollTop = window.scrollY;
    console.log(scrollTop)
    if (window.scrollY > 4095) {
      this.setState({
        active: 'contact',
        transform: scrollTop - 4195})
    } else if (window.scrollY > 3395) {
      this.setState({
        active: 'project4',
        transform: scrollTop - 3485})
    } else if (window.scrollY > 2715) {
      this.setState({
        active: 'project3',
        transform: scrollTop - 2785})
    } else if (window.scrollY > 2035) {
      this.setState({
        active: 'project2',
        transform: scrollTop - 2095})
    } else if (window.scrollY > 1355) {
      this.setState({
        active: 'project1',
        transform: scrollTop - 1395})
    } else if (window.scrollY > 675) {
      this.setState({
        active: 'stack',
        transform: scrollTop - 680})
    } else {
      this.setState({
        active: 'about',
        transform: scrollTop})
    } 
  }

  // handleScroll = e => {
  //   let scrollTop = window.scrollY;
  //   this.setState({
  //     transform: scrollTop
  //   });
  // }

  
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    // window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    // window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    let num = this.state.transform;
    let num2 = 100 / num;
    if (num2 < .25) { num2 = 0} 
    let style = {
      transform: "translateY(" + num + "px)",
      opacity: num2
    };
    return (
      <div className="App">
        <div className="fixedNav">
          <Nav activeLink={this.state.active}/>
        </div>
        <div id="about" className="about container">
          <div>
            <div className="title">
              {this.state.active === "about" ? <h1 style={style} onScroll={this.listenScrollEvent}>Brooke Kullberg</h1> : <h1>Brooke Kullberg</h1>}
            </div>
            <div className="flexAbout">
              <About />
            </div>
          </div>
        </div>
        <div id="stack" className="container">
          <div>
            {this.state.active === "stack" ? <h1 style={style} onScroll={this.listenScrollEvent}>Stack</h1> : <h1>Stack</h1>}
            <div>
              <Stack/>
            </div>
          </div>
        </div>
        <div id="projects" className="project1 container">
          <div>
             {this.state.active === "projects" ? <h1 style={style} onScroll={this.listenScrollEvent}>Voces</h1> : <h1>Voces</h1>}
            <div>
              <Project1 />
            </div>
          </div>  
        </div>
        <div className="project2 container">
          <div>
            <h1 style={style} onScroll={this.listenScrollEvent}>PDX Field Guide</h1>
            <div>
              <Project2 />
            </div>
          </div>
        </div>
        <div className="project3 container">
          <div>
            <h1 style={style} onScroll={this.listenScrollEvent}>iovation Clone</h1>
            <div>
              <Project3 />
            </div>
          </div>
        </div>
        <div className="project4 container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Assassins</h1>
        </div>
        <div id="contact" className="contact container">
          <div>
            <h1 style={style} onScroll={this.listenScrollEvent}>Contact</h1>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
