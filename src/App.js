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
    if (window.scrollY > 4180) {
      this.setState({active: 'contact'})
    } else if (window.scrollY > 1380) {
      this.setState({active: 'projects'})
    } else if (window.scrollY > 680) {
      this.setState({active: 'stack'})
    } else {
      this.setState({active: 'about'})
    } 
  }

  handleScroll = e => {
    let scrollTop = window.scrollY;
    this.setState({
      transform: scrollTop
    });
  }

  
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
          <h1 style={style} onScroll={this.handleScroll}>Brooke Kullberg</h1>
        </div>
        <div id="stack" className="stack container">
        <h1>Stack</h1>
        </div>
        <div id="projects" className="project1 container">
          <h1>Project 1</h1>
        </div>
        <div className="project2 container">
        <h1>Project 2</h1>
        </div>
        <div className="project3 container">
          <h1>Project 3</h1>
        </div>
        <div className="project4 container">
          <h1>Project 4</h1>
        </div>
        <div id="contact" className="contact container">
          <h1>Contact</h1>
        </div>
      </div>
    );
  }
}

export default App;
