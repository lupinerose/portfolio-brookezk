import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx'

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
        active: 'projects',
        transform: scrollTop - 3485})
    } else if (window.scrollY > 2715) {
      this.setState({
        active: 'projects',
        transform: scrollTop - 2785})
    } else if (window.scrollY > 2035) {
      this.setState({
        active: 'projects',
        transform: scrollTop - 2095})
    } else if (window.scrollY > 1355) {
      this.setState({
        active: 'projects',
        transform: scrollTop - 1395})
    } else if (window.scrollY > 675) {
      this.setState({
        active: 'stack',
        transform: scrollTop - 705})
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
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    let num = this.state.transform;
    let style = {
      transform: "translateY(" + num + "px)"
    };

    return (
      <div className="App">
        <div className="fixedNav">
          <Nav activeLink={this.state.active}/>
        </div>
        <div id="about" className="about container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Brooke Kullberg</h1>
        </div>
        <div id="stack" className="stack container">
        <h1 style={style} onScroll={this.listenScrollEvent}>Stack</h1>
        </div>
        <div id="projects" className="project1 container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Project 1</h1>
        </div>
        <div className="project2 container">
        <h1 style={style} onScroll={this.listenScrollEvent}>Project 2</h1>
        </div>
        <div className="project3 container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Project 3</h1>
        </div>
        <div className="project4 container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Project 4</h1>
        </div>
        <div id="contact" className="contact container">
          <h1 style={style} onScroll={this.listenScrollEvent}>Contact</h1>
        </div>
      </div>
    );
  }
}

export default App;
