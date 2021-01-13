import './App.css';
import {NavLink,Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import styled from 'styled-components';
import "hamburgers"
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Nav from './Components/Nav.js'
import ScrollToTop from './Components/ScrollToTop';





function App() {

  const StyleApp = styled.div`
  background-color: black;
  

  
  `


  return (
    <>
   
 <StyleApp>
   
<Nav></Nav>

</StyleApp>
</>
  )
  }

export default App;
