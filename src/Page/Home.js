import styled from 'styled-components'
import bild1 from '../Img/1.jpg'
import bild2 from '../Img/2.jpg'
import bild3 from '../Img/3.jpg'
import bild4 from '../Img/4.JPG'
import {useEffect, useState,useRef} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import Portrait from './Portrait'
  import Animals from './Animals'
import Art from './Art'
import Architecture from './Architecture'
  import device from '../Components/device'
  
  import { Icon, IconGroup } from 'semantic-ui-react'
 

const Header=({match})=>{
    const {path,url}=useRouteMatch() 

    
      

const BildBox1 = styled.div`
height: 100vh;
width: 100%;
background-image: url(${bild1});
@media ${device.mobileL} {
    
    background-position: -300px center;
    background-size: cover;
    
   
}
@media ${device.tablet} {
    background-position: -300px center;
    background-size: cover;
    
}

    `
    const BildBox2 = styled.div`
height: 100vh;
width: 100%;
background-image: url(${bild2});
@media ${device.mobileL} {
    
    background-position: -center center;
    
    background-size: cover;
   
}
@media ${device.tablet} {
    background-position: -300px center;
    background-size: cover;
    
}


    `
    const BildBox3 = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bild3});
    background-size: cover;
    @media ${device.mobileL} {
    
        background-position: -center center;
        background-size: cover;
       
    }
    @media ${device.tablet} {
        background-position: -300px center;
        background-size: cover;
        
    }
    
        `
        const BildBox4 = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bild4});
    background-size: cover;
    @media ${device.mobileL} {
    
        background-position: -center center;
        background-size: cover;
       
    }
    @media ${device.tablet} {
        background-position: -300px center;
        background-size: cover;
        
    }
        `

        const TextBild = styled.div`
        font-size:100px;
        text-Align:center;
        
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:white;
        cursor:pointer;
        &:hover{opacity:0.7;}
         @media ${device.mobileL} {
            font-size:30px;
            
        }

        `
        const WrapLink = styled(Link)`
        color:white;
       
        &:hover{
            color:white;
            text-decoration:none;
        }
        `
        const ScrollArrow = () =>{

            const [showScroll, setShowScroll] = useState(false)
          
            const checkScrollTop = () => {
              if (!showScroll && window.pageYOffset > 400){
                setShowScroll(true)
              } else if (showScroll && window.pageYOffset <= 400){
                setShowScroll(false)
              }
            };
          
            const scrollTop = () =>{
              window.scrollTo({top: 0, behavior: 'smooth'});
            };
          
            window.addEventListener('scroll', checkScrollTop)
          
            return (
               
                  <Icon  content="angle double up" name="angle double up" className="scrollTop" onClick={scrollTop} style={{zIndex:"100", position:"fixed",bottom:"0",left:"50%",fontSize:"40px",transform:"translate(-50%)", color:"white",fontWeight:"lighter", opacity:"0.8"}}/>
                 
            );
          }
    
        
    
    return(
        
        
<div  >
    



<BildBox1  style={{zIndex:"25", position: "sticky", top:"-60vh", height:"100vh",}}><TextBild><WrapLink to="/portrait">- Portrait -</WrapLink></TextBild></BildBox1>

<BildBox2  style={{zIndex:"26", position:"sticky", top:"-60vh",backgroundPosition:"center",height:"100vh"}}><TextBild><WrapLink to="/animals">- Animals -</WrapLink></TextBild></BildBox2>

<BildBox3 style={{zIndex:"27", top:"-60vh", position:"sticky",backgroundPosition:"center",height:"100vh"}} ><TextBild><WrapLink to="/art">- Art -</WrapLink></TextBild></BildBox3>

<BildBox4  style={{zIndex:"28", position:"sticky", top:"-60vh",backgroundPosition:"center",height:"100vh"}}><TextBild><WrapLink to="/architecture">- Landscape -</WrapLink></TextBild></BildBox4>

<ScrollArrow></ScrollArrow>

{/*
<Icon onClick={ScrollTop} content="angle double up" name="angle double up" 
style={{zIndex:"100", position:"fixed",bottom:"0",left:"50%",fontSize:"50px",transform:"translate(-50%)"
}}></Icon> */}




<Switch>
<Route path="/portrait"></Route>

<Route path="/animals"></Route>

<Route path="/art"></Route>

<Route path="/architecture"></Route>

</Switch>

</div>

    )
}




const Home = () => {

return ( <>
        <Header></Header>
       
  
        </>
     );
}
 
export default Home;