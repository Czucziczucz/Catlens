
import {NavLink,Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Page/Home'
import About from '../Page/About'
import Galery from '../Page/Galeria'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import styled from 'styled-components';
import "hamburgers"
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Portrait from '../Page/Portrait'
import Animals from '../Page/Animals'
import Art from '../Page/Art'
import Architecture from '../Page/Architecture'
import ScrollToTop from './ScrollToTop'
import device from '../Components/device'



function Nav() {

    const [open, setOpen] = useState(false)
    
    const StyleNav = styled.div`
    font-size:50px;
    height:100px;
    list-style:none;
    opacity:1;
    &:hover{
       
    };
    @media ${device.mobileL} {
    font-size:30px;
   
     
  }
`
    
    const StyleLi = styled.li`
    margin:50px; 30px;
    `
    
    const LinkWrap = styled(Link)`
    text-shadow: 1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px #000, -2px 2px 0px  #000;
    opacity:0.9;
    padding:5px;
    list-style: none;
    text-decoration: none;
    color:white;
    text-algin:center;
    &:hover{text-decoration: none;
        color:red;
        opacity:0.5;
    }
    
    `
    
    
    
      return(
    
    <>
   
    <Router onUpdate={()=> window.scrollTo(0,0)} >
    
    <div id="nav-icon3" style={{zIndex:"30"}} className={open?"open":""} onClick={()=>setOpen(!open)} >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
    </div>

    <nav style={{
       zIndex:"30",
    position:"fixed",
       transition:"ease-in-out 1s" ,
       transform: open?"translateX(0)":"translateX(-100%)",
       
       
      
     }}>
    
    
      <StyleNav>
        <StyleLi>
          <LinkWrap  to="/">Home</LinkWrap>
        </StyleLi>
    
        <StyleLi>
          <LinkWrap to="/about">About</LinkWrap>
        </StyleLi>
    
        <StyleLi>
          <LinkWrap to="/Galery">Contact</LinkWrap>
        </StyleLi>
        
        </StyleNav>
      </nav>
    
 
      <Route render={({location})=>( <TransitionGroup>
          <CSSTransition 
          key={location.key}
          timeout={300}
          classNames="fade">
  
      <Switch location={location}>
        
              <Route path="/about"  component={About}>
                <About />
              </Route>
              <Route path="/Galery" component={Galery}>
                <Galery />
              </Route>
              <Route exact strict path="/" component={Home}>
                <Home />
              </Route>
              <Route path="/Portrait" component={Portrait}>
                <Portrait/>
              </Route>
              <Route  path="/animals" component={Animals}>
                <Animals/>
              </Route>
              <Route path="/art" component={Art}>
                <Art/>
              </Route>
              <Route path="/architecture" component={Architecture}>
                <Architecture/>
              </Route>
           
            </Switch>
           
            </CSSTransition></TransitionGroup>)}></Route>
          
            </Router>
    </>);
    
    }

    export default Nav