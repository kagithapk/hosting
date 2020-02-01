import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {

  let body_attr = document.createAttribute('class');
  body_attr.value = 'toggle-button__black';
  document.body.setAttributeNode(body_attr);

  let profilepop = () => {
    document.getElementById('git-profile').getAttributeNode('class').value = 'git-profile__show';
  }

  let profileoff = () => {
    document.getElementById('git-profile').getAttributeNode('class').value = 'git-profile__hid';
  }

  let toggle_change = () => {
      let body_tag = document.body;
      let toggle_btn = document.getElementById('toggle-button');
      if (toggle_btn.getAttributeNode('class').value === 'toggle-button__black') {
        body_tag.getAttributeNode('class').value = 'toggle-button__black';
        toggle_btn.getAttributeNode('class').value = 'toggle-button__white';
      }
      else {
        body_tag.getAttributeNode('class').value = 'toggle-button__white';
        toggle_btn.getAttributeNode('class').value = 'toggle-button__black';
      }
  }
  return (
    <div className='header'>
      <BrowserRouter>
        <nav className="navbar">
          <ul>
            <li><Link to="/hosting">Home</Link></li>
            <li><Link to="/hosting/about">About</Link></li>
          </ul>
        </nav>
        <div>
          <p>Welcome to my page!</p>
          <button className='toggle-button__white' id='toggle-button' onClick={() => { toggle_change() }}>Change Theme</button>
        </div>
        <div className='git-div'>
          <span id='git-profile' className='git-profile__hid'>Praveen Kagitha (kagithapk)</span>
          <p>This is my <a className='git-link' href='https://www.github.com/kagithapk' alt='https://www.github.com' onMouseOver={() => {profilepop()}} onMouseOut={() => {profileoff()}}>Github</a> profile!</p>
        </div>
        <Main />
        <Route exact path="/hosting" component={Home}></Route>
        <Route path="/hosting/about" component={About}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
