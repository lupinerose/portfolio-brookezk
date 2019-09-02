import React from 'react';
import './App.css';
import Nav from './components/Nav'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'about'
    };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 700) {
      this.setState({active: 'stack'})
    } else if (window.scrollY > 1400) {
      this.setState({active: 'projects'})
    } else if (window.scrollY > 4200) {
      this.setState({active: 'contact'})
    } else {
      this.setState({active: 'about'})
    } 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {

    return (
      <div className="App">
        <div className="fixedNav">
          <Nav activeLink={this.state.active}/>
        </div>
        <div id="about" className="about container">
          <h1>Brooke Kullberg</h1>
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
